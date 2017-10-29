import styled from 'styled-components';
import { palette } from 'styled-theme';

export const Button = styled.div`
    display: flex;
    margin:0 auto;
    padding:10px 30px;
    border: 0;
    border-radius: 4px;
    display: inline-block;
    background-color: ${palette(1)};
    color: ${palette('grayscale', 0, true)};

    &:hover {
        background-color: ${palette(0)};
        cursor: pointer;
    }
`;

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40,
};
