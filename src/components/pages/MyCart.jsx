import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";



export const MyCart = () => {
    const Navigate = useNavigate();
    const goBack=()=> Navigate(-1)
  return (
    <>
      <Block>
        <Container>My Cart page</Container>
      </Block>
      <Buttonn onClick={goBack} >go back</Buttonn>
    </>
  );
};

const Container = styled.div`
  width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: aquamarine;
`;
const Block = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
const Buttonn = styled.button`
  background-color: #36a9ae;
  background-image: linear-gradient(#37adb2, #329ca0);
  border: 1px solid #2a8387;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
  color: #ffffff;
  cursor: pointer;
  display: block;
  font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  font-size: 22px;
  margin-left: 150px;
  margin-top: 60px;
  outline: 0;
  text-align: center;
  transition: box-shadow 0.05s ease-in-out, opacity 0.05s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 130px;
  height: 40px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:disabled:active {
    pointer-events: none;
  }

  &:disabled:hover {
    box-shadow: none;
  }
`;
