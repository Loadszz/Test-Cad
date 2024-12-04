import Image from 'next/image'
import { useEffect, useState } from 'react'
import Nav from './Nav'
import Burger from './ui/Burger'
import LanguageSwitcher from './ui/LanguageSwitcher'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const [isHovered, setIsHovered] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	// Определение мобильного устройства
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768)
		}

		handleResize() // Устанавливаем начальное значение
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleBurger = () => {
		setIsOpen(!isOpen)
		if (!isOpen) {
			document.body.classList.add('lock')
			setIsScrolled(false)
		} else {
			document.body.classList.remove('lock')
		}
	}
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={`fixed w-full py-[18px] z-20 duration-500 ${
				isScrolled || (isHovered && !isMobile)
					? 'bg-slate-100'
					: 'bg-slate-800 bg-opacity-20'
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className='wrapper'>
				{/* header-body */}
				<div className='flex justify-between items-center'>
					{/* header-logo */}
					<div className='flex flex-col items-center'>
						<a href='/' className='z-10'>
							<Image
								src={
									isScrolled || (isHovered && !isMobile)
										? '/images/logo-2.svg'
										: '/images/logo-1.svg'
								}
								alt='logo'
								width={400}
								height={100}
								className='tb:w-[250px] mb:w-[200px] duration-500'
							/>
						</a>
					</div>
					{/* header-burger */}
					<Burger
						isScrolled={isScrolled}
						isOpen={isOpen}
						handleBurger={handleBurger}
					/>
					{/* header-nav */}
					<div
						className={`flex justify-between items-center w-full tb:fixed tb:justify-start tb:flex-col tb:items-start tb:top-0 tb:w-full tb:h-[100%] tb:bg-black tb:pt-[156px] mb:pt-[144px] tb:pl-[32px] mb:pl-[20px] tb:pb-[136px] mb:pb-[124px] tb:overflow-scroll transition-all duration-300 tb:bg-burger tb:bg-center tb:bg-no-repeat tb:bg-cover ${isOpen ? 'tb:left-0' : 'tb:left-[-100%]'}`}
					>
						<Nav
							isOpen={isOpen}
							handleBurger={handleBurger}
							navStyle={'w-full tb:mb-[50px]'}
							ulStyle={
								'flex justify-center gap-[32px] tb:flex-col tb:justify-stretch tb:gap-[48px] mb:gap-[28px]'
							}
							liStyle={`header-nav-link duration-500 ${isScrolled || (isHovered && !isMobile) ? 'text-black' : 'text-white'}`}
						/>
						<div>
							<LanguageSwitcher
								isMobile={isMobile}
								isScrolled={isScrolled}
								isHovered={isHovered}
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
