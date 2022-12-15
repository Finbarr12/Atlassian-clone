import React from "react";
import styled from "styled-components";
import pics from "../Assets/cartoon.jpeg";
import pics2 from "../Assets/cart2.jpeg";
const Alone = () => {
  return (
    <Container>
      <img src={pics2} alt="" />
      <Mid>
        <h4>CAREERS</h4>
        <h1>We can’t do it alone</h1>
        <p>
          We have an ambitious road ahead, and we’re looking for people to join
          our global team to help shape the future of Atlassian.
        </p>
        <button>Join the team</button>
      </Mid>
      <img src={pics} alt="" />
    </Container>
  );
};

export default Alone;

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 120px;
  /* background-color: red; */
  /* height: 400px; */
  /* align-items: center; */
  justify-content: space-between;
  img {
    height: 300px;
  }
`;

const Mid = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 0;
    text-align: center;
    font-size: 17px;
  }
  h4 {
    margin: 0;
    color: #008da6;
  }
  button {
    width: 110px;
    height: 35px;
    border-radius: 5px;
    background: blue;
    color: white;
    border: none;
    font-weight: bold;
    margin-top: 20px;
  }
`;
