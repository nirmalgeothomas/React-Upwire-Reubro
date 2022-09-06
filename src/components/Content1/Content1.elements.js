import styled from 'styled-components';

export const Content1Sec = styled.div`
  color: black;
 
  padding-top: 3rem;
  background: ${({ lightBg }) => (lightBg ? '#fff' : 'White')};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;button
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 100%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;



export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? 'black' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  text-align: center;
  color: ${({ lightText }) => (lightText ? 'black' : '#1c2237')};
`;

export const Subtitle = styled.p`
  max-width: auto;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: ${({ lightTextDesc }) => (lightTextDesc ? 'black' : '#1c2237')};
`;
export const Subtitle1 = styled.p`
  max-width: 1300px;

  font-size: 18px;
  line-height: 24px;
  text-align: center;
  
  color: ${({ lightTextDesc }) => (lightTextDesc ? 'black' : '#1c2237')};
`;
