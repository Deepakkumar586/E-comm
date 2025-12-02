import React, { useEffect, useState } from 'react'
import { FaMoon, FaSearch, FaShoppingCart, FaSun, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [theme,setTheme] = useState('light');

  useEffect(()=>{
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);


  },[theme])



  const toggleTheme = ()=>{
    const newTheme = theme==='light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme',newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  }
  return (
    <nav className='bg-white shadow-md dark:bg-gray-800  '>
      <div className='container mx-auto px-2 md:px-4 lg:px-24 py-4 flex items-center justify-between'>

        <div className='text-lg font-bold text-gray-950 dark:text-white'>
          <Link to='/'>E-shop</Link>
        </div>

        <div className='relative flex-1 mx-4'>
          <form>
            <input type='text' placeholder='Search products...' className='w-full rounded-lg border py-2 px-4 '/>
            <FaSearch className='absolute top-3 right-3 text-red-600'/>
          </form>
        </div>

        <div className='flex items-center space-x-4'>
          <Link to='/cart'><FaShoppingCart className='text-xl text-gray-950 dark:text-white'/></Link>
          <button onClick={toggleTheme} className='text-gray-950 dark:text-white bg-gray-200 dark:bg-gray-600 p-2 rounded-full'>
            {theme === 'light' ? <FaMoon/> : <FaSun/>}
          </button>
          <button className='hidden md:block text-gray-950 dark:text-white tracking-[1px]'>Login | Register</button>
          <button className='block md:hidden text-gray-950 dark:text-white'><FaUser/></button>
          
        </div>
      </div>

      <div className='flex items-center justify-center space-x-10 py-4 text-sm font-medium'>
        <Link to='/' className='hover:underline text-gray-900 dark:text-white text-[15px]'>Home</Link>
        <Link to='/products' className='hover:underline text-gray-900 dark:text-white text-[15px]'>Products</Link>
        <Link to='/categories' className='hover:underlinetext-gray-900 dark:text-white text-[15px]'>Shop</Link>
        <Link to='/about' className='hover:underline text-gray-900 dark:text-white text-[15px]'>About</Link>
        <Link to='/contact' className='hover:underline text-gray-900 dark:text-white text-[15px]'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar