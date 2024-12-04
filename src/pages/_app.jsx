import '@/styles/style.css'
import '@/styles/icons.css'
import i18n from '@/assets/i18n';
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => (
	<Component {...pageProps} />
)

export default appWithTranslation(MyApp)
