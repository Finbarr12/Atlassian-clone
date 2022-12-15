import React from "react";
import Join from "../CardOne/Join";
import Work from "../CardOne/Work";
import styled from "styled-components";
import Essentials from "../CardOne/Essentials";
import Cards from "../CardOne/Cards";
import Alone from "../CardOne/Alone";
const CardOne = () => {
  return (
    <Container>
      <Hold>
        <Work />
        <Join />
      </Hold>
      <Essentials />
      <Cards />
      <Alone />
    </Container>
  );
};

export default CardOne;

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
