import { FaPizzaSlice, FaHamburger } from "react-icons/fa"
import { GiNoodles , GiChopsticks } from "react-icons/gi"
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

import React from 'react'

function Category() {
  return (
      <List>
    
    <NavLink to={'/cuisine/italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
    </NavLink>
    <NavLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
    </NavLink>
    <NavLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
    </NavLink>
    <NavLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
    </NavLink>
    
      </List>
  )
}

const List = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: 2rem 0rem;`

export default Category