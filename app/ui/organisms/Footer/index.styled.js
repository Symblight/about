import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem;
`;

export const Content = styled.div`
  color: ${props => props.theme.MainTheme.white[0]};
  display: flex;
  justify-content: space-around;
`;
