import styled from 'styled-components';

export const WrapCircle = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: ${props => props.theme.MainTheme.primary[0]};
    color: ${props => props.theme.MainTheme.white[1]};
`;

export const Line = styled.hr`
    width: 50%;
    size: 4px;
    background-color: ${props => props.theme.MainTheme.primary[0]};
`;
