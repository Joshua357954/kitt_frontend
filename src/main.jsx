
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Store from "./redux/store.js"
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  	
  	<Provider store={Store}>
	    <RouterProvider router={App}/>
  	</Provider>

  </React.StrictMode>,
)
