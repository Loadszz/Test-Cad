import React from 'react'
import { useSwiper } from 'swiper/react'

const ReviewsSwapperButtons = () => {
	const swiper = useSwiper()
	return (
		<div className='flex gap-x-[12px] '>
			<div className='icon-reviews-arrow-left text-[30px] tb:text-[26px] text-black p-[12px] tb:pb-[10px] border rounded-[441px] border-gray-300 bg-white cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2] hover:text-white'
				onClick={() => swiper.slidePrev()}></div>
			<div className='icon-reviews-arrow-right text-[30px] tb:text-[26px] text-black p-[12px] tb:pb-[10px] border rounded-[350px] border-gray-300 bg-white cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2] hover:text-white'
				onClick={() => swiper.slideNext()}></div>
		</div>
	)
}

export default ReviewsSwapperButtons