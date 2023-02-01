import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Videos from './pages/Videos';
import Home from './pages/Home';
import VideosDetail from './pages/VideosDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/videos', element: <Videos /> },
      { path: '/videos/:videoId', element: <VideosDetail /> }
    ]
  },
])

function App() {
  return <RouterProvider router={router}>app</RouterProvider>
}

export default App;


// router에 필요한 페이지는 pages 폴더에 넣는다.