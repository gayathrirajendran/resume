import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/main.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import ProfileForm from './components/ProfileForm';
import ContactUsForm from './components/ContactUsForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, 
  {
    path: 'contact-us',
    element: <ContactUsForm />
  },
  {
    path: '*',
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
