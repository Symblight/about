import styled from 'styled-components';

export const PrimaryButtonWrap = styled.div`
    display: inline-block;
    color: ${props => props.theme.MainTheme.white[1]};
    background-color: ${props => props.theme.MainTheme.primary[0]};

    
    &:hover {
        background-color: ${props => props.theme.MainTheme.primary[1]};
        cursor: pointer;
    }
`;
