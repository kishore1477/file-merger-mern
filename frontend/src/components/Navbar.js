import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>


<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
       
        <img  className="w-10 h-10 text-white   rounded-full" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfxc9x7wQxVmabygK3benA7Z-Qnt1OrLZczQ&usqp=CAU'></img>
      <span className="ml-3 text-xl">Merger</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to ='/' className="mr-5 hover:text-gray-900">Merger PDF</Link>
      <Link to='/mergDox' className="mr-5 hover:text-gray-900">Merge Docs</Link>
      <Link  to ='/mergImg' className="mr-5 hover:text-gray-900">Merge images</Link>
    </nav>
    
  </div>
</header>

    </div>
  )
}

export default Navbar