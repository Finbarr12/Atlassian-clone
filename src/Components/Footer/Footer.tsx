import React from "react";
import styled from "styled-components";
import logo from "../Assets/Logo.webp";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        {" "}
        <Up>
          <img src={logo} alt="" />
          <Main>
            <Hold>
              <h4>PRODUCTS</h4>
              <p>Jira Software</p>
              <p>Jira Align</p>
              <p>Jira Service Management</p>
              <p>Confluence</p>
              <p>Trello</p>
              <p>Bitbucket</p>
              <div>View all products</div>
            </Hold>
            <Hold>
              {" "}
              <h4>RESOURCES</h4>
              <p>Technical Support</p>
              <p>Purchasing & licensing</p>
              <p>Atlassian Community</p>
              <p>Knowledge base</p>
              <p>Marketplace</p>
              <p>My Account</p>
              <div>Create support ticket</div>
            </Hold>
            <Hold>
              {" "}
              <h4>EXPAND & LEARN</h4>
              <p>Partners</p>
              <p>Training & Certification</p>
              <p>Documentation</p>
              <p>Developer Resources</p>
              <p>Enterprise services</p>
              <div>View all resources</div>
            </Hold>
            <Hold>
              {" "}
              <h4>ABOUT ATLASSIAN</h4>
              <p>Company</p>
              <p>Careers</p>
              <p>Events</p>
              <p>Blogs</p>
              <p>Investor Relations</p>
              <p>Trust & Security</p>
              <div>Contact us</div>
            </Hold>
          </Main>
        </Up>
        <Down>
          <span>English</span>
          <p>Privacy policy</p>
          <p>Terms</p>
          <p>Modern Slavery Act</p>
          <p>Impressum</p>
          <div>Copyright © 2022 Atlassian</div>
        </Down>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 350px;
  background-color: #f4f5f7;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Up = styled.div`
  display: flex;
  justify-content: space-around;
  display: flex;
  border-bottom: 1px solid #dfe1e5;
  height: 280px;
  img {
    height: 20px;
    margin-top: 30px;
  }
`;
const Down = styled.div`
  display: flex;
  align-items: center;

  div {
    font-size: 16px;
    margin-left: 55px;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  span {
    font-size: 16px;
    margin-left: 100px;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  p {
    margin: 24px;
    font-size: 16px;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 45px;
`;

const Hold = styled.div`
  /* margin-left: 20px; */
  div {
    font-size: 14px;
    color: blue;
    margin-top: 20px;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  p {
    margin: 0;
    margin-bottom: 5px;
    font-size: 14px;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  /* background-color: red; */
`;
