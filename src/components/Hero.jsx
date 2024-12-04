import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import Image from 'next/image'
import { useRef } from 'react'
import { Link } from 'react-scroll'
import Button from './ui/Button'
import SwiperButtons from './ui/SwiperButtons'

const Hero = ({ Swiper, SwiperSlide, Navigation, Pagination, Autoplay }) => {
	const { t, locale, locales, handleClick } = useLanguageSwitch()

	const slides = [
		{
			id: 1,
			image: 'bg-hero',
			subTitle: `${t('hero.sub-title')}`,
			titleEng: (
				<>
					{' '}
					Your Business with{' '}
					<span className='text-gradient-blue'> Expert IT Solutions </span>{' '}
				</>
			),
			titleUa: (
				<>
					{' '}
					Розвивайте свій бізнес{' '}
					<span className='text-gradient-blue'> з експертами </span>{' '}
				</>
			),
			text: `${t('hero.text1')}`,
		},

		{
			id: 2,
			image: 'bg-hero2',
			subTitle: `${t('hero.sub-title')}`,
			titleEng: (
				<>
					{' '}
					Tech Excellence,{' '}
					<span className='text-gradient-blue'> Global Presence </span>{' '}
				</>
			),
			titleUa: (
				<>
					{' '}
					Комплексні <span className='text-gradient-blue'>
						IT-рішення
					</span> для вашого бізнесу
				</>
			),
			text: `${t('hero.text2')}`,
		},

		{
			id: 3,
			image: 'bg-hero3',
			subTitle: `${t('hero.sub-title')}`,
			titleEng: (
				<>
					{' '}
					AI-Powered Future <span className='text-gradient-blue'>
						{' '}
						Today{' '}
					</span>{' '}
				</>
			),
			titleUa: (
				<>
					{' '}
					Передові <span className='text-gradient-blue'> AI </span> рішення для
					вашого бізнесу
				</>
			),
			text: `${t('hero.text3')}`,
		},
	]
	const progressRef = useRef(null)
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressRef.current.style.width = `${(1 - progress) * 100}%`
	}
	return (
		<>
			<Swiper
				className={'hero-swiper-pagination'}
				modules={[Navigation, Pagination, Autoplay]}
				slidesPerView={1}
				autoplay={{ delay: 5000 }}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				pagination={{
					type: 'fraction',
					el: '.hero-swiper-pagination',
				}}
			>
				{slides.map(slide => (
					<SwiperSlide key={slide.id}>
						<section
							className={`${slide.image} relative bg-cover bg-center bg-no-repeat pb-[196px] pt-[251px] tb:pt-[176px] mb:pt-[164px] h-[988px] tb:h-[688px]`}
						>
							<div className='wrapper'>
								<div>
									<div className='hero-sub-title mb-[15px]'>
										{slide.subTitle}
									</div>
									<h1 className='max-w-[934px] mb-[60px] tb:mb-[32px] tb:max-w-[784px] mb:mb-[24px]'>
										{locale == 'en' ? slide.titleEng : slide.titleUa}
									</h1>
									<div className='hero-text content-center mb-[64px] max-w-[665px] tb:mb-[48px] mb:mb-[40px]'>
										{slide.text}
									</div>
									<div className='flex h-[54px] w-[250px] items-center justify-center rounded-[360px] bg-accent hover:bg-cyan-600 cursor-pointer transition-all duration-500'>
										<Link
											to='contact'
											activeClass='active'
											smooth={true}
											spy={true}
										>
											<Button text={t('hero.button-text')} />
										</Link>
										<Image
											src={'./images/heroButtonArrow.svg'}
											alt={'heroButtonArrow.svg'}
											width={20}
											height={20}
										/>
									</div>
								</div>
							</div>
						</section>
					</SwiperSlide>
				))}
				<div className='absolute bottom-[80px] mb:bottom-[40px] flex w-full items-center justify-between'>
					<SwiperButtons slides={slides}></SwiperButtons>
					<div className='autoplay-progress' slot='container-end'>
						<div className='relative w-full h-[8px] bg-[#e0e0e0] rounded-[4px] overflow-hidden'>
							<div className='w-[0%] h-full bg-accent' ref={progressRef}></div>
						</div>
						<div className='hero-swiper-pagination'>
							<span className='swiper-pagination-current'></span> /
							<span className='swiper-pagination-total'></span>
						</div>
					</div>
				</div>
			</Swiper>
		</>
	)
}

export default Hero
