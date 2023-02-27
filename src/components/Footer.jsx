import React from 'react'

function Footer () {
    return(
    <footer className="bg-black p-4 sm:p-6">
      <div className="md:flex md:justify-between md:pl-10">
        <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt=" Logo" />
                <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">Jnews</span>
            </a>
        </div>  
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-white lg:gap-x-32">
          <div>
            <h2 className="text-sm font-semibold text-white uppercase mb-6">Members</h2>
            <ul className='text-sm text-gray-400'>
              <li>Đức Hiệp</li>
              <li>Sơn Tùng</li>
              <li>Hồng Phong</li>
              <li>Mạnh Kiên</li>
              <li>Khuyến</li>
              <li>Trà My</li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white uppercase mb-6">Connected pages</h2>
            <ul className='text-sm text-gray-400'>
              <li className="mb-4">
                <a href="" className="hover:underline">Jnews</a>
              </li>
              <li>
                <a href="" className="hover:underline">Culture</a>
              </li>
            </ul>
          </div>
        <div>
          <h2 className="text-sm font-semibold text-white uppercase mb-6">Contact</h2>
          <ul className='text-sm text-gray-400's>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
      </div>
      </div>
      <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
      <div className="grid lg:grid-cols-3 grid-cols-2">
        <span className="sm:text-center text-sm text-gray-400">© 2023 <a href="" className="hover:underline">Team5™</a>. All Rights Reserved.
        </span>
        <div>
          <h1 className="text-gray-400 font-semibold text-sm text-center">Thanks for reading & have a nice day!</h1>
        </div>
        <div></div>
      </div>
    </footer>
    )
}
export default Footer;