import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/assets/variants'
import { useLanguageSwitch } from '@/assets/useLanguageSwitch'


const Portfolio = () => {
	const { t, locale, locales, handleClick } = useLanguageSwitch()
	return (
		<section name='portfolio' className='pt-[100px] tb:pt-[60px] mb:pt-[50px]'>
			<div className='wrapper'>
				{/* heading */}
				<h2 className='text-center mb-[60px]'> {t('portfolio.h2')} </h2>
				{/* cards */}
				<div className='flex flex-wrap mb:flex-col relative'>
					{/* line */}
					<div className='absolute left-[50%] translate-x-[-50%] h-full w-[1px] bg-[#E6E6E6] mb:hidden'></div>
					<div className='flex justify-between mb:flex-col gap-x-[180px] tb:gap-x-[264px] mb:gap-0 border-t last-of-type:mb-[30px] tb:last-of-type:mb-0'>
						{/* card */}
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
							
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>01</div>
									<div className='pf-card-heading-text'>https://compasonline.com</div>
								</div> 

								{/* card-title */}
								<h3 className='mb-[18px]'>Compas Media Group</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-[20px] mb:gap-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'> {t('portfolio.tag1')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag2')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag3')} </div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'>  {t('portfolio.item-text-first')} </div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] border border-[#E6E6E6] rounded-[12px]'>
								<Image
									 src={'/images/portfolio/compas.jpg'}
									//src={t('portfolio.h2')}
									alt='portfolio-card.jpg'
									width={850}
									height={458}
									className='absolute h-[458px] w-[850px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 '
								/>
							</div>
						</motion.div> 

						<motion.div
							variants={fadeIn('left', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>02</div>
									<div className='pf-card-heading-text'>https://aurafit.com.ua</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>Aurafit</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-[20px] mb:gap-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'> {t('portfolio.tag1')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag2')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag3')} </div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'>   
											{t('portfolio.item-text-second')}  
							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/aura.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 '
								/>
							</div>
						</motion.div>
					</div> 

 
					<div className='flex justify-between mb:flex-col gap-x-[180px] tb:gap-x-[64px] mb:gap-0 border-t last-of-type:mb-[30px] tb:last-of-type:mb-0'>
						{/* card */}
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>03</div>
									<div className='pf-card-heading-text'>https://dressa.com.ua</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>Dressa</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-[20px] mb:gap-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'> {t('portfolio.tag1')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag2')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag3')} </div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'>  
							
								{t('portfolio.item-text-third')}   

							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/dressa.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 '
								/>
							</div> 

						</motion.div> 
 

						<motion.div
							variants={fadeIn('left', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>04</div>
									<div className='pf-card-heading-text'>https://www.ericsson.com</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>Ericsson Media Group</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-[20px] mb:gap-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'> {t('portfolio.tag1')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag2')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag3')} </div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'> 
							{t('portfolio.item-text-fourth')}  
							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/ericson.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 '
								/>
							</div>
						</motion.div> 
					</div>  

					<div className='flex justify-between mb:flex-col gap-x-[180px] tb:gap-x-[64px] mb:gap-0 border-t last-of-type:mb-[30px] tb:last-of-type:mb-0'>
						{/* card */}
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>05</div>
									<div className='pf-card-heading-text'>https://fitnessdepot.co.il</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>Fitnessdepot</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-[20px] mb:gap-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'> {t('portfolio.tag1')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag2')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag3')} </div>
								</div>
							</div>
							
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'> 

							{t('portfolio.item-text-fifth')}  

							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/fitnessdepot.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 '
								/>
							</div>
						</motion.div> 
 

						<motion.div
							variants={fadeIn('left', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>06</div>
									<div className='pf-card-heading-text'>https://www.vorobievy-gory.kharkov.ua</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>Sparrow Mountains</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-[20px] mb:gap-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'> {t('portfolio.tag1')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag2')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag3')} </div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'> 
							{t('portfolio.item-text-sixth')}  
							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/gora.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 '
								/>
							</div>
						</motion.div> 
					</div>  


					<div className='flex justify-between mb:flex-col gap-x-[180px] tb:gap-x-[64px] mb:gap-0 border-t last-of-type:mb-[30px] tb:last-of-type:mb-0'>
						{/* card */}
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>07</div>
									<div className='pf-card-heading-text'>https://www.jabil.com</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'> Jabil </h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-[20px] mb:gap-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'> {t('portfolio.tag1')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag2')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag3')} </div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'> 
							{t('portfolio.item-text-seven')}  
							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/jasbil.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 '
								/>
							</div>
						</motion.div> 

						<motion.div
							variants={fadeIn('left', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>08</div>
									<div className='pf-card-heading-text'>https://lopan.com.ua</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>Lopan group</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-[20px] mb:gap-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'> {t('portfolio.tag1')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag2')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag3')} </div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'> 
							{t('portfolio.item-text-eight')}  
							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/lopangroup.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 '
								/>
							</div>
						</motion.div> 
					</div>  



					<div className='flex justify-between mb:flex-col gap-x-[180px] tb:gap-x-[64px] mb:gap-0 border-t last-of-type:mb-[30px] tb:last-of-type:mb-0'>
						{/* card */}
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>09</div>
									<div className='pf-card-heading-text'>https://parkmobile.io</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>ParkMobile</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-[20px] mb:gap-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'> {t('portfolio.tag1')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag2')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag3')} </div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'> 
							{t('portfolio.item-text-nine')}  
							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/pasrkmobile.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 '
								/>
							</div>
						</motion.div> 

						<motion.div
							variants={fadeIn('left', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>10</div>
									<div className='pf-card-heading-text'>https://modniy-ostrov.com</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>Modniy Ostrov</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-[20px] mb:gap-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'> {t('portfolio.tag1')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag2')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag3')} </div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'> 
							{t('portfolio.item-text-ten')}  
							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/ostrov.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 '
								/>
							</div>
						</motion.div> 
					</div>  



					<div className='flex justify-between mb:flex-col gap-x-[180px] tb:gap-x-[64px] mb:gap-0 border-t last-of-type:mb-[30px] tb:last-of-type:mb-0'>
						{/* card */}
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>11</div>
									<div className='pf-card-heading-text'>https://topolyok.com.ua</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>Topolyok</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-[20px] mb:gap-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'> {t('portfolio.tag1')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag2')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag3')} </div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'> 
							{t('portfolio.item-text-eleven')}  
							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/tpolek.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 '
								/>
							</div>
						</motion.div> 

						<motion.div
							variants={fadeIn('left', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>12</div>
									<div className='pf-card-heading-text'>https://www.giftush.co.il</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>Giftush</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-[20px] mb:gap-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'> {t('portfolio.tag1')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag2')} </div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>{t('portfolio.tag3')} </div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'> 
							{t('portfolio.item-text-twelve')}  
							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/shabeng.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 '
								/>
							</div>
						</motion.div> 
					</div>  
 

				</div>
			</div>
		</section>
	)
}

export default Portfolio