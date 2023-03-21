import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './Main/Home';
import Order from './Order/Order';
import About from './About/About';
import Grandpa from './Component/GrandPa/Grandpa';

function App() {
  const router =createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
      {path:'/',
      loader: async() => fetch('tshirt.json'),
      element:<Home></Home>},
      {path:'/order',element:<Order></Order>},
      {path:'/about',element:<About></About>},
      {path:'/grand',element:<Grandpa></Grandpa>},
    ]}
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
