import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Recoil Root - recoil 상태를 사용하는 컴포넌트는 부모 트리 어딘가에 나타나는 Recoil Root가 필요하다. 루트 컴포넌트가 가장 좋은 장소다.
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>  
     <App />
    </RecoilRoot>
  </React.StrictMode>
);
