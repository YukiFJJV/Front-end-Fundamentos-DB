import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/HomePage';
import NotFound from './pages/NotFound';
import Layout from './components/Layout/Layout';
import Categories from './pages/CategoriesPage';
import ReadingPage from './pages/ReadingPage';

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
          path: "/Reading/:titulo",
          element: <ReadingPage/>
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