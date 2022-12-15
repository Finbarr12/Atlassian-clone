import React from "react";
import styled from "styled-components";
import blog from "../Assets/Blog.webp";
import Play from "../Assets/Team.webp";
import Agile from "../Assets/Agile.webp";
import pics from "../Assets/High-Velocity.jpeg";
import pics2 from "../Assets/Ondemand.jpeg";
const Cards = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Up>
            <img src={blog} alt="" />
          </Up>
          <Down bg="#eae6ff">
            <h2>Work Life</h2>
            <p>
              Real-life advice, inspiration, and stories <br /> from the working
              world today.
            </p>
            <span>Read our blog</span>
          </Down>
        </Card>
        <Card>
          <Up>
            <img src={Play} alt="" />
          </Up>
          <Down bg="#E6FCFF">
            <h2>Atlassian Team Playbook</h2>
            <p>
              Real-life advice, inspiration, and stories <br /> from the working
              world today.
            </p>
            <span>Check team health</span>
          </Down>
        </Card>
        <Card>
          <Up>
            <img src={Agile} alt="" />
          </Up>
          <Down bg="#DEEBFF">
            <h2>The Agile Coach</h2>
            <p>
              Real-life advice, inspiration, and stories <br /> from the working
              world today.
            </p>
            <span>Visit our resources</span>
          </Down>
        </Card>
        <Card1>
          <h4>EVENTS</h4>
          <h1>Hear from today’s fearless builders and innovators</h1>
          <span>Learn more</span>
        </Card1>
        <Card1>
          <img src={pics} alt="" />
        </Card1>
        <Card1>
          <img src={pics2} alt="" />
        </Card1>
      </Wrapper>
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 85%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  height: 710px;
  /* background-color: red; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 400px);
  gap: 30px;
  margin-top: 30px;
`;
const Card = styled.div`
  background-color: gold;
  border-radius: 10px;
  /* border: 1px solid black; */
  border-radius: 5px;
  display: grid;
  overflow: hidden;
  grid-template-rows: repeat(2, 1fr);

  :hover {
    transform: scale(1.02);
    transition: all 350ms;
  }
`;
const Up = styled.div`
  /* background-color: blue;
   */
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Down = styled.div<{ bg: string }>`
  background-color: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 600;
  }
  p {
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
    font-size: 17px;
    font-weight: 600;
  }
  span {
    color: blue;
    font-weight: bold;
  }
`;
const Card1 = styled.div`
  //   background-color: red;

  h1 {
    font-weight: 600;
  }
  img {
    width: 100%;
    height: 85%;
  }
  h4 {
    color: #008da6;
  }
`;
