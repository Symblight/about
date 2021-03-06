import styled from 'styled-components';

export const Wrapper = styled.footer`
  padding: 2rem;
  background-color: ${props => props.theme.MainTheme.grey[0]};
`;

export const Content = styled.div`
  color: ${props => props.theme.MainTheme.grey[5]};
  display: flex;
  justify-content: space-around;
  font-weight: 600;
  margin-left: 10rem;
  margin-right:10rem;
`;
