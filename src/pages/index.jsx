import React from 'react'
import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { raleway, unbounded } from '@/assets/fonts/font'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import OurResults from "@/components/OurResults";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Head from 'next/head'
import TagManager from 'react-gtm-module'


export default function Home() {
	const { t, locale, locales, handleClick } = useLanguageSwitch();


	return (
		<wrapper className={`${raleway.variable} ${unbounded.variable} flex flex-col overflow-hidden`}>
			<Head>

				<title>{t('meta-tags.title')}</title>
				<meta name="description" content={t('meta-tags.description')} />
		 
 
 
			</Head>
			<Header />

			<main>

				<Hero Swiper={Swiper} SwiperSlide={SwiperSlide} Navigation={Navigation} Pagination={Pagination} Autoplay={Autoplay} />
				<Services />
				<Advantages />
				<OurResults />
				<Portfolio />
				<Reviews Swiper={Swiper} SwiperSlide={SwiperSlide} Navigation={Navigation} Pagination={Pagination} Autoplay={Autoplay} />
				<Contact />

			</main>

			<Footer />

		</wrapper>
	)
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	}
}
