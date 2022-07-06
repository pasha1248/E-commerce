/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/Store'
import { Provider } from 'react-redux'
//

const rootElim = document.getElementById('root')

if (rootElim) {
  const root = ReactDOM.createRoot(rootElim)
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}
