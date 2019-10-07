import React from 'react';
import ReactDomServer from 'react-dom/server';
import axios from 'axios';
import config from 'config';
import App from 'components/App';
import StateApi from 'state-api'

const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(resp.data);

  return {
    initialMarkup: ReactDomServer.renderToString(
      <App store={store} />
    ),
    initialData: resp.data
  };
};

export default serverRender;