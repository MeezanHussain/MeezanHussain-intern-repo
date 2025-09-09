import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const I18nDemo = () => {
  const { t, i18n } = useTranslation();
  const [itemCount, setItemCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userName] = useState('Focus Bear User');

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString(i18n.language, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString(i18n.language);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {t('welcome.title')}
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          {t('welcome.subtitle')}
        </p>
        <p className="text-gray-500">
          {t('welcome.description')}
        </p>
      </div>

      {/* Language Switcher */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          {t('language.switch')}
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-gray-700 font-medium">
            {t('language.current')}: <span className="text-blue-600">{i18n.language === 'en' ? t('language.english') : t('language.spanish')}</span>
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => changeLanguage('en')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                i18n.language === 'en' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-50'
              }`}
            >
              🇺🇸 {t('language.english')}
            </button>
            <button
              onClick={() => changeLanguage('es')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                i18n.language === 'es' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-50'
              }`}
            >
              🇪🇸 {t('language.spanish')}
            </button>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Interpolation Demo */}
        <div className="p-6 bg-green-50 rounded-lg border border-green-200">
          <h3 className="text-xl font-semibold mb-4 text-green-800">
            Variable Interpolation
          </h3>
          <div className="space-y-3">
            <p className="text-lg text-green-700">
              {t('demo.greeting', { name: userName })}
            </p>
            <p className="text-green-600">
              {t('demo.date', { date: formatDate(currentTime) })}
            </p>
            <p className="text-green-600">
              {t('demo.time', { time: formatTime(currentTime) })}
            </p>
          </div>
        </div>

        {/* Pluralization Demo */}
        <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
          <h3 className="text-xl font-semibold mb-4 text-purple-800">
            Smart Pluralization
          </h3>
          <div className="space-y-4">
            <p className="text-lg text-purple-700">
              {t('demo.items', { count: itemCount })}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setItemCount(Math.max(0, itemCount - 1))}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                {t('button.decrement')}
              </button>
              <button
                onClick={() => setItemCount(itemCount + 1)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                {t('button.increment')}
              </button>
              <button
                onClick={() => setItemCount(0)}
                className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                {t('button.reset')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          {t('features.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🌍</span>
            <div>
              <h4 className="font-semibold text-gray-800">{t('features.detection')}</h4>
              <p className="text-gray-600 text-sm">{t('features.detection.desc')}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🔄</span>
            <div>
              <h4 className="font-semibold text-gray-800">{t('features.switching')}</h4>
              <p className="text-gray-600 text-sm">{t('features.switching.desc')}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">📝</span>
            <div>
              <h4 className="font-semibold text-gray-800">{t('features.pluralization')}</h4>
              <p className="text-gray-600 text-sm">{t('features.pluralization.desc')}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🔧</span>
            <div>
              <h4 className="font-semibold text-gray-800">{t('features.interpolation')}</h4>
              <p className="text-gray-600 text-sm">{t('features.interpolation.desc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-700 mb-2">
          {t('footer.powered')}
        </p>
        <p className="text-blue-600 text-sm">
          {t('footer.languages', { count: Object.keys(i18n.options.resources).length })}
        </p>
      </div>
    </div>
  );
};

export default I18nDemo;
