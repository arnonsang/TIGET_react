const express = require("express");
const appLoginAdmin = express();

const dovent = require("dotenv");
dovent.config();

const bcrypt = require("bcrypt");
const saltRounds = 10

const cors = require("cors");
appLoginAdmin.use(cors());

const bodyParser = require("body-parser");
appLoginAdmin.use(bodyParser.json());

const jwt = require("jsonwebtoken");
const tigetSecret = process.env['tiget_secret_admin']

const { dbEvent } = require("../db/dbEvent.js")

appLoginAdmin.post("/login", (req, res) => {
    const { username, password, keepMeSignedIn } = req.body;
    dbEvent.userFindWhereUsername(username, (err, rows) => {
        if (err) {
            res.json({ status: "error", message: "Error when connecting the database" });return;
        } else {
            if (rows.length > 0) {
                if(rows[0].role != "admin") {
                    res.json({ status: "error", message: "You are not admin" });return;
                }
                bcrypt.compare(password, rows[0].password, (err, result) => {
                    if (err) {
                        res.json({ status: "error", message: "Error when comparing the password" });return;
                    } else {
                        if (result) {
                            if (keepMeSignedIn) {
                                var token = jwt.sign({ username: username }, tigetSecret, { expiresIn: "1d" });
                            } else {
                                var token = jwt.sign({ username: username }, tigetSecret, { expiresIn: "1h" });
                            }
                            res.json({ status: "ok", message: "Login successfully", token:token, keepSignIn: keepMeSignedIn });return;
                        } else {
                            res.json({ status: "error", message: "Wrong password" });return;
                        }
                    }
                });
            } else {
                res.json({ status: "error", message: "Account not found" }); return;
            }
        }
    });
});


appLoginAdmin.post("/register", (req, res) => {
    console.log("Admin Register Request => ", req.body);
    const { username, email, password, fname, lname, role } = req.body;

    if(!username || !email || !password || !fname || !lname || !role){
        res.json({ message: "missing : " + (!username ? "username" : !email ? "email" : !password ? "password" : !fname ? "fname" : "lname") + " field" });
        return;
    }

    dbEvent.userFindWhereUsername(username, (err, rows) => {
        if (err) {
            res.json({ status:"err", message: "Error when checking username" });
        } else {
            if (rows.length > 0) {
                res.json({ status:"err", message: "Username already exists" });
            } else {
                dbEvent.userFindWhereEmail(email, (err, rows) => {
                    if (err) {
                        res.json({ status:"err",message: "Error when checking email" });
                    } else {
                        if (rows.length > 0) {
                            res.json({ status:"err", message: "Email already exists" });
                        } else {
                            bcrypt.hash(password, saltRounds, (err, hash) => {
                                if (err) {
                                    res.json({ status:err, message: "Error when hashing password" });
                                } else {
                                    dbEvent.insertAdmin(username, email, hash, fname, lname, role, (err, msg) => {
                                        if (err) {
                                            res.json({ status:err, message: "Error when inserting user" });
                                        }
                                        else {
                                            res.json({ status:"ok", message: "User created successfully", data: msg });
                                        }

                                    });
                                }
                            });
                        }
                    }
                });
            }
        }
    });
});

appLoginAdmin.post("/auth", (req, res) => {
    const token = req.headers["authorization"].split(" ")[1];
    console.log("Admin Auth => " , token)
    if (token) {
        jwt.verify(token, tigetSecret, (err, decoded) => {
            if (err) {
                res.json({ status: "error", message: "Token is not valid" });
            } else {
                res.json({ status: "ok", message: "Token is valid", decoded: decoded });
            }
        });
    } else {
        res.json({ status: "error", message: "Auth token is not supplied" });
    }
});

appLoginAdmin.get("/user", (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];
    console.log("Admin Auth => " , token)
    if (token) {
        jwt.verify(token, tigetSecret, (err, decoded) => {
            if (err) {
                res.json({ status: "error", message: "Token is not valid" });
            } else {
              dbEvent.getAllUser((err, rows) => {
                if (err) {
                    res.json({ status: "error", message: "Error when connecting the database" });return;
                } else {
                    res.json({ status: "ok", message: "Get all user successfully", data: rows });return;
                }
                });
            }
        });
    } else {
        res.json({ status: "error", message: "Auth token is not supplied" });
    }
})
module.exports = { appLoginAdmin };

