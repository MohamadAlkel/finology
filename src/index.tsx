import * as React from 'react';
import { render } from 'react-dom';
import App from './root/App';
import './index.scss';

declare const window: any;

render(
  <App initialState={window.__PRELOADED_STATE__} />,
  document.getElementById('car') as HTMLElement
);
