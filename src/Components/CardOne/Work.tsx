import React from "react";
import styled from "styled-components";
import pics from "../Assets/Solutions-1.webp";
import { HiArrowRight } from "react-icons/hi";
import pics1 from "../Assets/jira.png";
import pics2 from "../Assets/trello.png";
import pics3 from "../Assets/confluence.png";

const Work = () => {
  return (
    <Container>
      <Left>
        <h2>
          Make work flow across teams <br /> while connecting back to company{" "}
          <br /> goals
        </h2>
        <p>
          Work differently, together{" "}
          <Hold>
            <HiArrowRight />
          </Hold>
        </p>
        <Holder>
          <Box>
            <img src={pics3} alt="" />
          </Box>
          <TxtHold>
            <h3>Confluence </h3>
            <span>Content Collaboration</span>
          </TxtHold>
        </Holder>
        <Holder>
          <Box>
            <img src={pics2} alt="" />
          </Box>
          <TxtHold>
            <h3>Trello </h3>
            <span>Visual project management</span>
          </TxtHold>
        </Holder>
        <Holder>
          <Box>
            <img src={pics1} alt="" />
          </Box>
          <TxtHold>
            <h3>Jira work management </h3>
            <span>Business team collaboration</span>
          </TxtHold>
        </Holder>
      </Left>
      <Right>
        <img src={pics} alt="" />
      </Right>
    </Container>
  );
};

export default Work;

const Container = styled.div`
  width: 90%;
  display: flex;
  margin-top: 70px;
`;
const Left = styled.div`
  margin-right: 20px;

  h2 {
    margin: 0;
    font-weight: 600;
    color: #253858;
  }
  p {
    color: #0052cc;
    display: flex;
    cursor: pointer;
    margin-bottom: 40px;
    :hover {
      text-decoration: underline;
    }
  }
`;
const Right = styled.div`
  img {
    height: 630px;
  }
`;

const Hold = styled.div`
  margin-top: 7px;
  margin-left: 7px;
  font-size: 10px;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 23px;
  :hover h3 {
    color: #0052cc;

    transition: all 350ms;
  }
`;
const TxtHold = styled.div`
  margin-left: 30px;
  margin-bottom: 17px;
  h3 {
    margin-bottom: 5px;
    font-size: 17px;
  }
  span {
    font-size: 18px;
  }
`;
const Box = styled.div`
  width: 70px;
  height: 70px;
  background-color: #ecedf0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 30px;
  }
`;
