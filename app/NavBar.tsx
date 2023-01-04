
'use client'
import {useState} from 'react';
import {BiAlignLeft} from 'react-icons/bi';
import Link from 'next/link';
export default function NavBar() {
  const [navbarOpen, setNavbarOpen] =  useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link  className = 'text-white' href={'/'}> BZERK </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <BiAlignLeft className='text-lg'/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link className='ml-2' href={'/about'}>About</Link>
                
              </li>
              <li className="nav-item">
              <Link className='ml-2' href={'/contact'}>Contact</Link>
                
              </li>
              <li className="nav-item">
                <Link className='ml-2' href={'/shop'}>Shop</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}