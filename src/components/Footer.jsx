import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import Nav from '@/components/Nav'
import Image from 'next/image'

const Footer = () => {
	const { t, locale, locales, handleClick } = useLanguageSwitch()
	const currentYear = new Date().getFullYear() // Получаем текущий год
	return (
		<footer className='bg-black bg-footer bg-left bg-no-repeat bg-[length:50%] mb:bg-cover pt-[100px] tb:pt-[60px] pb-[60px] tb:pb-[40px]'>
			<div className='wrapper tb:px-[32px]'>
				{/* footer-top */}
				<div className='flex mb:flex-col justify-between items-center mb:items-baseline mb-[60px] mb:gap-y-[50px]'>
					<a href='/'>
						<Image
							src={'/images/GeeksTechGlobal_Logo_Final_3.2.svg'}
							alt='logo.svg'
							width={513}
							height={212}
							className='mb-[20px] lpl:w-[430px] tb:w-[225px] mb:w-[300px]'
						/>
						{/* <Image
							src={'./images/consulting-and-audit.svg'}
							alt='consulting-and-audit.svg'
							width={311}
							height={22}
							className='lpl:w-[248px] tb:w-[198px] mb:w-[162px]'
						/> */}
					</a>
					<div className='flex mb:flex-col gap-x-[180px] lpl:gap-x-[120px] tb:gap-x-[80px] mb:gap-y-[50px]'>
						<div>
							<div className='unbounded-medium text-[14px] leading-[24px] text-white mb-[40px] tb:mb-[20px]'>
								{t('footer.nav')}
							</div>
							<Nav
								// navStyle={}
								ulStyle={'flex flex-col gap-y-[12px] max-w-[266px]'}
								liStyle={
									'unbounded-regular text-[14px] tb:text-[12px] leading-[24px] text-[#BCBCBC] cursor-pointer'
								}
							/>
						</div>
						{/* footer-social */}
						<div>
							<div className='unbounded-medium text-[14px] leading-[24px] text-white mb-[40px] tb:mb-[20px]'>
								{t('footer.soc')}
							</div>
							<div className='flex flex-wrap gap-x-[16px] gap-y-[16px] tb:max-w-[112px] mb:max-w-full'>
								<a
									href=''
									className='icon-linkedin text-[20px] p-[14px] bg-footerRgb rounded-[48px] cursor-pointer'
								></a>
								<a
									href=''
									className='icon-instagram text-[20px] p-[14px] bg-footerRgb rounded-[48px] cursor-pointer'
								></a>
								{/* <a href='' className='icon-you-tube text-[20px] p-[14px] bg-footerRgb rounded-[48px] cursor-pointer'></a> */}
								<a
									href=''
									className='icon-fb text-[20px] p-[14px] bg-footerRgb rounded-[48px] cursor-pointer'
								></a>
							</div>
							<dev className='flex flex-wrap info-email'>
								<a href='mailto:info@geekstechglobal.com'>
									info@geekstechglobal.com
								</a>
							</dev>
							<dev className='flex flex-wrap info-phone'>
								<a href='tel:+10000000000000'>+10000000000000</a>
							</dev>
						</div>
					</div>
				</div>
				{/* footer-bottom */}
				<div className='flex justify-between items-center mb:flex-col mb:items-start'>
					<div className='raleway-regular text-[18px] mb:text-[14px] leading-[24px] text-[#868693] mb:mb-[10px]'>
						© {currentYear}. {t('footer.reserved')}
					</div>
					<div className='raleway-regular text-[18px] mb:text-[14px] leading-[24px] text-[#868693]'>
						{t('footer.policy')}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
