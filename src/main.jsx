import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'

import { Provider } from 'react-redux'
import Staff from './components/Staff.jsx'
import TimeTable from './components/TimeTable.jsx'
import store from './redux/store.js'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home/>}/>
    <Route path='My-staff' element={<Staff/>} />
    <Route path='Time-Table' element={<TimeTable/>}/>
    </Route>
  )
)	

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>


        <RouterProvider router={router} />

   </Provider>

  </React.StrictMode>
)
