import React from 'react'; // no se necesita ruta porque importa dependencia desde node_modules
import ReactDOM from 'react-dom';
import './index.css'; // no importa nada que se haya exportado
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.querySelector('#root')
);