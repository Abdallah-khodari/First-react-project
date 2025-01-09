import './App.css'
import Home from './components/home/home'
import { createBrowserRouter } from 'react-router-dom'
import About from './components/About/About'
import Portifolio from './components/Portifolio/portifolio'
import Contact from './components/Portifolio/Contact/Contact'
import Layout from './components/Layout/Layout'
import { RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([
     {path:'',element:<Layout/>,children:[
        {path:'',element:<Home/>},
          {path:'About',element:<About/>},
    {path:'portfolio',element:<Portifolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<div className='d-flex justify-content-center align-items-center bg-primary vh-100'>404 Page not fouded</div>}
    ]}
])


function App() {
    return(
        <>
       <RouterProvider router={router}/>

        </>
   
    )
    
  
}

export default App
