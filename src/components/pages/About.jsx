import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { styled } from "styled-components";


export const About = () => {
 
    const Navigate = useNavigate();
    const goBack=()=> Navigate(-1)
  const data = useLocation();
  const element = data.state;
  //   const [title, setTitle] = useState(element?.title || '')

  return (
    <>
        <Container>
      <Div>
        <Image src={element.url} />
        <Price>
          <h1>{element.title}</h1>
          <h2>$ {element.price} </h2>
          <p>{element.about}</p>
        </Price>
      </Div>
    </Container>
    <Buttonn onClick={goBack}>go back</Buttonn>
    </>
   
  );
};

const Image = styled.img`
  width: 300px;
  /* height: auto; */
`;
const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  gap: 30px;

`;
const Div = styled.div`
  width: 60%;
  height: 60%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 20px;
  padding: 20px;
  box-shadow:
   rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
   rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
  rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
const Price = styled.div`
  width: 800px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    margin: 0px;
  }
  p {
    width: 0 auto;
    height: 200px;
    text-align: start;
    margin: 0;
  }
`;
const Buttonn = styled.button`
  background-color: #36a9ae;
  background-image: linear-gradient(#37adb2, #329ca0);
  border: 1px solid #24575a;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
  color: #ffffff;
  cursor: pointer;
  display: block;
  font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  font-size: 22px;
  margin-left: 220px;
  margin-top: -100px;
  text-align: center;
  touch-action: manipulation;
  width: 130px;
  height: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

 
`;



