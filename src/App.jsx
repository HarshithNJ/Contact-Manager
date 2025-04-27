import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Contacts/Home'
import AddContact from './Contacts/AddContact'
import UpdateContact from './Contacts/UpdateContact'
import ViewContacts from './Contacts/ViewContacts'


let router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/add",
                element: <AddContact></AddContact>
            },
            {
                path: "/edit/:id",
                element: <UpdateContact></UpdateContact>
            },
            {
                path : "/view",
                element: <ViewContacts></ViewContacts>
            }
        ]
    }
])
const App = () => {
  return (
    <div>
        <RouterProvider router = {router}></RouterProvider>
    </div>
  )
}

export default App