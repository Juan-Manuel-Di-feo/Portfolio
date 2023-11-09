import i18next from 'i18next';
import common_en from '../../../translations/en/common.json';
import common_es from '../../../translations/es/common.json';

const setupAppTranslator = (): void => {
  i18next.init({
    lng: window.localStorage.defaultLanguaje,
    debug: true,
    resources: {
      en: {
        common: common_en,
      },
      es: {
        common: common_es,
      },
    },
  });
  const navigatorLanguage = navigator.language;
  switch (true) {
    case Boolean(window.localStorage.defaultLanguaje):
      break;
    case navigatorLanguage.indexOf('es') === 0:
      i18next.changeLanguage('es');
      window.localStorage.setItem('defaultLanguaje', 'es');
      break;
    case navigatorLanguage.indexOf('en') === 0:
      i18next.changeLanguage('en');
      window.localStorage.setItem('defaultLanguaje', 'en');
      break;
    default:
      i18next.changeLanguage('en');
      window.localStorage.setItem('defaultLanguaje', 'en');
  }
};
export default setupAppTranslator;
