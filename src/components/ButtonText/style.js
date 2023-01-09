import styled from "styled-components";

export const Container = styled.button`
  color: ${({theme, isActive})=> isActive ? theme.COLORS.GRAY_100 : theme.COLORS.PINK};
  background-color: transparent;
  border: none;
  align-self: flex-start;

 display: flex;
 align-items: center;
 gap:.5rem;

 > svg{
  width: 20px;
  height: 20px;
 }
`