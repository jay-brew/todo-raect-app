import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRouter from './AppRouter';
import {createRoot} from 'react-dom/client';

// ReactDOM.render 를 사용하는 경우 React 18 이상 버전에서 경고 브라우저 콘솔에 뜬다.
// createRoot 로 대체 (경고 뜨지 않는 경우 사용해도 무관)
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<AppRouter tab="home" />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
