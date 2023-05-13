import React from "react";
import styled from "styled-components";
import "./Svg.css";

function DemoPlan() {
    const handleClick = (e) => {
        alert("Zone selection is not available!")
    }
  return (
    <Container>
    <svg id="plan" onClick={ (e) => handleClick(e)}
      xmlns="http://www.w3.org/2000/svg"

      viewBox="-2637.589 -2878.519 5645.115 5724.474"
    >
      <defs>
        <radialGradient
          id="gradient-0"
          cx="85.377"
          cy="-2198.369"
          r="187.969"
          gradientTransform="matrix(2.35227 0 0 2.35227 -93.447 2922.252)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#bada55"></stop>
          <stop offset="1" stopColor="#758d29"></stop>
        </radialGradient>
      </defs>
      <g stroke="#000">
        <ellipse id='stage' cx="249.463" cy="249.463" rx="748.389" ry="748.389"></ellipse>
        <path id='stage' d="M0 -2004.82H498.926V270.06600000000003H0z"></path>
        <path id='stage' d="M-2494.63 -2506.025H2993.5559999999996V-2004.8200000000002H-2494.63z"></path>
      </g>
      <text
        style={{ whiteSpace: "pre" }}
        x="-334.771"
        y="-2134.098"
        fill="#FFF"
        stroke="url(#gradient-0)"
        strokeLinecap="round"
        fontFamily="Arial, sans-serif"
        fontSize="338.5"
      >
        STAGE
      </text>
      <text
        style={{ whiteSpace: "pre" }}
        x="-502.226"
        y="-2719.19"
        fill="#333"
        fontFamily="Arial, sans-serif"
        fontSize="176.3"
      ></text>
      <g stroke="#000">
        <g fill="red">
          <path id="A" d="M-2494.63 -1895.31H-101.59700000000021V-638.5259999999998H-2494.63z"></path>
          <path id="A" d="M614.492 -1895.31H3007.5249999999996V-638.5259999999998H614.492z"></path>
        </g>
        <text
          style={{ whiteSpace: "pre" }}
          x="-1683.12"
          y="-1225.36"
          fill="#FFF"
          strokeWidth="12"
          fontFamily="Arial, sans-serif"
          fontSize="238.6"
          transform="matrix(1.80856 0 0 1.65037 1390.156 876.131)"
        >
          AL
        </text>
        <text
          style={{ whiteSpace: "pre" }}
          x="-1683.12"
          y="-1225.36"
          fill="#FFF"
          strokeWidth="12"
          fontFamily="Arial, sans-serif"
          fontSize="238.6"
          transform="matrix(1.80856 0 0 1.65037 4580.806 876.054)"
        >
          AR
        </text>
      </g>
      <text
        style={{ whiteSpace: "pre" }}
        x="-2637.589"
        y="-662.903"
        fill="#333"
        fontFamily="Arial, sans-serif"
        fontSize="238.6"
      ></text>
      <g stroke="#000">
        <g fill="#FE00C7">
          <path id="B" d="M639.783 997.851l2353.773 4.559V-501.206H597.9c291.13 68.61 968.788 933.66 41.882 1499.057zM-157.4-491.957l-2353.742-13.196-5.519 1503.605 2395.641 8.793c-191.66-69.314-972.308-843.296-36.38-1499.202z"></path>
        </g>
        <text
          style={{ whiteSpace: "pre" }}
          x="-1683.12"
          y="-1225.36"
          fill="#FFF"
          strokeWidth="12"
          fontFamily="Arial, sans-serif"
          fontSize="238.6"
          transform="matrix(1.80856 0 0 1.65037 1307.156 2379.669)"
        >
          BL
        </text>
        <text
          style={{ whiteSpace: "pre" }}
          x="-1683.12"
          y="-1225.36"
          fill="#FFF"
          strokeWidth="12"
          fontFamily="Arial, sans-serif"
          fontSize="238.6"
          transform="matrix(1.80856 0 0 1.65037 4541.796 2379.669)"
        >
          BR
        </text>
      </g>
      <g stroke="#000">
        <path
          id="SM"
          fill="#1E00FF"
          d="M-637.255 1087.504H1130.1550000000002V2845.685H-637.255z"
        ></path>
        <path
          id="SS"
          fill="#0073FF"
          d="M-2530.63 1106.06l1812.739-18.556 17.81 1739.895L-2530.63 1106.06z"
        ></path>
        <path
          id="SS"
          fill="#0073FF"
          d="M2989.715 1087.502l-1785.928 18.281 17.81 1739.9 1768.118-1758.181z"
        ></path>
        <text
          style={{ whiteSpace: "pre" }}
          x="-1683.12"
          y="-1225.36"
          fill="#FFF"
          strokeWidth="12"
          fontFamily="Arial, sans-serif"
          fontSize="238.6"
          transform="matrix(1.80856 0 0 1.65037 3014.018 4100.268)"
        >
          SM
        </text>
        <text
          style={{ whiteSpace: "pre" }}
          x="-1683.12"
          y="-1225.36"
          fill="#FFF"
          strokeWidth="12"
          fontFamily="Arial, sans-serif"
          fontSize="238.6"
          transform="matrix(1.80856 0 0 1.65037 4494.062 3885.13)"
        >
          SR
        </text>
        <text
          style={{ whiteSpace: "pre" }}
          x="-1683.12"
          y="-1225.36"
          fill="#FFF"
          strokeWidth="12"
          fontFamily="Arial, sans-serif"
          fontSize="238.6"
          transform="matrix(1.80856 0 0 1.65037 1399.134 3885.13)"
        >
          SL
        </text>
      </g>
    </svg>
    </Container>
  );
  
}

export default DemoPlan;

const Container = styled.div`
  background-color: #131313;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
