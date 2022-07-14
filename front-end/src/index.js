import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import {HashRouter,Routes,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Main /> }/>
        <Route path="/cadastrar" element={ <App /> }/>
      </Routes>
    </HashRouter>
    </React.StrictMode>
  </Provider>
  //<App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
