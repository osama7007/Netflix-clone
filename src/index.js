import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import HomeScreen from './components/home screen';
import NotFound from './components/not found';
import store from './redux/store';
import { Provider } from 'react-redux';
import Profile from './components/profile';
import MovieDetails from './components/movie details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement : <NotFound/> ,
    children:[
      {
        path : '/',
        element : <HomeScreen/>
      },
      {
        path : '/profile',
        element : <Profile/>
      },
      {
        path : '/movie/:movie_id',
        element : <MovieDetails/>
      },
      ]
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router} />
       </Provider>
  </React.StrictMode>
);


