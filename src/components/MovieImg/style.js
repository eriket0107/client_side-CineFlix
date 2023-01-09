import styled from "styled-components";



export const Container = styled.div`
  
`
export const Cover = styled.div`
  border-radius: 1rem;
  margin-bottom: 1rem;

    img{
      object-fit: cover;
      border-radius: 1rem;
      width: 155px;
      height: 210px;
  }

  label{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 155px;
    height: 210px;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
    border-radius: 1rem;
    cursor: pointer;
    
    > svg{
      color: ${({theme})=> theme.COLORS.PINK};
      width: 55px;
      height: 55px;
    }
    
    input{
      display: none;
    }
  }
`

