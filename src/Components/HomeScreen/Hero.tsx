import React from "react";
import styled from "styled-components";
import svgs from "../Assets/HeroImg.webp";
import pics from "../Assets/heroLeft.png";
const Hero = () => {
  return (
    <Container>
      <h1>
        It’s possible <br />
        <span>with teamwork</span>
      </h1>
      <Left>
        <img src={svgs} alt="" />
      </Left>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${pics});
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;

  h1 {
    margin: 0;
    margin-top: 130px;
    margin-left: 100px;
    font-size: 55px;
    line-height: 1.5;
    color: #253858;
    font-weight: 600;
  }

  span {
    margin-left: 70px;
  }
`;
const Left = styled.div`
  img {
    height: 450px;
  }
`;
