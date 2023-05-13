import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

function EventOffline() {
  const [eventData, setEventData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const { eventCode } = useParams();
  const [tryState, setTryState] = React.useState(0);
  useEffect(() => {
    fetch(`https://oauth.iamickdev.com/tiget/getEvent/${eventCode}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "error") {
          setTryState(tryState + 1);
        } else {
          setEventData(data.data);
          console.log("Event is ready!", data.data);
          setIsLoading(false);
          document.title = `${data.data.EventName} | TIGET`;
        }
      });
  }, [eventCode, tryState]);

  if (isLoading) {
    return <Loading />;
  }
  /*
  event data example
  {
  "_id": "645d096c1aeb52cddf8cae3f",
  "EventCode": "SAMPLEEVENT1",
  "EventType": "offline",
  "EventName": "Offline Event 1",
  "EventShortName": "OFFEVT1",
  "EventDate": "11-05-2020",
  "EventTime": "10:00 AM",
  "EventVenue": "Union Hall",
  "EventDescriptionription": "Sample Description for Offline Event 1",
  "EventPoster": "https://placeholder.pics/svg/375x500",
  "EventTag": "#TIGETTAG1, #TIGETTAG2, #TIGETTAG3",
  "EventStatus": "active",
  "EventCoordinators": "TIGET_ADMIN",
  "EventAvailableZone": ["A", "B", "C" ,"D", "E", "F", "G", "H", "I", "J", "K", "L"],
  "EventAvailableSeats": [
    {
      "Zone": "A",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15]"
    },
    {
      "Zone": "B",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    },
    {
      "Zone": "C",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    },
    {
      "Zone": "D",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
    },
    {
      "Zone": "E",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
    },
    {
      "Zone": "F",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
    },
    {
      "Zone": "G",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
    },
    {
      "Zone": "H",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
    }
  ]
}
  */

  return (
    <>
      <Container>
        <div className="flex flex-col bg-[url('https://picsum.photos/200/300')] bg-cover bg-center">
          <div class="w-full h-full flex flex-col xl:flex-row justify-left items-left backdrop-blur-lg">
            <div className="blur-none">
              <img
                className="w-[33.125rem] object-cover"
                src={eventData.EventPoster}
                alt={eventData.EventShortName + "'s_poster"}
              />
            </div>
            <div className="p-16">
              <h1 className="font-bold text-3xl text-tigetgold drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">
                {eventData.EventName}
              </h1>
              <h2 className="font-semibold text-xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-8">
                {eventData.EventDescriptionription}
              </h2>
              <h3 className="font-semibold text-xl text-tigetgold  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-4">
                {eventData.EventDate} at {eventData.EventVenue}
              </h3>
              <p className="font-semibold text-xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-4">
                {eventData.EventTag}
              </p>
              <a href="#buyticket">
                {" "}
                <button className="bg-tigetgold text-white font-semibold text-xl rounded-full px-8 py-2 mt-12 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  Buy Ticket
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Event Rule */}
        <div className="mt-16 flex flex-col items-left justify-left">
          <h1 className="ml-6 text-3xl font-bold text-tigetgold">
            Conditions for purchasing
          </h1>
          <div className="ml-8 pt-2">
            <p className="text-lg font-semibold text-white">
              1. Limit 1 ticket per time.
            </p>
            <p className="text-lg font-semibold text-white">
              2. Ticket can't be refund.
            </p>
            <p className="text-lg font-semibold text-white">
              3. Ticket can't be transfered.
            </p>
            <p className="text-lg font-semibold text-white">
              4. Ticket can't be resold.
            </p>
            <p className="text-lg font-semibold text-white">
              5. Ticket can't be used for other events.
            </p>
            <p className="text-lg font-semibold text-white">
              6. Pre-sale tickets are limited and on a first-come-first-serve
              basis.{" "}
            </p>
            <p className="text-lg font-semibold text-white">
              7. Full name of the ticket owner must be specified when purchasing
              tickets and the name will be printed on the ticket. Please make
              sure that the information is provided correctly before making the
              payment.
            </p>
            <p className="text-lg font-semibold text-white">
              8. Online ticketing can be paid with Paypal and QR code Promptpay.{" "}
            </p>
            <p className="text-lg font-semibold text-white">
              9. Convenience fee 3% will be applied when making the payment with
              a credit card, debit card, or True Wallet . 0.5% convenience fee
              will be applied for payment via Paypal and QR code Promptpay.
            </p>
            <p className="text-lg font-semibold text-white">
              10. The ticket will be sent to the email address provided within
              24 hours after the payment is made.{" "}
            </p>
          </div>
        </div>

        {/* Ticket buy form*/}
        <div className="mt-8 w-full flex flex-col xl:flex-row ">
          <img
            className="w-[33.125rem] object-cover flex flex-1"
            src="https://placeholder.pics/svg/500x600/DEDEDE/555555/Event%20Plan"
            alt="poster"
          />

          <div className="mt-8 xl:mt-0 flex grow flex-col items-left justify-left">
            <h1
              className="ml-6 text-3xl font-bold text-tigetgold"
              id="buyticket"
            >
              Select Zone
            </h1>
            {/*map seat selection */}
            <div className="ml-8 pt-2">
              <p className="text-lg font-semibold text-red-500">
              Seat Selection is under development
                
              </p>
            </div>
            <div className="w-[30rem] object-fit">
            <svg
  viewBox="-2637.589 -2878.519 5645.115 5724.474"
  width="5645.115"
  height="5724.474"
>
  <defs>
    <radialGradient
      gradientUnits="userSpaceOnUse"
      cx="85.377"
      cy="-2198.369"
      r="187.969"
      id="gradient-0"
      gradientTransform="matrix(2.352273, 0, 0, 2.352273, -93.447311, 2922.251709)"
    >
      <stop offset={0} style={{ stopColor: "#bada55" }} />
      <stop offset={1} style={{ stopColor: "#758d29" }} />
    </radialGradient>
  </defs>
  <g>
    <g>
      <ellipse
        style={{ stroke: "rgb(0, 0, 0)" }}
        cx="249.463"
        cy="249.463"
        rx="748.389"
        ry="748.389"
      />
      <rect
        y="-2004.82"
        width="498.926"
        height="2274.886"
        style={{ stroke: "rgb(0, 0, 0)" }}
      />
      <rect
        x="-2494.63"
        y="-2506.025"
        width="5488.186"
        height="501.205"
        style={{ stroke: "rgb(0, 0, 0)" }}
      />
    </g>
    <text
      style={{
        fill: "rgb(255, 255, 255)",
        fontFamily: "Arial, sans-serif",
        fontSize: "338.5px",
        stroke: "url(#gradient-0)",
        strokeLinecap: "round",
        whiteSpace: "pre"
      }}
      x="-334.771"
      y="-2134.098"
    >
      STAGE
    </text>
  </g>
  <text
    style={{
      whiteSpace: "pre",
      fill: "rgb(51, 51, 51)",
      fontFamily: "Arial, sans-serif",
      fontSize: "176.3px"
    }}
    x="-502.226"
    y="-2719.19"
  >
    {" "}
  </text>
  <g>
    <g>
      <rect
        x="-2494.63"
        y="-1895.31"
        width="2393.033"
        height="1256.784"
        style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(255, 0, 0)" }}
      />
      <rect
        x="614.492"
        y="-1895.31"
        width="2393.033"
        height="1256.784"
        style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(255, 0, 0)" }}
      />
    </g>
    <text
      style={{
        fill: "rgb(255, 255, 255)",
        fontFamily: "Arial, sans-serif",
        fontSize: "238.6px",
        stroke: "rgb(0, 0, 0)",
        strokeWidth: 12,
        whiteSpace: "pre"
      }}
      x="-1683.12"
      y="-1225.36"
      transform="matrix(1.808557, 0, 0, 1.65037, 1390.155518, 876.13147)"
    >
      AL
    </text>
    <text
      style={{
        fill: "rgb(255, 255, 255)",
        fontFamily: "Arial, sans-serif",
        fontSize: "238.6px",
        stroke: "rgb(0, 0, 0)",
        strokeWidth: 12,
        whiteSpace: "pre"
      }}
      x="-1683.12"
      y="-1225.36"
      transform="matrix(1.808557, 0, 0, 1.65037, 4580.806152, 876.053772)"
    >
      AR
    </text>
  </g>
  <text
    style={{
      whiteSpace: "pre",
      fill: "rgb(51, 51, 51)",
      fontFamily: "Arial, sans-serif",
      fontSize: "238.6px"
    }}
    x="-2637.589"
    y="-662.903"
  >
    {" "}
  </text>
  <g>
    <g>
      <path
        style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(254, 0, 199)" }}
        d="M 2944.704 -512.302 L 590.991 -494.991 L 604.961 1008.559 L 3000.512 986.301 C 2708.758 920.399 2023.091 61.682 2944.704 -512.302 Z"
        transform="matrix(-0.999957, -0.009291, 0.009291, -0.999957, 3589.120181, 512.930698)"
      />
      <path
        style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(254, 0, 199)" }}
        d="M -167.16 -506.912 L -2520.875 -489.601 L -2506.905 1013.95 L -111.351 991.692 C -303.893 924.868 -1094.508 161.069 -167.16 -506.912 Z"
        transform="matrix(0.999916, 0.012961, -0.012961, 0.999916, 3.175311, 17.079441)"
      />
    </g>
    <text
      style={{
        fill: "rgb(255, 255, 255)",
        fontFamily: "Arial, sans-serif",
        fontSize: "238.6px",
        stroke: "rgb(0, 0, 0)",
        strokeWidth: 12,
        whiteSpace: "pre"
      }}
      x="-1683.12"
      y="-1225.36"
      transform="matrix(1.808557, 0, 0, 1.65037, 1307.155518, 2379.668701)"
    >
      BL
    </text>
    <text
      style={{
        fill: "rgb(255, 255, 255)",
        fontFamily: "Arial, sans-serif",
        fontSize: "238.6px",
        stroke: "rgb(0, 0, 0)",
        strokeWidth: 12,
        whiteSpace: "pre"
      }}
      x="-1683.12"
      y="-1225.36"
      transform="matrix(1.808557, 0, 0, 1.65037, 4541.796387, 2379.668701)"
    >
      BR
    </text>
  </g>
  <g>
    <rect
      x="-637.255"
      y="1087.504"
      width="1767.41"
      height="1758.181"
      style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(30, 0, 255)" }}
    />
    <path
      d="M -754.758 1194.506 L -754.758 3007.339 L -2494.744 3007.339 L -754.758 1194.506 Z"
      data-bx-shape="triangle -2494.744 1194.506 1739.986 1812.833 1 0 1@7888444f"
      style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(0, 115, 255)" }}
      transform="matrix(-0.010236, -0.999948, 0.999948, -0.010236, -3732.799316, 363.568268)"
    />
    <path
      d="M 4234.74 -1176.838 L 4234.74 609.183 L 2494.749 609.183 L 4234.74 -1176.838 Z"
      data-bx-shape="triangle 2494.749 -1176.838 1739.991 1786.021 1 0 1@f1d3f0e8"
      style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(0, 115, 255)" }}
      transform="matrix(-0.010236, -0.999948, -0.999948, 0.010236, 1856.284723, 5334.06744)"
    />
    <text
      style={{
        fill: "rgb(255, 255, 255)",
        fontFamily: "Arial, sans-serif",
        fontSize: "238.6px",
        stroke: "rgb(0, 0, 0)",
        strokeWidth: 12,
        whiteSpace: "pre"
      }}
      x="-1683.12"
      y="-1225.36"
      transform="matrix(1.808557, 0, 0, 1.65037, 3014.018311, 4100.267578)"
    >
      SM
    </text>
    <text
      style={{
        fill: "rgb(255, 255, 255)",
        fontFamily: "Arial, sans-serif",
        fontSize: "238.6px",
        stroke: "rgb(0, 0, 0)",
        strokeWidth: 12,
        whiteSpace: "pre"
      }}
      y="-1225.36"
      x="-1683.12"
      transform="matrix(1.808557, 0, 0, 1.65037, 4494.061523, 3885.129883)"
    >
      SR
    </text>
    <text
      style={{
        fill: "rgb(255, 255, 255)",
        fontFamily: "Arial, sans-serif",
        fontSize: "238.6px",
        stroke: "rgb(0, 0, 0)",
        strokeWidth: 12,
        whiteSpace: "pre"
      }}
      y="-1225.36"
      x="-1683.12"
      transform="matrix(1.808557, 0, 0, 1.65037, 1399.134033, 3885.129883)"
    >
      SL
    </text>
  </g>
</svg>

            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default EventOffline;

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
