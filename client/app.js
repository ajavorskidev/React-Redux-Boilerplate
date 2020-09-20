/* CSS */
import '../public/index.css';
/* React */
import React from 'react';
import ReactDOM from 'react-dom';
/* Redux */
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <div>React and Redux are working!</div>
  </Provider>,
  document.getElementById('app')
);
