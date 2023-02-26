import React from 'react'

function Rankingboard () {
  function Showmore() {
    let button = document.getElementById("button")
    let show =  document.getElementById("more")
    
    if (show.classList.contains("hidden")) {
      show.classList.remove("hidden");
      button.innerHTML = "Hide";
      console.log("hello")

    }else{
      show.classList.add("hidden");
      button.innerHTML = " > More";
    }
  }
  
  
  return(
    <div class="pl-4 w-full h-auto ">
      <div class="flex items-center w-full md:w-[17rem] md:h-10 justify-center pr-10 sm:pr-0">
       <img class="md:w-8 md:h-6 h-16 w-15 md:mx-2 mx-4" src="https://cdn-icons-png.flaticon.com/512/81/81460.png"/><span class="text-center md:text-xl text-6xl sm:text-4xl font-medium">Reading ranking</span>
      </div>
      <hr class="md:my-4 my-12 border-gray-700 md:w-[17.2rem] w-4/5 md:border mx-16 md:mx-0 border-2" />
      <div class=" border-[#eee] md:w-[17.2rem] w-4/5 h-auto mx-16 md:mx-0 rounded-md shadow-2xl bg-gray-100 border-2 ">
        <div class="grid grid-rows md:w-[16.9rem] w-4/5 h-auto">
          <div class="grid grid-rows-5 md:w-[16.9rem] w-4/5 h-72 ">
            <div class="flex flex-row border border-[#eee] items-center divide-x divide-black ">
              <div class="text-center basis-2/12 pt-1 font-medium">01</div>
              <div class="basis-10/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
            </div>
            <div class="flex flex-row border border-[#eee] items-center divide-x divide-black">
              <div class="text-center basis-2/12 pt-1 font-medium">02</div>
              <div class="basis-10/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
            </div>
            <div class="flex flex-row border border-[#eee] items-center divide-x divide-black">
              <div class="text-center basis-2/12 pt-1 font-medium">03</div>
              <div class="basis-10/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
            </div>
            <div class="flex flex-row border border-[#eee] items-center divide-x divide-black">
              <div class="text-center basis-2/12 pt-1 font-medium">04</div>
              <div class="basis-10/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
            </div>
            <div class="flex flex-row border border-[#eee] items-center divide-x divide-black">
              <div class="text-center basis-2/12 pt-1 font-medium">05</div>
              <div class="basis-10/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
            </div>
            {/* <div class="w-[270px] h-8 border border-[#eee] bg-gray-100"></div> */}
        </div> 
        <div class="hidden" id="more">
          <div class="grid grid-rows-5 w-[16.9rem] h-72 ">
              <div class="flex flex-row border border-[#eee] items-center divide-x divide-black ">
                <div class="text-center basis-2/12 pt-1 font-medium">06</div>
                <div class="basis-10/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
              </div>
              <div class="flex flex-row border border-[#eee] items-center divide-x divide-black">
                <div class="text-center basis-2/12 pt-1 font-medium">07</div>
                <div class="basis-10/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
              </div>
              <div class="flex flex-row border border-[#eee] items-center divide-x divide-black">
                <div class="text-center basis-2/12 pt-1 font-medium">08</div>
                <div class="basis-10/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
              </div>
              <div class="flex flex-row border border-[#eee] items-center divide-x divide-black">
                <div class="text-center basis-2/12 pt-1 font-medium">09</div>
                <div class="basis-10/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
              </div>
              <div class="flex flex-row border border-[#eee] items-center divide-x divide-black">
                <div class="text-center basis-2/12 pt-1 font-medium">10</div>
                <div class="basis-10/12 pt-1 font-light text-xs hover:underline pl-2">Tiêu đề dsao in coinason vona dop</div>
              </div>
              <div class="w-[265px] h-8 border border-[#eee] bg-gray-100"></div>
          </div>
        </div>
      </div> 
      <button id="button" onClick={Showmore} class="w-[265px] h-[29px] bg-gray-900 rounded-sm hover:bg-gray-700 inline-flex items-center justify-center hover:text-white text-gray-400 mt-2">  
          <h1 class="font-semibold text-lg">{'>'}</h1>
          <span class="text-sm font-light px-1 pt-[2px]"> More</span>
      </button>
      </div>
    </div>
    )   
}
export default Rankingboard ;