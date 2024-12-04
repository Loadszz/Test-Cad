import { Link } from 'react-scroll';
import { useLanguageSwitch } from '@/assets/useLanguageSwitch'


const Nav = ({ navStyle, ulStyle, liStyle, isOpen, handleBurger }) => {
	const { t, locale, locales, handleClick } = useLanguageSwitch();
	return (
		<nav className={navStyle}>
			<ul className={ulStyle}>
				<li className={liStyle}>
					<Link
						to='services'
						activeClass='active'
						smooth={true}
						spy={true}
						onClick={isOpen ? handleBurger : null}
					>{t('header.navigation-1')}
					</Link>
				</li>
				<li className={liStyle}>
					<Link
						to='advantages'
						activeClass='active'
						smooth={true}
						spy={true}
						onClick={isOpen ? handleBurger : null}>{t('header.navigation-2')}
					</Link>
				</li>
				<li className={liStyle}>
					<Link
						to='portfolio'
						activeClass='active'
						smooth={true}
						spy={true}
						onClick={isOpen ? handleBurger : null}>{t('header.navigation-3')}

					</Link>
				</li>
				<li className={liStyle}>
					<Link
						to='reviews'
						activeClass='active'
						smooth={true}
						spy={true}
						onClick={isOpen ? handleBurger : null}>{t('header.navigation-4')}

					</Link>
				</li>
				<li className={liStyle}>
					<Link
						to='contact'
						activeClass='active'
						smooth={true}
						spy={true}
						onClick={isOpen ? handleBurger : null}>{t('header.navigation-5')}
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav