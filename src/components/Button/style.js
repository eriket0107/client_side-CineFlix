import styled from "styled-components";

export const Container = styled.button`
  display: flex;  
  align-items: center;
  justify-content: center;

  gap: .8rem;

  font-weight: 500;
  font-size: 16px;
  text-align: center;

  background-color: ${({theme})=> theme.COLORS.PINK};
  border: none;
  border-radius: 1rem;
  
  width: 100%;
  height: 5.6rem;
  padding: 16px auto;

  >svg{
    margin-top: 2px;
  }

  &:disabled{
    opacity: 0.8;
  }
`