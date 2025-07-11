import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';



createRoot(document.getElementById('root')).render(
  <div className='w-[1200px] mx-auto'>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </div>
)
