import React from 'react'

function Footer () {
    return(
        <footer class="bg-black p-4 ">
      <div class="flex justify-between pl-10">
        <div class="mb-6 ">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt=" Logo" />
                <span class="self-center text-3xl font-semibold whitespace-nowrap text-white">Jnews</span>
            </a>
        </div>  
      <div class="grid grid-cols-3 mx-auto max-w-[1200px] gap-x-52 text-white">
        <div>
          <h2 class="text-sm font-semibold text-white uppercase pb-3">Thành viên</h2>
          <ul>
            <li>Đức Hiệp</li>
            <li>Sơn Tùng</li>
            <li>Hồng Phong</li>
            <li>Mạnh Kiên</li>
            <li>Khuyến</li>
            <li>Trà My</li>
          </ul>
        </div>
        <div>
          <h2 class="text-sm font-semibold text-white uppercase pb-3">Địa chỉ</h2>
          <ul>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
        <div>
          <h2 class="text-sm font-semibold text-white uppercase pb-3">Liên hệ</h2>
          <ul>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
      </div>
      </div>
      <hr class="my-6 border-gray-700 " />
      <div>
        <h1 class="text-gray-400 font-semibold text-center">Thanks for reading & have a nice day!</h1>
      </div>
    </footer>
    )
}
export default Footer;