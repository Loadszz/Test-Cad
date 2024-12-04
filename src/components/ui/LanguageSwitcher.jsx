import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import Link from 'next/link'

const LanguageSwitcher = ({ isMobile, isScrolled, isHovered }) => {
	const { t, locale, locales, handleClick } = useLanguageSwitch()
	const languageName = lang => {
		switch (lang) {
			case 'en':
				return 'Eng'
			// Разблокировать для ру языка
			// case 'ru':
			// 	return 'Рус';
			case 'ua':
				return 'Укр'
			default:
				return lang
		}
	}

	return (
		<ul
			className={`flex justify-center items-center gap-[8px] rounded-[32px] border border-[#B0B0B0] w-[106px] h-[40px] duration-500 ${isScrolled || (isHovered && !isMobile) ? 'bg-slate-600' : 'backdrop-blur-[21px] bg-myBrown'}`}
		>
			{locales.map(l => (
				<li
					key={l}
					className={`unbounded-regular text-[14px] leading-[24px] ${l == locale ? 'text-white' : 'text-[#BAB8B5]'}`}
				>
					<Link href={'/'} locale={l} onClick={handleClick(l)}>
						{languageName(l)}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default LanguageSwitcher
