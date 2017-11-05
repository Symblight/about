import styled from 'styled-components';

export const Button = styled.div`
    display: inline-block;
    padding: 0 2rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none !important;
    white-space: nowrap;
    transition: background .2s,color .2s;
    cursor: pointer;
    color: ${props => props.theme.MainTheme.white[1]};
    background-color: ${props => props.theme.MainTheme.primary[0]};
  

    &:hover {
        background-color: ${props => props.theme.MainTheme.primary[1]};
        cursor: pointer;
    }
`;
