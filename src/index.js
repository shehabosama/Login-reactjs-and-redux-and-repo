import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/Login';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <div>
         <Provider store={store}>
              <App/>
         </Provider>
       
    </div>,document.getElementById('root')
)