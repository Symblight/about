import styled from 'styled-components';

export const Wrapper = styled.footer`
  padding: 2rem;
  background-color: ${props => props.theme.MainTheme.grey[0]};
`;

export const Content = styled.div`
  color: ${props => props.theme.MainTheme.white[0]};
  display: flex;
  justify-content: space-around;
`;
