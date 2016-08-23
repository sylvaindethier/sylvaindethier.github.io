/**
 * Gets the browser languages list
 * @return {Array}  The browser languages list
 */
export default function browserLanguages() {
  // cross browser window.navigator
  const navigator = window.navigator || window.clientInformation || {};

  // cross browser navigator.languages
  return navigator.languages || [
    navigator.userLanguage ||
    navigator.language ||
    navigator.browserLanguage ||
    navigator.systemLanguage
  ].map(lang => {
    // uppercase the second locale (lowercase in Safari)
    let locale = lang.split('-');
    return locale[1] ? `${locale[0]}-${locale[1].toUpperCase()}` : lang
  });
}

export function firstLanguage() {
  const languages = browserLanguages();
  return languages.length ? languages[0] : '';
}

export function firstLanguageOf(list, fallback = 'en-US') {
  const languages = browserLanguages();
  let index;
  // set the index if languages has some of the proposedLanguages
  languages.some((lang, i) => {
    if (list.includes(lang)) {
      index = i;
      return true;
    }
    return false;
  });
  return index !== undefined ? languages[index] : fallback;
};
