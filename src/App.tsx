import React, { useEffect } from 'react';
import './App.scss';
import { Router, Route } from 'wouter';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

function App() {
  useEffect(() => {});
  const [t, i18n] = useTranslation('common');
  const handleButtonClick = () => {
    console.log(i18n.language);
    switch (i18n.language) {
      case 'es':
        i18n.changeLanguage('en');
        window.localStorage.setItem('defaultLanguaje', 'en');
        break;
      case 'en':
        i18n.changeLanguage('es');
        window.localStorage.setItem('defaultLanguaje', 'es');
        break;
    }
  };
  return (
    <div>
      <Router base='/ex1'>
        <Route path='/a'>
          <h1>{t('example')}</h1>
          <button onClick={handleButtonClick}>{t('change_languaje')}</button>
        </Route>
      </Router>
    </div>
  );
}

export default App;
