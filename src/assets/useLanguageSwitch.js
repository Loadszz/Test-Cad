import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export function useLanguageSwitch() {
	const { t } = useTranslation();
	const { i18n } = useTranslation();
	const { locale, locales, push } = useRouter();

	const handleClick = l => () => {
		push('/', undefined, { locale: l });
		i18n.changeLanguage(l);
	}

	return { t, locale, locales, handleClick };
}