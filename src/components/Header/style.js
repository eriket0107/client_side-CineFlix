import styled from "styled-components"

export const Container =  styled.div`
  grid-area: header;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 12.3rem;
  gap: 12.8rem;
  height: 11.6rem;

  background: ${({theme})=> theme.COLORS.BACKGROUND_900};
`

export const Logo = styled.div`
  > a  h1 {
		font-size: 2.4rem;
		color: ${({ theme }) => theme.COLORS.PINK};
	}
`
export const Search = styled.div`
  max-width: 63rem;
	display: flex;
	align-items: center;
	flex-grow: 1;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  line-height: 18px;

  
  div{
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > a{
      color: ${({theme})=>theme.COLORS.WHITE};
      .userName{
          display: block;
          text-align: right;
          width: 8.3rem;
        }
    }
  }
  
  img{
    border: 1px solid #3E3B47;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;
  }

  button{
    color: ${({theme})=> theme.COLORS.GRAY_200};
    background: none;
    border: none;
  }
 
`