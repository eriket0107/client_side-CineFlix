import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > header {
    height: 144px;
    width: 100%;
    background: rgba(255, 133, 155, 0.05);
    position: relative;

    button{
      position: absolute;
      left: 144px;
      top: 64px;
    }
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 34rem;
  margin: -6rem auto;
  gap: 1rem;
  > div:nth-child(4){
    margin-top: 2rem;
  }
  > div:nth-child(5){
    margin-bottom: 1rem;
  }
  `
export const Avatar = styled.div`
  display: flex;
  width: 34rem;
  margin: -3rem auto 5rem;
  position: relative;

  >img{
    object-fit: cover;
    margin: 0 auto;

    width: 200px;
    height: 200px;

    
    border-radius: 50%;
  }
  > label{
      position: absolute;
      display: flex;
    
      border-radius: 50%;
      background-color: ${({theme})=> theme.COLORS.PINK};
    
      padding: 1.4rem;
    
      cursor: pointer;

      width: 48px;
      height: 48px;

      right: 90px;
      bottom: 5px;

    svg{
      height: 20px;
      width: 20px;
      color: #312E38;
    }
    
    input{
      display: none;
    }
  }
`