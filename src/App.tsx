import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/Layout/Layout';
import Categories from './pages/Categories';

const router = createHashRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/categories",
          element: <Categories/>
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ]
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;