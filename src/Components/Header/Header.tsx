import React from "react";
import styled from "styled-components";
import Log from "../Assets/Logo.webp";
import { AiOutlineDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={Log} />
          <TextHold>
            <span>Products</span>
            <Icon>
              <AiOutlineDown />
            </Icon>
          </TextHold>
          <TextHold>
            <span>For teams</span>
            <Icon>
              <AiOutlineDown />
            </Icon>
          </TextHold>
          <TextHold>
            <span>Support</span>
            <Icon>
              <AiOutlineDown />
            </Icon>
          </TextHold>
        </Left>
        <Right>
          <Try>Try now</Try>
          <Buy>Buy now</Buy>
          <SearchHold>
            <FiSearch />
          </SearchHold>
          <MyAcctHold>
            <Hold>
              {" "}
              <CgProfile />
            </Hold>
            <select>
              <option>My account</option>
              <option>Find team</option>
              <option>Log in</option>
            </select>
          </MyAcctHold>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  /* background-color: gold; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Try = styled.button`
  width: 85px;
  border: none;
  color: white;
  height: 35px;
  border-radius: 5px;
  background-color: #0354cd;
  font-weight: bold;
  cursor: pointer;
`;
const Buy = styled.div`
  width: 90px;
  border: none;
  color: blue;
  height: 35px;
  border-radius: 5px;
  /* font-weight: bold; */
  margin-left: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #dfe1e5;
    cursor: pointer;
    transition: all 350ms;
  }
`;
const SearchHold = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  /* background-color: red; */
  border-right: 1px solid #c4c8d1;
  /* margin-left: 15px; */
  width: 50px;
  color: #c4c8d1;
`;
const MyAcctHold = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  width: 150px;
  height: 80%;
  /* background-color: red; */
  border-radius: 5px;
  justify-content: center;
  select {
    border: none;
    color: blue;
    outline: none;
    font-size: 14px;
    font-weight: bold;
    background-color: transparent;
  }

  :hover {
    background-color: #ecedf0;
    transition: all 350ms;
  }
`;
const Hold = styled.div`
  font-size: 25px;
  margin-right: 6px;
  margin-top: 3px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const TextHold = styled.div`
  padding: 6px 12px;
  /* background-color: red; */
  display: flex;
  border-radius: 5px;
  margin-left: 12px;
  color: #253858;
  :hover {
    background-color: #dfe1e5;
    cursor: pointer;
    transition: all 350ms;
  }
  span {
    font-size: 17px;
  }
`;
const Logo = styled.img`
  height: 25px;
`;

const Icon = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 12px;
`;
