import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas: 
  "header"
  "content";
  
  grid-template-rows: 11.6rem auto;
  
  > main{
    grid-area: content;
    overflow-y: auto;
    margin: 0 auto;
    padding: 4rem 12.3rem;
    
  }
 
  `

export const Content = styled.div`
  width: 1137px;  
  overflow-y: auto;
  margin: 2.4rem auto;
  height: 581px;
  display: flex;
  flex-direction: column;

  
`

export const Title = styled.div`
  display: flex;
  margin-top: 4.5rem;
  justify-content: space-between;
  div{
    grid-area: title;
  }
`

export const MovieRating = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  font-weight: 500;

  h1{
    font-size: 36px;
    color: ${({theme})=> theme.COLORS.WHITE};
  }
  svg{
    color: ${({theme})=> theme.COLORS.PINK};
  }
  div{
    margin-top: 5px;
  }
`

export const TimeStap = styled.div`
  display: flex;
  margin-top: 2.4rem;
  align-items: center;
  gap: 8px;
  margin-bottom: 4rem;
  span{
    display: flex;
    flex-direction: row;
  }
  img{
    width: 16px;
    height: 16px;
    border: 1px solid #3E3B47;
    border-radius:50%;
  }

  svg{
    color: ${({theme}) => theme.COLORS.PINK};
  }
`
export const Description = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: start;
    width: 90rem;
`

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  gap: 8px;
`
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  `
