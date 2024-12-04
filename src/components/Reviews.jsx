import React, { useState, useEffect } from 'react'
import ReviewsSwapperButtons from './ui/ReviewsSwapperButtons'
import { useLanguageSwitch } from '@/assets/useLanguageSwitch'

const Reviews = ({ Swiper, SwiperSlide, Navigation, Pagination, Autoplay }) => {
	const { t, locale, locales, handleClick } = useLanguageSwitch()
	const reviews = [
		
		{
			id: 1,
			stars: 4,
			text: 'Exceptional service! The cloud migration was seamless, and the teams expertise shone through. Highly recommend!',
			name: 'Sarah Thompson',
			jobTitle: 'IT Manager'
		},
		
		{
			"id": 2,
			"stars": 5,
			"text": "DevOps solutions exceeded our expectations. Automation streamlined our processes, saving time and boosting productivity.",
			"name": "Alex Rodriguez",
			"jobTitle": "Software Engineer"
		 }, 

		 {
			"id": 3,
			"stars": 5,
			"text": "Impressed with the IP telephony upgrade. Clearer communication and cost-effective. Fantastic work!",
			"name": "Emily Lewis",
			"jobTitle": "Communications Director"
		 }
,
		 {
			"id": 4,
			"stars": 5,
			"text": "Web development at its finest! Our website is not just visually stunning but also user-friendly. Thanks for the modern design!",
			"name": "Jason Carter",
			"jobTitle": "Marketing Manager"
		 },

		 {
			"id": 5,
			"stars": 5,
			"text": "AI support bots revolutionized customer interactions. Fast, intelligent responses - a game-changer for our business.",
			"name": "Jennifer Reed",
			"jobTitle": "Customer Support Lead"
		 },

		 {
			"id": 6,
			"stars": 5,
			"text": "Custom solutions tailored perfectly to our needs. The team's understanding of our requirements was spot-on!",
			"name": "Michael Patel",
			"jobTitle": "Operations Manager"
		 },

		 {
			"id": 7,
			"stars": 5,
			"text": "Cloud migration was a strategic move for us. Scalability and flexibility are now integral to our operations. Kudos to the team!",
			"name": "Rachel Turner",
			"jobTitle": "CEO"
		 },

		 {
			"id": 8,
			"stars": 5,
			"text": "DevOps expertise brought a new level of efficiency. Automation reduced errors, and collaboration among teams improved significantly.",
			"name": "Daniel Foster",
			"jobTitle": "Development Lead"
		 } ,

		 {
			"id": 9,
			"stars": 5,
			"text": "AI solutions provided insights we didn't know were possible. A true partner in our journey toward technological advancement.",
			"name": "Emma Carter",
			"jobTitle": "Chief Technology Officer"
		 } 
		 
	]
	const breakpoints = {
		// когда ширина экрана меньше 640
		640: {
			slidesPerView: 2,
		},
		// когда ширина экрана меньше 768
		1024: {
			slidesPerView: 3,
		},
		// когда ширина экрана меньше 1440
		1440: {
			slidesPerView: 4,
		},
	};

	return (
		<section name='reviews' className='pt-[100px] pb-[120px] tb:py-[60px] mb:py-[50px] bg-[#E6E6E6]'>
			<div className='wrapper'>
				<div className='reviews-body'>
					<Swiper
						modules={[Navigation, Pagination, Autoplay]}
						slidesPerView={1}
						autoplay={{ delay: 225000 }}
						breakpoints={breakpoints}
						pagination={{
							type: 'progressbar',
						}}>
						<div className='flex justify-start items-center mb-[60px] tb:mb-[40px] mb:mb-[32px]'>
							<h2 className='mr-[50px]'> {t('our-feedbacks.h2')} </h2>
							<ReviewsSwapperButtons />
						</div>
						<div>
							{reviews.map((review) => (
								<SwiperSlide key={review.id}>
									{/* cards */}
									<div className='flex flex-col justify-start w-[100%] h-[312px] p-[22px] border border-bdGray bg-white'>

										<div>
											<span className={`icon-star text-[24px] ${review.stars >= 1 ? 'text-gradient-blue' : 'text-[#E2E8F1]'}`}></span>
											<span className={`icon-star text-[24px] ${review.stars >= 2 ? 'text-gradient-blue' : 'text-[#E2E8F1]'}`}></span>
											<span className={`icon-star text-[24px] ${review.stars >= 3 ? 'text-gradient-blue' : 'text-[#E2E8F1]'}`}></span>
											<span className={`icon-star text-[24px] ${review.stars >= 4 ? 'text-gradient-blue' : 'text-[#E2E8F1]'}`}></span>
											<span className={`icon-star text-[24px] ${review.stars >= 5 ? 'text-gradient-blue' : 'text-[#E2E8F1]'}`}></span>
										</div>

										<div>
											<p className='rewiev-card-text pb-[20px] mb-[20px] border-b border-bdGray  h-[162px]'>{review.text}</p>
											<p className='rewiev-card-title mb-[4px]'>{review.name}</p>
											<p className='rewiev-card-subtitle '>{review.jobTitle}</p>
										</div>

									</div>
								</SwiperSlide>
							))}
						</div>
					</Swiper>
				</div>
			</div>
		</section >
	)
}

export default Reviews