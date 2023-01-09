import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  'header'
  'title'
  'content'
  ;
  
  grid-template-rows: 116px auto;
  > main{
    display: flex;
    flex-direction: column;
    margin: 2rem auto 2rem;
    width: 1137px;
    padding-bottom: 1rem;
 }
`
export const Wrapper = styled.div`
      display: flex;
      grid-area: title;
      justify-content: space-between;
      width: 1137px;
      margin: 2rem auto;
      margin-bottom: 4rem;
      > h1{
      font-weight: 500;
      font-size: 3.6rem;
      } 
      a {
        width: 20.7rem;
      }
  `
export const Content = styled.div`
    display: flex;
    grid-area: content;
    flex-direction: row;
    gap: 2.4rem;
    grid-area: content;
    overflow-y: scroll;
    height: 67rem;
    border-radius: 1rem;
`