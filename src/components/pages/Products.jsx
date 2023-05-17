import React from "react";
import {  useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const cards = [
  {
    title: "Iphone 14 Pro Max",
    id: 1,
    price: 1400,
    url: "https://www.myphone.kg/files/media/17/17240.webp",
    about: "The iPhone 14 Pro Max isn’t just the most powerful phone around. It’s a joy to use, thanks to the clever new Dynamic Island for displaying notifications and live activities. Apple’s largest Pro model also delivers fantastic cameras — including a new 48MP main shooter — an always-on display, compelling Action mode for video and excellent battery life. It’s pricey, but it’s also the best phone money can buy."
  },
  {
    title: "Iphone 13 Pro Max",
    id: 2,
    price: 1200,
    url: "https://www.myphone.kg/files/media/13/13409.jpg",
    about:"The iPhone 14 Pro is the best phone for under $1,000. It’s powerful, has amazing cameras, sports a beautiful display, and the notch is dead. It’s hard to think of anything truly wrong with this device and it’s perfect for people tired of giant handsets."
  },
  {
    title: " Iphone 14 Plus",
    id: 3,
    price: 1320,
    url: "https://www.myphone.kg/files/media/17/17438.webp",
    about:'The iPhone 14 Plus is the best phone for under $1,000. It’s powerful, has amazing cameras, sports a beautiful display, and the notch is dead. It’s hard to think of anything truly wrong with this device and it’s perfect for people tired of giant handsets.'
  },
];

export const Products = () => {
   
    const navigate = useNavigate();
    const goBack=()=> navigate(-1) 
  function navigateHandler(el) {
    navigate(`/products/${el.id}`, { state: el });
  }
  return (
    <>
     
    <Container>
         
        
        
         {cards.map((el) => {
           return (
             <div onClick={() => navigateHandler(el)} key={el.id}>
               <Card>
                 <Image src={el.url}></Image>
                 <h4>{el.title}</h4>
                 <h5>$ {el.price} </h5>
               </Card>
             </div>
           );
         })}
        
        
       </Container>
       <Buttonn onClick={goBack}>go back</Buttonn>
    </>
    
  );
};

const Image = styled.img`
  width: 210px;
  height: 290px;
  margin-top: 30px;
`;
const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 50px;
  
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
  text-align: center;
  touch-action: manipulation;
  width: 130px;
  height: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;


 
`;
const Card = styled.div`
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow:
   rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
     rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  cursor: pointer;

  h4 {
    font-size: 20px;
    height: 25px;
  }

  h5 {
    height: 10px;
  }
`;
