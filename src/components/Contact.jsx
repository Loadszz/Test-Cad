import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import Image from 'next/image'
import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = () => {
	const { t, locale, locales, handleClick } = useLanguageSwitch()
	const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
	const contactApi = '/api/contactus'
	const recaptchaRef = useRef()
	const [isVerified, setIsVerified] = useState(false)
	const [mgResult, setMsgResult] = useState('')

	const handleRecaptcha = () => {
		setIsVerified(true)
	}

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		surname: '',
		message: '',
		recaptchaValue: '',
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleFormSubmit = async e => {
		e.preventDefault()

		const recaptchaValue = recaptchaRef.current.getValue()
		formData.recaptchaValue = recaptchaValue

		try {
			setFormData({
				name: '',
				email: '',
				surname: '',
				message: '',
				recaptchaValue: '',
			})

			setMsgResult('Form submitted successfully!')

			await fetch(contactApi, {
				method: 'POST',

				headers: {
					'Content-Type': 'application/json',
				},

				body: JSON.stringify(formData),
			})
		} catch (error) {
			setMsgResult('Error submitting form. Please try again.')
		}
	}

	const titleEng = (
		<>
			Let's just do it <span className='text-gradient-blue'>together!</span>
		</>
	)
	const titleUa = (
		<>
			Давайте просто зробимо{' '}
			<span className='text-gradient-blue'>це разом!</span>
		</>
	)

	return (
		<section name='contact' className='md:flex'>
			{/* contact-column */}

			<div className=' flex-[0_0_100%]'>
				<div className='wrapper'>
					{/* contact-content */}
					<div className='md:w-[50%] py-[120px] mb:py-[50px] pr-[120px] tb:pr-[32px] mb:pr-0'>
						{/* contact-header */}
						<div className='mb-[48px] mb:mb-[32px]'>
							<h2 className='mb-[48px] mb:mb-[32px]'>
								{locale == 'en' ? titleEng : titleUa}
							</h2>
							<div className='raleway-medium text-[20px] tb:text-[16px] leading-[26px] tb:leading-[21px] text-[#52525A]'>
								{t('contacts.text')}
							</div>

							<br />

							<div className='raleway-medium text-[20px] tb:text-[16px] leading-[26px] tb:leading-[21px] text-[#52525A] text-gradient-blue'>
								{mgResult}
							</div>
						</div>

						{/* contact-form */}

						<form className='flex flex-col gap-y-[20px]'>
							<input
								className='h-[54px] outline-none border-b-[1px] border-[#E6E6E6] placeholder:text-[#B8BBBC] placeholder:text-[16px] text-[20px]'
								placeholder={t('contacts.name')}
								type='text'
								required
								value={formData.name}
								name='name'
								onChange={handleChange}
							/>

							<input
								className='h-[54px] outline-none border-b-[1px] border-[#E6E6E6] placeholder:text-[#B8BBBC] placeholder:text-[16px] text-[20px]'
								placeholder={t('contacts.surname')}
								type='text'
								required
								value={formData.surname}
								name='surname'
								onChange={handleChange}
							/>

							<input
								className='h-[54px] outline-none border-b-[1px] border-[#E6E6E6] placeholder:text-[#B8BBBC] placeholder:text-[16px] text-[20px]'
								placeholder={t('contacts.email')}
								type='email'
								required
								name='email'
								value={formData.email}
								onChange={handleChange}
								pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
							/>

							<textarea
								className='h-[54px] outline-none border-b-[1px] border-[#E6E6E6] placeholder:text-[#B8BBBC] placeholder:text-[16px] text-[20px] resize-none'
								placeholder={t('contacts.message')}
								type='text'
								name='message'
								onChange={handleChange}
								value={formData.message}
								required
							/>

							<ReCAPTCHA
								ref={recaptchaRef}
								sitekey={siteKey}
								onChange={handleRecaptcha}
								hl={'en'}
							/>

							<button
								className={`raleway-semibold text-[16px] leading-[24px] text-[#141415] py-[15px] px-[30px] bg-[#F3F4F6] rounded-[360px] mt-[40px] cursor-pointer transition-all duration-300 ${isVerified ? 'text-white bg-cyan-400' : ''}`}
								type='submit'
								disabled={!isVerified}
								onClick={handleFormSubmit}
							>
								{t('contacts.send')}
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* contact-column */}
			<div className='flex-[0_0_50%] md:translate-x-[-100%] relative md:pb-[45.6%]'>
				<Image
					src={'/images/contact/contact-background.jpg'}
					alt='contact-background.jpg'
					width={969}
					height={876}
					className='h-[676px] md:absolute md:w-full md:h-full md:left-0 md:top-0 object-cover'
				/>
			</div>
		</section>
	)
}

export default Contact
