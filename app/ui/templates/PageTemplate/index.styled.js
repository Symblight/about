import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: ${props => props.theme.MainTheme.grey[0]};

    @media screen and (max-width: 640px) {
        padding-top: 3.25rem;
    }
`;

export const Content = styled.section`
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding-bottom: 2rem;
    background-color: ${props => props.theme.MainTheme.white[0]};
`;
