import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export const dropbutton = styled.div`
border-radius: 100px;
padding-left: 20px;
padding-right: 20px;
text-align: center;
box-sizing: border-box;
background: ${({ primary }) => (primary ? 'white' : 'black')};
white-space: nowrap;
padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
  transition: all 0.3s ease-out;
  background: #fff;
  background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
}

@media screen and (max-width: 960px) {
  width: 100%;
}
`;
export const Button = styled.button`
  border-radius: 100px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  box-sizing: border-box;
  background: ${({ primary }) => (primary ? '#26006A' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const Prodbtn = styled.button`
border-radius: 50px;
`;

export default GlobalStyle;
