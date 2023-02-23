import React from 'react'

function Rankingboard () {
    return(
    <div class="pb-10 pl-4 w-auto h-auto">
      <div class="flex items-center w-[270px] h-10 justify-center">
       <img class="w-8 h-6 mx-2" src="https://cdn-icons-png.flaticon.com/512/81/81460.png"/><span class="text-center text-xl font-medium">Reading ranking</span>
      </div>
      <hr class="my-2 border-gray-700 w-[275px] border " />
      <div class=" border-[#eee] w-[275px] h-80 rounded-md shadow-2xl bg-gray-100 border-2 pl-1">
        <div class="grid grid-rows-6 w-[270px] h-72 ">
          <div class="flex flex-row border border-[#eee] items-center divide-x divide-black ">
            <div class="text-center basis-2/12 pt-1 font-medium">01</div>
            <div class="basis-10/12/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
          </div>
          <div class="flex flex-row border border-[#eee] items-center divide-x divide-black">
            <div class="text-center basis-2/12 pt-1 font-medium">02</div>
            <div class="basis-10/12/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
          </div>
          <div class="flex flex-row border border-[#eee] items-center divide-x divide-black">
            <div class="text-center basis-2/12 pt-1 font-medium">03</div>
            <div class="basis-10/12/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
          </div>
          <div class="flex flex-row border border-[#eee] items-center divide-x divide-black">
            <div class="text-center basis-2/12 pt-1 font-medium">04</div>
            <div class="basis-10/12/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
          </div>
          <div class="flex flex-row border border-[#eee] items-center divide-x divide-black">
            <div class="text-center basis-2/12 pt-1 font-medium">05</div>
            <div class="basis-10/12/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
          </div>
          <div class="flex flex-row border border-[#eee] items-center divide-x divide-black">
            <div class="text-center basis-2/12 pt-1 font-medium">06</div>
            <div class="basis-10/12/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
          </div>
        </div>  
        <a href="" class="w-[265px] h-[29px] bg-gray-900 rounded-sm hover:bg-gray-700 inline-flex items-center justify-center hover:text-white text-gray-400">  
            <h1 class="font-semibold text-lg">{'>'}</h1>
            <span class="text-sm font-light px-1 pt-[2px]"> Read more</span>
        </a>
      </div>
    </div>
    )   
}
export default Rankingboard ;