import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app/App';

// Створює єдиний React-root і монтує застосунок у StrictMode для додаткових перевірок у розробці.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
