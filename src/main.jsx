import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import PageNotFound from './PageNotFound';
import AddContact from './AddContact';
import ContactList from './ContactList';
import UserDetails from './UserDetails';
import Home from './Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       {index: true, element: <Home />},
       {path: "addcontact", element: <AddContact />},
       {path: "contactlist", element: <ContactList />, children: [{path: ":userId", element: <UserDetails />}]},
       {path: "*", element: <PageNotFound />}
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
