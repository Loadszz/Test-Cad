import { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { useSwiper } from 'swiper/react'

const SwiperButtons = ({ slides }) => {
	// const totalSlides = Object.keys(sliderObject).length;
	const swiper = useSwiper()
	const [progress, setProgress] = useState(33)

	const updateProgress = () => {
		const currentSlide = swiper.activeIndex + 1
		const percentage = Math.round((currentSlide / slides.length) * 100)
		setProgress(percentage)
	}

	const handleSlidePrev = () => {
		swiper.slidePrev()
		updateProgress()
	}

	const handleSlideNext = () => {
		swiper.slideNext()
		updateProgress()
	}

	useEffect(() => {
		swiper.on('slideChange', updateProgress)

		return () => {
			swiper.off('slideChange', updateProgress)
		}
	}, [swiper])

	useEffect(() => {
		const handleAutoPlay = () => {
			updateProgress()
		}

		swiper.on('autoplay', handleAutoPlay)

		return () => {
			swiper.off('autoplay', handleAutoPlay)
		}
	}, [swiper])
	return (
		<div className='flex items-center justify-start gap-[24px] wrapper z-10'>
			<button
				className={`icon-hero-arrow-left text-[18px] p-[10px] text-white bg-[#50453E] border-[2px] border-[#8C8B8B] rounded-[360px] transition-all duration-300`}
				onClick={handleSlidePrev}
			></button>
			{/* <div className='hero-swiper-pagination'>
				<span className="swiper-pagination-current"></span> /
				<span className="swiper-pagination-total"></span>
			</div> */}
			<button
				className={`relative icon-hero-arrow-right text-[18px] p-[10px] text-white bg-[#50453E] border border-[#8C8B8B] rounded-[360px]`}
				onClick={handleSlideNext}
			>
				<CircularProgressbar
					strokeWidth={3}
					value={progress}
					className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] h-[38px] w-[38px]'
				/>
			</button>
		</div>
	)
}

export default SwiperButtons
