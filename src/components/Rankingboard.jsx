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
      button.innerHTML = " Show More";
    }
  }
  
  
  return(
    <div class="w-auto h-auto mx-14 md:mx-7 lg:mx-0 pb-24 ">
      <div class="flex items-center w-full lg:w-[17rem] h-auto lg:h-10 justify-center pr-10 sm:pr-0">
       <img class="lg:w-8 lg:h-6 h-16 w-15 md:mx-2 mx-4" src="https://cdn-icons-png.flaticon.com/512/81/81460.png"/><span class="text-center lg:text-xl text-7xl md:text-5xl font-medium">Reading ranking</span>
      </div>
      <hr class="md:my-4 my-12 border-gray-700 lg:w-[17.2rem] w-4/5 md:border mx-16 lg:mx-0 border-2 flex justify-center" />
      <div class=" border-[#eee] lg:w-[17.2rem] w-full h-auto md:mx-0 rounded-md shadow-2xl bg-gray-100 border-2 ">
        <div class="grid grid-rows lg:w-[16.9rem] w-full h-auto ">
          <div class="grid grid-rows-5 lg:w-[16.9rem] w-full h-full  ">
            <div class="flex flex-row border border-[#eee] items-center lg:divide-x divide-x-4 divide-black h-[8rem] md:divide-x-2 lg:h-[3rem]  ">
              <div class="text-center basis-2/12 lg:pt-1 pt-3 font-medium text-5xl lg:text-base md:text-4xl">01</div>
              <div class="basis-10/12 lg:pt-1 font-light lg:text-xs text-4xl w-full hover:underline lg:pl-2 pl-8 h-1/2 md:text-3xl pt-3 ">Tiêu đề dsao in coinason vona dop</div>
            </div>
            <div class="flex flex-row border border-[#eee] items-center lg:divide-x divide-x-4 divide-black h-[8rem] md:divide-x-2 lg:h-[3rem]  ">
              <div class="text-center basis-2/12 lg:pt-1 pt-3 font-medium text-5xl lg:text-base md:text-4xl">02</div>
              <div class="basis-10/12 lg:pt-1 font-light lg:text-xs text-4xl w-full hover:underline lg:pl-2 pl-8 h-1/2 md:text-3xl pt-3 ">Tiêu đề dsao in coinason vona dop</div>
            </div>
            <div class="flex flex-row border border-[#eee] items-center lg:divide-x divide-x-4 divide-black h-[8rem] md:divide-x-2 lg:h-[3rem]  ">
              <div class="text-center basis-2/12 lg:pt-1 pt-3 font-medium text-5xl lg:text-base md:text-4xl">03</div>
              <div class="basis-10/12 lg:pt-1 font-light lg:text-xs text-4xl w-full hover:underline lg:pl-2 pl-8 h-1/2 md:text-3xl pt-3 ">Tiêu đề dsao in coinason vona dop</div>
            </div>
            <div class="flex flex-row border border-[#eee] items-center lg:divide-x divide-x-4 divide-black h-[8rem] md:divide-x-2 lg:h-[3rem]  ">
              <div class="text-center basis-2/12 lg:pt-1 pt-3 font-medium text-5xl lg:text-base md:text-4xl">04</div>
              <div class="basis-10/12 lg:pt-1 font-light lg:text-xs text-4xl w-full hover:underline lg:pl-2 pl-8 h-1/2 md:text-3xl pt-3 ">Tiêu đề dsao in coinason vona dop</div>
            </div>
            <div class="flex flex-row border border-[#eee] items-center lg:divide-x divide-x-4 divide-black h-[8rem] md:divide-x-2 lg:h-[3rem]  ">
              <div class="text-center basis-2/12 lg:pt-1 pt-3 font-medium text-5xl lg:text-base md:text-4xl">05</div>
              <div class="basis-10/12 lg:pt-1 font-light lg:text-xs text-4xl w-full hover:underline lg:pl-2 pl-8 h-1/2 md:text-3xl pt-3 ">Tiêu đề dsao in coinason vona dop</div>
            </div>
            <div class="w-[265px] lg:h-8 h-20 md:h-10 border border-[#eee] bg-gray-100"></div>
        </div> 
        <div class="hidden" id="more">
        <div class="grid grid-rows-5 lg:w-[16.9rem] w-full h-full  ">
          <div class="flex flex-row border border-[#eee] items-center lg:divide-x divide-x-4 divide-black h-[8rem] md:divide-x-2 lg:h-[3rem]  ">
            <div class="text-center basis-2/12 lg:pt-1 pt-3 font-medium text-5xl lg:text-base md:text-4xl">06</div>
            <div class="basis-10/12 lg:pt-1 font-light lg:text-xs text-4xl w-full hover:underline lg:pl-2 pl-8 h-1/2 md:text-3xl pt-3 ">Tiêu đề dsao in coinason vona dop</div>
          </div>
          <div class="flex flex-row border border-[#eee] items-center lg:divide-x divide-x-4 divide-black h-[8rem] md:divide-x-2 lg:h-[3rem]  ">
            <div class="text-center basis-2/12 lg:pt-1 pt-3 font-medium text-5xl lg:text-base md:text-4xl">07</div>
            <div class="basis-10/12 lg:pt-1 font-light lg:text-xs text-4xl w-full hover:underline lg:pl-2 pl-8 h-1/2 md:text-3xl pt-3 ">Tiêu đề dsao in coinason vona dop</div>
          </div>
          <div class="flex flex-row border border-[#eee] items-center lg:divide-x divide-x-4 divide-black h-[8rem] md:divide-x-2 lg:h-[3rem]  ">
            <div class="text-center basis-2/12 lg:pt-1 pt-3 font-medium text-5xl lg:text-base md:text-4xl">08</div>
            <div class="basis-10/12 lg:pt-1 font-light lg:text-xs text-4xl w-full hover:underline lg:pl-2 pl-8 h-1/2 md:text-3xl pt-3 ">Tiêu đề dsao in coinason vona dop</div>
          </div>
          <div class="flex flex-row border border-[#eee] items-center lg:divide-x divide-x-4 divide-black h-[8rem] md:divide-x-2 lg:h-[3rem]  ">
            <div class="text-center basis-2/12 lg:pt-1 pt-3 font-medium text-5xl lg:text-base md:text-4xl">09</div>
            <div class="basis-10/12 lg:pt-1 font-light lg:text-xs text-4xl w-full hover:underline lg:pl-2 pl-8 h-1/2 md:text-3xl pt-3 ">Tiêu đề dsao in coinason vona dop</div>
          </div>
          <div class="flex flex-row border border-[#eee] items-center lg:divide-x divide-x-4 divide-black h-[8rem] md:divide-x-2 lg:h-[3rem]  ">
            <div class="text-center basis-2/12 lg:pt-1 pt-3 font-medium text-6xl lg:text-base md:text-5xl">10</div>
            <div class="basis-10/12 lg:pt-1 font-light lg:text-xs text-4xl w-full hover:underline lg:pl-2 pl-8 h-1/2 md:text-3xl pt-3 ">Tiêu đề dsao in coinason vona dop</div>
          </div>
              <div class="w-[265px] lg:h-8 h-20 border md:h-12 border-[#eee] bg-gray-100"></div>
          </div>
        </div>
      </div> 
      <button onClick={Showmore} class="lg:w-[265px] lg:h-[29px] w-full h-24 md:h-20 bg-gray-900 rounded-sm hover:bg-gray-700 inline-flex items-center justify-center hover:text-white text-gray-400 mt-2">  
          <h1 class="font-semibold lg:text-lg text-4xl">{'>'}</h1>
          <span id="button" class="lg:text-sm md:text-2xl text-4xl lg:font-light font-medium px-1 pt-[2px]">Show more</span>
      </button>
      </div>
    </div>
    )   
}
export default Rankingboard ;