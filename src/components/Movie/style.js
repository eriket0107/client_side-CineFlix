import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.button`
display: flex;
flex-direction: row;
align-items: center;
margin: 0 auto 2.4rem;
width: 112.1rem;
background-color: ${({theme})=> theme.COLORS.BACKGROUND_600};
padding: 2rem;
border: none;
border-radius: 1rem;
`
export const Title = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
  >h1{
    text-align: left;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;


    color: #F4EDE8;
  }
  
  svg{
    color: ${({theme})=> theme.COLORS.PINK};
  }
`

export const Text = styled.div`
    
    margin-right: 1rem;
    >p{
      text-overflow: ellipsis;
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      height: 5em;
      width: 92rem;
		  margin: 15px 0;

		overflow: hidden;
    text-overflow: ellipsis;

		display: -webkit-box;
		-webkit-line-clamp: 4;
  	-webkit-box-orient: vertical;
  }

  >footer{
    display: flex;
    gap: 1rem;
    color: #E5E5E5;
  }
`
export const Wrapper = styled.div`
  
`