import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
  border-radius: 50%;
  height:  ${({isHeader})=> isHeader ? "64px" : "200px"};
  width: ${({isHeader})=> isHeader ? "64px" : "200px"};  
  margin: 0 auto;
  svg{
    margin: 0 auto;
    height:  ${({isHeader})=> isHeader ? "60px" : "170px"};
    width: ${({isHeader})=> isHeader ? "45px" : "180px"};  
    color: ${({theme})=> theme.COLORS.PINK};
  }

`