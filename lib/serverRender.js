import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from './components/App';

const serverRender = () => {
  return ReactDomServer.renderToString(
    <App />
  );
};

export default serverRender;