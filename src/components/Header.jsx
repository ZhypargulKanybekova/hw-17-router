import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Header = () => {
  return (
    <Container>
        <div>
             <h1>iStore</h1>
        </div>
        <div>
             <LinkComponents to="/products">Products</LinkComponents>
             <LinkComponents to="/my-cart">My Cart</LinkComponents>
             <LinkComponents to="/my-orders">My Orders</LinkComponents>
        </div>
         
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: aliceblue;
  background-color: rgba(20, 80, 131, 0.912);
  font-size: 16px;
  text-decoration: none;
  padding: 10px 40px;
`
const LinkComponents = styled(Link)`
      color: aliceblue;
  font-size: 16px;
  text-decoration: none;
  margin-right: 28px;
  border-bottom: 1px solid aliceblue;
  padding-bottom: 2px;
  border-bottom: 1px solid aliceblue;

  &.active {
    color: rgb(156, 160, 163);
    border-bottom: 1px solid rgb(156, 160, 163);
  }
`

