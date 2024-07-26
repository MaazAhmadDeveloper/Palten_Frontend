import React from 'react';
import ReactDOM from 'react-dom';
import { SelectionProvider } from './context/ContextApi';
import App from './App';
import './index.css';

ReactDOM.render(
<SelectionProvider>
    <App />
</SelectionProvider>
,
document.getElementById('root'));
 