import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "header"
  "content"
  ;
  grid-template-rows: 116px auto;
  > main{
    display: flex;
    flex-direction: column;
    margin: 0 auto 3rem;
    width: 113.7rem;

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      margin: 2.4rem 0;
    }

    button{
      margin-top: 1rem;
    }
   label{

     span{ 
      display: flex;
      align-items: center;
      margin: 1rem 0;
      gap: 1rem;
      cursor: pointer;
      } 

      svg{
        color: ${({theme})=> theme.COLORS.PINK};
      }
      
     input{
      display: none;
     }  
    }

    .sectionInput{
      display: flex;
      gap: 4rem;
      margin-bottom: 4rem;
    }
  }
  > footer{
    display: flex;
    width: 113.7rem;
    margin: 0 auto;
    gap: 3rem;
    
    > button:first-child{
      color: ${({theme})=> theme.COLORS.PINK};
      background: ${({theme})=> theme.COLORS.BACKGROUND_900};
    }
  }
`
export const Form = styled.form`
`

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;

  textarea{
    margin-bottom: 4rem;
  }

  .tagsWrapper{
    display: flex;
    background: #0D0C0F;
    padding: 1.6rem;
    max-width: 100%;
    border-radius: 1rem;
    margin-top: 2.4rem;
    gap: 1rem;
  }

`