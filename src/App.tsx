import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/HomePage';
import NotFound from './pages/NotFound';
import Layout from './components/Layout/Layout';
import Categories from './pages/CategoriesPage';
import ReadingPage from './pages/ReadingPage';
import Personal from './pages/PersonalPage';
import Settings from './pages/SettingsPage';

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
          path: "/Personal",
          element: <Personal/>
        },
        {
          path: "/Settings",
          element: <Settings/>
        },
        {
          path: "/Reading/:titulo/:capitulo?",
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