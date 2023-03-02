import React from 'react';

function News_next_to_slideauto() {

return(
    <div className='w-full pb-5 px-3 hidden lg:block'>
        <div >
            <div class="relative ">
                <img className='lg:w-[360px] lg:h-[411px] w-full  border border-slate-700' src="https://www.surfertoday.com/images/stories/sunrisesunsettime.jpg" />
                <div className='absolute bg-gradient w-full p-4 bottom-0'>
                    <h5 className='break-words lg:font-semibold font-bold text-gray-100 lg:text-xl mb:text-3xl text-5xl lg:pb-3 md:pb-5 pb-8 text-ellipsis overflow-hidden px-2'>
                        <a href=''>
                            Title kjbc ácno én inc cobc kjwoc vaownocjkw ksnalcnlan ska csajk íaci ócakn
                        </a>
                    </h5>
                    <div className='flex items-center space-x-3 px-2'>
                        <div className='font-light text-white lg:text-xs md:text-md text-xl leading-none'>Tags</div>
                        <span className='font-light lg:text-xs md:text-md text-lg text-gray-200'>1 giờ trước</span>

                    </div>
                </div>
            </div>
        </div>
    </div>

)

}
export default News_next_to_slideauto;