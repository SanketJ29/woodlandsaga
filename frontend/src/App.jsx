import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Predict from './pages/Predict';
import Explore from './pages/Explore';
import About from './pages/About';
import Team from './pages/Team';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/predict',
      element: <Predict/>,
    },
    {
      path: '/explore',
      element: <Explore/>,
    },
    {
      path: '/about',
      element: <About/>,
    },
    {
      path: '/team',
      element: <Team/>,
    }

  ])
  return (
    <div className='app'>
      <RouterProvider router = {router}/>
    </div>
  );
};

export default App;