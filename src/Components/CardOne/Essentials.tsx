import React from "react";
import styled from "styled-components";
import pics from "../Assets/Community.webp";
const Essentials = () => {
  return (
    <Container>
      <Left>
        <p>TEAM ESSENTIALS</p>
        <h1>
          Explore resources to <br /> unleash the potential <br /> of your team
        </h1>
      </Left>
      <Box>
        <ImgHold>
          <img src={pics} alt="" />
        </ImgHold>
        <TextHold>
          <h2>Atlassian Community</h2>
          <div>
            Connect globally and meet locally to get more out of our products.
          </div>
          <Holder>
            <span>Search the forum</span>
            <span>Join our Community</span>
          </Holder>
        </TextHold>
      </Box>
    </Container>
  );
};

export default Essentials;

const Container = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: bold;
    margin: 0;
    color: #008da6;
  }
  margin-top: 80px;
`;

const Left = styled.div``;
const Box = styled.div`
  width: 750px;
  height: 390px;
  /* background-color: red; */
  display: grid;
  border-radius: 5px;
  overflow: hidden;
  grid-template-rows: repeat(2, 1fr);

  :hover {
    transform: scale(1.02);
    transition: all 350ms;
  }
`;

const ImgHold = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* background-color: gold; */
`;
const TextHold = styled.div`
  background-color: #ffebe5;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  h2 {
    margin-top: 20px;
    margin-bottom: 13px;
  }
  div {
    font-weight: 600;
  }
`;

const Holder = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;

  span {
    font-weight: bold;
    color: #008da6;
  }
`;
