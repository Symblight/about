import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    position: relative;

    &:before {
        content: '';
        display: block;
        position: absolute;
        left: 15px;
        top: 15px;
        width: 3px;
        background-color: ${props => props.theme.MainTheme.grey[2]};;
        height: 100%;
    }
`;

export const Article = styled.article`
    display: flex;
    margin-bottom: 30px;
    height: 100%;
`;

export const Description = styled.div`
    margin-left: 55px;
    background-color: ${props => props.theme.MainTheme.white[0]};
`;
