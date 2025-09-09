import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.profile": "Profile",
      "nav.axios": "Axios Demo",
      "nav.i18n": "Languages",
      
      // Welcome messages
      "welcome.title": "Welcome to React i18n Demo!",
      "welcome.subtitle": "Experience multilingual support with i18next",
      "welcome.description": "This demo showcases internationalization features including language switching, dynamic translations, and browser language detection.",
      
      // Language switcher
      "language.current": "Current Language",
      "language.switch": "Switch Language",
      "language.english": "English",
      "language.spanish": "Spanish",
      
      // Features
      "features.title": "i18next Features Demonstrated",
      "features.detection": "Automatic Language Detection",
      "features.detection.desc": "Detects user's preferred language from browser settings",
      "features.switching": "Dynamic Language Switching",
      "features.switching.desc": "Change languages without page reload",
      "features.pluralization": "Smart Pluralization",
      "features.pluralization.desc": "Handles plural forms correctly for different languages",
      "features.interpolation": "Variable Interpolation",
      "features.interpolation.desc": "Insert dynamic values into translated strings",
      
      // Demo content
      "demo.greeting": "Hello, {{name}}!",
      "demo.items": "You have {{count}} item",
      "demo.items_plural": "You have {{count}} items",
      "demo.date": "Today is {{date}}",
      "demo.time": "Current time: {{time}}",
      
      // Buttons
      "button.increment": "Add Item",
      "button.decrement": "Remove Item",
      "button.reset": "Reset Count",
      
      // Status messages
      "status.loading": "Loading translations...",
      "status.error": "Error loading translations",
      "status.success": "Language changed successfully!",
      
      // Footer
      "footer.powered": "Powered by i18next and React",
      "footer.languages": "Supports {{count}} language",
      "footer.languages_plural": "Supports {{count}} languages"
    }
  },
  es: {
    translation: {
      // Navigation
      "nav.home": "Inicio",
      "nav.profile": "Perfil",
      "nav.axios": "Demo Axios",
      "nav.i18n": "Idiomas",
      
      // Welcome messages
      "welcome.title": "¡Bienvenido al Demo de React i18n!",
      "welcome.subtitle": "Experimenta el soporte multiidioma con i18next",
      "welcome.description": "Esta demostración muestra las características de internacionalización incluyendo cambio de idioma, traducciones dinámicas y detección automática del idioma del navegador.",
      
      // Language switcher
      "language.current": "Idioma Actual",
      "language.switch": "Cambiar Idioma",
      "language.english": "Inglés",
      "language.spanish": "Español",
      
      // Features
      "features.title": "Características de i18next Demostradas",
      "features.detection": "Detección Automática de Idioma",
      "features.detection.desc": "Detecta el idioma preferido del usuario desde la configuración del navegador",
      "features.switching": "Cambio Dinámico de Idioma",
      "features.switching.desc": "Cambia idiomas sin recargar la página",
      "features.pluralization": "Pluralización Inteligente",
      "features.pluralization.desc": "Maneja formas plurales correctamente para diferentes idiomas",
      "features.interpolation": "Interpolación de Variables",
      "features.interpolation.desc": "Inserta valores dinámicos en cadenas traducidas",
      
      // Demo content
      "demo.greeting": "¡Hola, {{name}}!",
      "demo.items": "Tienes {{count}} artículo",
      "demo.items_plural": "Tienes {{count}} artículos",
      "demo.date": "Hoy es {{date}}",
      "demo.time": "Hora actual: {{time}}",
      
      // Buttons
      "button.increment": "Agregar Artículo",
      "button.decrement": "Quitar Artículo",
      "button.reset": "Reiniciar Contador",
      
      // Status messages
      "status.loading": "Cargando traducciones...",
      "status.error": "Error al cargar traducciones",
      "status.success": "¡Idioma cambiado exitosamente!",
      
      // Footer
      "footer.powered": "Desarrollado con i18next y React",
      "footer.languages": "Soporta {{count}} idioma",
      "footer.languages_plural": "Soporta {{count}} idiomas"
    }
  }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    
    // Language detection options
    detection: {
      // Order of language detection methods
      order: ['localStorage', 'navigator', 'htmlTag'],
      
      // Cache user language selection
      caches: ['localStorage'],
      
      // Don't lookup from path, subdomain, etc.
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    },
    
    // Fallback language if detection fails
    fallbackLng: 'en',
    
    // Debug mode (disable in production)
    debug: import.meta.env.DEV,
    
    // Interpolation options
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    
    // React options
    react: {
      // Wait for translation to be loaded before rendering
      useSuspense: false,
    },
  });

export default i18n;
