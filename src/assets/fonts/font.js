import { Raleway, Unbounded } from 'next/font/google'

export const raleway = Raleway({
	variable: '--font-raleway',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700']
})
export const unbounded = Unbounded({
	variable: '--font-unbounded',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600']
})

