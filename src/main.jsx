import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './services/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* wrap the app with a provider that contains the store, which has our articleApi */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
