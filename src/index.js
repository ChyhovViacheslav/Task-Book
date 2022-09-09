import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './App';
import { ThemeProvider } from './components/theme/ThemeProvider';
import Layout from './components/layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <Layout>
            <App />
        </Layout>
    </ThemeProvider>
);
