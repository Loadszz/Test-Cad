import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import { fadeIn } from '@/assets/variants'
import { motion } from 'framer-motion'

const Advantages = () => {
	const { t, locale, locales, handleClick } = useLanguageSwitch()
	return (
		<section
			name='advantages'
			className='bg-[#F5F5F5] py-[120px] tb:py-[60px] p:py-[50px]'
		>
			<div className='wrapper'>
				{/* header */}
				<div className='mb-[50px] tb:mb-[60px]'>
					<h2 className='w-[478px] tb:w-[415px] mb:w-full mb-[40px] tb:mb-[20px]'>
						{t('advantages.h2')}
					</h2>
					<p className='advantage-header-text w-[668px] tb:w-[527px] mb::w-[311px] mb:w-full'>
						{t('advantages.sub-title')}
					</p>
				</div>
				{/* main */}
				<div className='relative lg:max-w-[1200px] mx-auto'>
					<div className='absolute top-[10px] left-[50%] mb:left-[31px] mb:translate-x-[-31px] translate-x-[-50%] w-[20px] mb:w-[10px] h-full bg-white rounded-[360px]'></div>
					<div>
						{/* item-right */}
						<motion.div
							variants={fadeIn('left', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='w-full flex flex-col items-end mb:mb-[40px]'
						>
							<div className='w-[50%] mb:w-full group'>
								<div className='flex items-center mb-[32px] tb:mb-[20px]'>
									{/* circle */}
									<div className='advantage-circle-icon relative left-[-20px] tb:left-[-15px] mb:left-[-11px] z-10 group-hover:bg-cyan-400 transition-all duration-300'>
										<div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-[350px] h-[20px] tb:h-[15px] w-[20px] tb:w-[15px] bg-white'></div>
									</div>
									<div className='border border-dashed border-[#919191] w-[100%]'></div>
									<div className='advantage-circle-number ml-[30px]'>01</div>
								</div>

								<div className='flex justify-end items-start'>
									<div className='advantage-item-icon flex items-center justify-center flex-[0_0_118px] tb:flex-[0_0_100px] mb:flex-[0_0_60px] h-[118px] tb:h-[100px] mb:h-[60px] mr-[40px] mb:mr-[12px] ml-[40px]'>
										<img src='/images/icons/innovacion.png' />
									</div>

									<div className='flex-[1_1_auto]'>
										<h3 className='advantage-item-title max-w-[464px] mb-[24px] mb:mb-[12px]'>
											{t('advantages.item-title-first')}
										</h3>
										<div className='advantage-item-text'>
											{t('advantages.item-text-first')}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
						{/* item-left */}
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='w-full flex flex-col items-start mb:mb-[40px]'
						>
							<div className='w-[50%] mb:w-full group'>
								<div className='flex items-center mb:flex-row-reverse mb-[32px] tb:mb-[20px]'>
									{/* circle */}
									<div className='advantage-circle-number mr-[30px] mb:ml-[30px] mb:mr-0'>
										02
									</div>
									<div className='border border-dashed border-[#919191] w-[100%]'></div>
									<div className='advantage-circle-icon relative right-[-20px] tb:right-[-15px] mb:left-[-11px] z-10 group-hover:bg-cyan-400 transition-all duration-300'>
										<div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-[350px] h-[20px] tb:h-[15px] w-[20px] tb:w-[15px] bg-white'></div>
									</div>
								</div>
								<div className='flex justify-end items-start'>
									<div className='advantage-item-icon   flex items-center justify-center flex-[0_0_118px] tb:flex-[0_0_100px] mb:flex-[0_0_60px] h-[118px] tb:h-[100px] mb:h-[60px] mr-[40px] mb:mr-[12px] mb:ml-[40px]'>
										<img src='/images/icons/collaboration.png' />
									</div>
									<div className='flex-[1_1_auto] mr-[40px] mb:mr-0'>
										<h3 className='advantage-item-title max-w-[464px] mb-[24px] mb:mb-[12px]'>
											{t('advantages.item-title-second')}
										</h3>
										<div className='advantage-item-text'>
											{t('advantages.item-text-second')}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
						{/* item-right */}
						<motion.div
							variants={fadeIn('left', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='w-full flex flex-col items-end mb:mb-[40px]'
						>
							<div className='w-[50%] mb:w-full group'>
								<div className='flex items-center mb-[32px] tb:mb-[20px]'>
									{/* circle */}
									<div className='advantage-circle-icon relative left-[-20px] tb:left-[-15px] mb:left-[-11px] z-10 group-hover:bg-cyan-400 transition-all duration-300'>
										<div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-[350px] h-[20px] tb:h-[15px] w-[20px] tb:w-[15px] bg-white'></div>
									</div>
									<div className='border border-dashed border-[#919191] w-[100%]'></div>
									<div className='advantage-circle-number ml-[30px]'>03</div>
								</div>
								<div className='flex justify-end items-start'>
									<div className='advantage-item-icon flex items-center justify-center flex-[0_0_118px] tb:flex-[0_0_100px] mb:flex-[0_0_60px] h-[118px] tb:h-[100px] mb:h-[60px] mr-[40px] mb:mr-[12px] ml-[40px]'>
										<img src='/images/icons/track.png' />
									</div>
									<div className='flex-[1_1_auto]'>
										<h3 className='advantage-item-title max-w-[464px] mb-[24px] mb:mb-[12px]'>
											{t('advantages.item-title-third')}
										</h3>
										<div className='advantage-item-text'>
											{t('advantages.item-text-third')}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
						{/* item-left */}
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='w-full flex flex-col items-start mb:mb-[40px]'
						>
							<div className='w-[50%] mb:w-full group'>
								<div className='flex items-center mb:flex-row-reverse mb-[32px] tb:mb-[20px] '>
									{/* circle */}
									<div className='advantage-circle-number mr-[30px] mb:ml-[30px] mb:mr-0'>
										04
									</div>
									<div className='border border-dashed border-[#919191] w-[100%]'></div>
									<div className='advantage-circle-icon relative right-[-20px] tb:right-[-15px] mb:left-[-11px] z-10 group-hover:bg-cyan-400 transition-all duration-300'>
										<div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-[350px] h-[20px] tb:h-[15px] w-[20px] tb:w-[15px] bg-white'></div>
									</div>
								</div>
								<div className='flex justify-end items-start'>
									<div className='advantage-item-icon flex items-center justify-center flex-[0_0_118px] tb:flex-[0_0_100px] mb:flex-[0_0_60px] h-[118px] tb:h-[100px] mb:h-[60px] mr-[40px] mb:mr-[12px] mb:ml-[40px]'>
										<img src='/images/icons/cert.png' />
									</div>
									<div className='flex-[1_1_auto] mr-[40px] mb:mr-0'>
										<h3 className='advantage-item-title max-w-[464px] mb-[24px] mb:mb-[12px]'>
											{t('advantages.item-title-fourth')}
										</h3>
										<div className='advantage-item-text'>
											{t('advantages.item-text-fourth')}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
						{/* item-right */}
						<motion.div
							variants={fadeIn('left', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='w-full flex flex-col items-end mb:mb-[40px]'
						>
							<div className='w-[50%] mb:w-full group'>
								<div className='flex items-center mb-[32px] tb:mb-[20px]'>
									{/* circle */}
									<div className='advantage-circle-icon relative left-[-20px] tb:left-[-15px] mb:left-[-11px] z-10 group-hover:bg-cyan-400 transition-all duration-300'>
										<div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-[350px] h-[20px] tb:h-[15px] w-[20px] tb:w-[15px] bg-white'></div>
									</div>
									<div className='border border-dashed border-[#919191] w-[100%]'></div>
									<div className='advantage-circle-number ml-[30px]'>05</div>
								</div>
								<div className='flex justify-end items-start'>
									<div className='advantage-item-icon   flex items-center justify-center flex-[0_0_118px] tb:flex-[0_0_100px] mb:flex-[0_0_60px] h-[118px] tb:h-[100px] mb:h-[60px] mr-[40px] mb:mr-[12px] ml-[40px]'>
										<img src='/images/icons/scale.png' />
									</div>
									<div className='flex-[1_1_auto]'>
										<h3 className='advantage-item-title max-w-[464px] mb-[24px] mb:mb-[12px]'>
											{t('advantages.item-title-fifth')}
										</h3>
										<div className='advantage-item-text'>
											{t('advantages.item-text-fifth')}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
						{/* item-left */}
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='w-full flex flex-col items-start mb:mb-[40px]'
						>
							<div className='w-[50%] mb:w-full group'>
								<div className='flex items-center mb:flex-row-reverse mb-[32px] tb:mb-[20px]'>
									{/* circle */}
									<div className='advantage-circle-number mr-[30px] mb:ml-[30px] mb:mr-0'>
										06
									</div>
									<div className='border border-dashed border-[#919191] w-[100%]'></div>
									<div className='advantage-circle-icon relative right-[-20px] tb:right-[-15px] mb:left-[-11px] z-10 group-hover:bg-cyan-400 transition-all duration-300'>
										<div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-[350px] h-[20px] tb:h-[15px] w-[20px] tb:w-[15px] bg-white'></div>
									</div>
								</div>
								<div className='flex justify-end items-start'>
									<div className='advantage-item-icon   flex items-center justify-center flex-[0_0_118px] tb:flex-[0_0_100px] mb:flex-[0_0_60px] h-[118px] tb:h-[100px] mb:h-[60px] mr-[40px] mb:mr-[12px] mb:ml-[40px]'>
										<img src='/images/icons/mobile.png' />
									</div>
									<div className='flex-[1_1_auto] mr-[40px] mb:mr-0'>
										<h3 className='advantage-item-title max-w-[464px] mb-[24px] mb:mb-[12px]'>
											{t('advantages.item-title-sixth')}
										</h3>
										<div className='advantage-item-text'>
											{t('advantages.item-text-sixth')}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
						{/* item-right */}
						<motion.div
							variants={fadeIn('left', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.3 }}
							className='w-full flex flex-col items-end mb:mb-[40px]'
						>
							<div className='w-[50%] mb:w-full group'>
								<div className='flex items-center mb-[32px] tb:mb-[20px]'>
									{/* circle */}
									<div className='advantage-circle-icon relative left-[-20px] tb:left-[-15px] mb:left-[-11px] z-10 group-hover:bg-cyan-400 transition-all duration-300'>
										<div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-[350px] h-[20px] tb:h-[15px] w-[20px] tb:w-[15px] bg-white'></div>
									</div>
									<div className='border border-dashed border-[#919191] w-[100%]'></div>
									<div className='advantage-circle-number ml-[30px]'>07</div>
								</div>
								<div className='flex justify-end items-start'>
									<div className='advantage-item-icon   flex items-center justify-center flex-[0_0_118px] tb:flex-[0_0_100px] mb:flex-[0_0_60px] h-[118px] tb:h-[100px] mb:h-[60px] mr-[40px] mb:mr-[12px] ml-[40px]'>
										<img src='/images/icons/ai.png' />
									</div>
									<div className='flex-[1_1_auto]'>
										<h3 className='advantage-item-title max-w-[464px] mb-[24px] mb:mb-[12px]'>
											{t('advantages.item-title-seven')}
										</h3>
										<div className='advantage-item-text'>
											{t('advantages.item-text-seven')}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advantages
