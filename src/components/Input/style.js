import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
  height: 5.6rem;
  width: 100%;
  padding: 2.4rem 1.9rem;
  border-radius: 1rem;
  gap: .5rem;
  > input{
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
    color: ${({theme})=> theme.COLORS.WHITE};
    width: 100%;
    border: none;
  }

  > svg{
    margin-top: 1px;
    color:  ${({theme})=> theme.COLORS.GRAY_300};
  }

`