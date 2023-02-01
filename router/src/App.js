import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <p>Home</p>,
    errorElement: <p>not found!</p>
  },
  {
    path: '/vivi',
    element: <p>vivi</p>,
  },
])
function App() {
  return <RouterProvider router={router}>app</RouterProvider>
}

export default App;
