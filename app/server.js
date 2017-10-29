import React from 'react';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import theme from 'ui/themes/default';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Template from './template';
import App from './components/App';

export default function serverRenderer() {
  return (req, res) => {
    const sheet = new ServerStyleSheet();
    const context = {};
    const markup = ReactDOMServer.renderToString(
      <ThemeProvider theme={theme}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </ThemeProvider>
    );
    const styleTags = sheet.getStyleTags();
    res.status(200).send(Template({
      markup,
      styles: styleTags
    }));
  };
}
