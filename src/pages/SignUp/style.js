import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;
	  display: flex;
	  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 161px 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  
  > h1{
    color: ${({theme})=>theme.COLORS.PINK};
    font-weight: 700;

  }
  >p {
    font-weight: 400;
  }

  >h2{
    margin: 4.8rem 0;
    font-weight: 500;
  }

  > div{
    display: flex;
    flex-direction: column;
    width: 34rem;
    margin: 0 auto;
    gap: 8px;
    div:nth-child(3){
      margin-bottom: 1.6rem;
    }
   
      button:last-child{
        margin: 4.2rem auto;
      }
  }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`