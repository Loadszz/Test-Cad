import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import React, { useState, useEffect } from 'react'
import { useLanguageSwitch } from '@/assets/useLanguageSwitch';


const OurResults = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	})
	const [counterStarted, setCounterStarted] = useState(false);

	useEffect(() => {
		if (inView && !counterStarted) {
			setCounterStarted(true);
		}
	}, [inView, counterStarted]);
	const { t } = useLanguageSwitch()

	return (
		<section ref={ref} name='our-results' className='bg-our-client bg-center bg-cover bg-no-repeat py-[120px] tb:py-[60px] mb:py-[50px]'>
			<div className='wrapper'>
				<h2 className='text-white mb-[60px] tb:mb-[40px]'>{t('our-results.h2')}</h2>
				{/* our-results-body */}
				<div className='flex justify-between flex-wrap mb:flex-col gap-y-[150px] tb:gap-y-[60px] mb:gap-y-[32px]'>
					{/* our-results-counter */}
					<div className='flex-[0_0_27.4%] border-t border-gray-400'>
						<div className='our-client-card-number mb-[20px] tb:mb-[10px] pt-[40px]'>
							{counterStarted ? (
								<CountUp start={1} end={1000} duration={5} separator=" " />)
								: (
									0)}+
						</div>
						<p className='our-client-card-text'>{t('our-results.item-text-first')}</p>
					</div>
					{/* our-results-counter */}
					<div className='flex-[0_0_27.4%] border-t border-gray-400'>
						<div className='our-client-card-number mb-[20px] tb:mb-[10px] pt-[40px]'>
							{counterStarted ? (
								<CountUp start={0} end={60} duration={5} separator=" "
									prefix=''
									suffix="%" />)
								: (
									0)}
						</div>
						<p className='our-client-card-text'>{t('our-results.item-text-second')}</p>
					</div>
					{/* our-results-counter */}
					<div className='flex-[0_0_27.4%] border-t border-gray-400'>
						<div className='our-client-card-number mb-[20px] tb:mb-[10px] pt-[40px]'>
							{counterStarted ? (
								<CountUp start={1} end={300} duration={5} separator=" " />)
								: (
									0)}+
						</div>
						<p className='our-client-card-text'>{t('our-results.item-text-third')}</p>
					</div>
					{/* our-results-counter */}
					<div className='flex-[0_0_27.4%] border-t border-gray-400'>
						<div className='our-client-card-number mb-[20px] tb:mb-[10px] pt-[40px]'>
							{counterStarted ? (
								<CountUp start={1} end={700} duration={5} separator=" " />)
								: (
									0)}+
						</div>
						<p className='our-client-card-text'>{t('our-results.item-text-fourth')}</p>
					</div>
					{/* our-results-counter */}
					<div className='flex-[0_0_27.4%] border-t border-gray-400'>
						<div className='our-client-card-number mb-[20px] tb:mb-[10px] pt-[40px]'>
							{counterStarted ? (
								<CountUp start={1} end={1500} duration={5} separator=" " />)
								: (
									0)}+
						</div>
						<p className='our-client-card-text'>{t('our-results.item-text-fifth')}</p>
					</div>
					{/* our-results-counter */}
					<div className='flex-[0_0_27.4%] border-t border-gray-400'>
						<div className='our-client-card-number mb-[20px] tb:mb-[10px] pt-[40px]'>
							{counterStarted ? (
								<CountUp start={1} end={500} duration={5} separator=" " />)
								: (
									0)}+
						</div>
						<p className='our-client-card-text'>{t('our-results.item-text-sixth')}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OurResults