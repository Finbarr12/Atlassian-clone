import React from "react";
import styled from "styled-components";
import { AiFillPlayCircle } from "react-icons/ai";
import Kiva from "../Assets/kiva.png";
import Twitter from "../Assets/twitter.png";
import RedFin from "../Assets/redfin.png";
import Nasa from "../Assets/nasa.png";
import Audi from "../Assets/audi.png";
import CastLight from "../Assets/castlight.png";
import { FaTimes } from "react-icons/fa";
import vid from "../Assets/work.mp4";
// import { visitNodes } from "typescript";
const Join = () => {
  const [show, SetShow] = React.useState<Boolean>(false);

  const Toogle = () => {
    SetShow(true);
  };
  const Toogle2 = () => {
    SetShow(false);
  };
  return (
    <Container>
      {show ? (
        <VidHold>
          <Big>
            {" "}
            <Vid>
              <video src={vid} loop={true} controls={true}></video>
            </Vid>
            <Cancel onClick={Toogle2}>
              <FaTimes />
            </Cancel>
          </Big>
        </VidHold>
      ) : null}

      <h2>Join the teams that achieve the impossible every day</h2>
      <p onClick={Toogle}>
        <Hold>
          <AiFillPlayCircle />
        </Hold>
        <span>Watch a customer story </span>
      </p>
      <Main>
        <LogosHold>
          <img src={Kiva} alt="" />
          <img src={Twitter} alt="" />
          <img src={RedFin} alt="" />
          <img src={Nasa} alt="" />
          <img src={Audi} alt="" />
          <img src={CastLight} alt="" />
        </LogosHold>
      </Main>
    </Container>
  );
};

export default Join;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  p {
    margin: 0;
    color: #0052cc;
    display: flex;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
    transition: all 350ms;
  }
  span {
    margin-top: 3px;

    margin-left: 6px;

    :hover {
      text-decoration: underline;
    }
  }
  h2 {
    margin-bottom: 15px;
  }
`;

const Hold = styled.div`
  font-size: 26px;
`;

const LogosHold = styled.div`
  display: flex;
  width: 85%;
  height: 200px;
  /* background-color: #e5efff; */
  justify-content: space-between;
  align-items: center;

  img {
    height: 55px;
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VidHold = styled.div`
  position: absolute;
  width: 100%;
  height: 700px;
  /* background-color: rgba(0, 0, 0, 0.1, 0.2); */

  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 3px;
  z-index: 2;
  /* box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; */
`;

const Vid = styled.div`
  width: 1000px;
  height: 500px;
  /* background-color: red; */
  box-shadow: 5px 10px black;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Cancel = styled.div`
  color: white;
  position: absolute;
  font-size: 50px;
  z-index: 3;
  left: 90%;
  top: 25px;
  cursor: pointer;
`;

const Big = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.8);
  /* opacity: 90%; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* bottom: 3px; */
  z-index: 9;
  /* box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; */
`;
