import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/main.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loading from './components/Loading';
// import ProfileForm from './components/ProfileForm';

const ContactUs = lazy(() => import('./components/ContactUsForm'))

const router = createBrowserRouter([
  {
    path: '/',
    children: [{
      index: true,
      path: '',
      element: <App />,
    }, {
      path: 'contact-us',
      element:
        <Suspense fallback={<Loading />}>
          <ContactUs></ContactUs>
        </Suspense>
    }]
  },
  // {
  //   path: 'contact-us',
  //   element:
  //     <Suspense fallback={<Loading />}>
  //       <ContactUs></ContactUs>
  //     </Suspense>
  // },
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

