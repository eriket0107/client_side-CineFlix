import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  padding: 1.6rem;
  background-color: ${({theme, isNew})=> isNew ? `${theme.COLORS.BACKGROUND_700}` : 'transparent'};
  border: ${({theme, isNew})=> isNew ?  'none' : `1px dashed ${theme.COLORS.BACKGROUND_700}`};
  border-radius: 1rem;
  width: ${({isNew})=> isNew ? '140px' : '160px'};

 > input{
    display:flex;
    align-items: center;
    font-size: 1.4rem;
    background: none;
    border: none;
    color: ${({theme})=> theme.COLORS.WHITE};
    width: 100%;
    
 }
 > button{
    display:flex;
    background: none;
    border: none;
    color: ${({theme, isNew})=> isNew ? `${theme.COLORS.PINK}`: `red`};
    transition: 200ms; 
    svg { 
      margin-bottom: 0.7rem;
   }
    &:hover{
      transform: scale(1.1)
    }
 }

`

