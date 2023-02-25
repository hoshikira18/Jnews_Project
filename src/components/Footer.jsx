import React from 'react'

function Footer () {
    return(
    <footer className="dark:bg-black p-8 sm:p-6 bg-white border border-[#eee]">
      <div className="md:flex md:justify-between md:pl-10 pl-3">
        <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="sm:h-8 sm:mr-3 h-10 mr-4" alt=" Logo" />
                <span className="self-center text-5xl sm:text-4xl font-semibold whitespace-nowrap dark:text-white">Jnews</span>
            </a>
        </div>  
        <div className="grid grid-cols-2 gap-1 sm:gap-3 md:gap-6 lg:grid-cols-3 dark:text-white lg:gap-x-[100px] pl-2">
          <div>
            <h2 className="text-3xl sm:text-xl md:text-sm font-bold dark:text-white uppercase mb-6">Members</h2>
            <ul className='text-2xl sm:text-lg md:text-sm dark:text-gray-400'>
              <li>Đức Hiệp</li>
              <li>Sơn Tùng</li>
              <li>Hồng Phong</li>
              <li>Mạnh Kiên</li>
              <li>Khuyến</li>
              <li>Trà My</li>
            </ul>
          </div>
          <div>
            <h2 className="md:text-sm text-3xl sm:text-xl font-bold dark:text-white uppercase mb-6">Connected pages</h2>
            <ul className='sm:text-lg text-xl md:text-sm dark:text-gray-400'>
              <li className="mb-4">
                <a href="src/pages/Home.jsx" className="hover:underline">Jnews</a>
              </li>
              <li>
                <a href="src/pages/Culture.jsx" className="hover:underline">Culture</a>
              </li>
            </ul>
          </div>
          <div className='md:hidden'></div>
          <div>
            <h2 className="sm:text-xl md:text-sm text-3xl font-bold dark:text-white uppercase mb-6 pt-5 sm:pt-0">Contact</h2>
            <ul className='sm:text-lg md:text-sm text-xl dark:text-gray-400's>
              <li>Leader: Trần Văn Khuyến</li>
              <li>SĐT: 0919707102</li>
            </ul>
          </div>
      </div>
      </div>
      <hr className="my-6 dark:border-gray-700 sm:mx-auto lg:my-8 border-2 border-black" />
      <div className="grid lg:grid-cols-3 grid-cols-2">
        <span className="sm:text-center md:text-sm text-base dark:text-gray-400">© 2023 <a href="" className="hover:underline">Team5™</a>. All Rights Reserved.
        </span>
        <div>
          <h1 className="dark:text-gray-400 font-semibold md:text-sm text-center sm:text-lg text-xl">Thanks for reading & have a nice day!</h1>
        </div>
        <div></div>
      </div>
    </footer>
    )
}
export default Footer;