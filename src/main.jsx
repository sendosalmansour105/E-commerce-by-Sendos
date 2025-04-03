import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './Data/store.js'
import { AuthProvider } from './context/AuthProvider';

createRoot(document.getElementById('root')).render(
     <React.StrictMode>
    <AuthProvider>
     <Provider store={store}>
          <App />
     </Provider>
     </AuthProvider>
     </React.StrictMode>

)
