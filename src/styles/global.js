import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    font-size: 62.5%;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }
 
 
 *::-webkit-scrollbar-thumb {
    border-radius: 8px;

    background-color: ${({theme})=> theme.COLORS.PINK};
    outline: 1px solid ${({theme})=> theme.COLORS.BACKGROUND_700};
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
		-webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
	  font-family: 'Roboto Slab', serif;
	  font-size: 16px;
	  outline: none;
  }

  a {
    text-decoration: none;
  }
  
  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;