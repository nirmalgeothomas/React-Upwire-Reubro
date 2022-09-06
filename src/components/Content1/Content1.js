import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import {
    Content1Sec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Subtitle1

} from './Content1.elements.js';

function Content1({
    
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    description1,
    imgStart
   
}) {
    return (
    <>
        <Content1Sec lightBg={lightBg}>
        <Container>
            <InfoRow imgStart={imgStart}>
            <InfoColumn>
                <TextWrapper>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle1 lightTextDesc={lightTextDesc}>{description}</Subtitle1>
                    <Subtitle lightTextDesc={lightTextDesc}>{description1}</Subtitle>
                </TextWrapper>
            </InfoColumn>
            </InfoRow>
        </Container>
        </Content1Sec>
    </>
    );
}

export default Content1;