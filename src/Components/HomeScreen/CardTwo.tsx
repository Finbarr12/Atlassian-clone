import React from "react";
import Join from "../CardOne/Join";
import Work from "../CardOne/Work";
import styled from "styled-components";
import Essentials from "../CardOne/Essentials";
import Cards from "../CardOne/Cards";
import Alone from "../CardOne/Alone";
import New from "../CardTwo/New";
const CardTwo = () => {
  return (
    <Container>
      <Hold>
        {/* <Work /> */}
        <New />
        <Join />
      </Hold>
      <Essentials />
      <Cards />
      <Alone />
    </Container>
  );
};

export default CardTwo;

const Container = styled.div`
  /* background-image: linear-gradient(white, skyblue); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Hold = styled.div`
  background-image: linear-gradient(white, white, white, #e5efff);
  width: 100%;
  /* background-image: linear-gradient(white, skyblue); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
