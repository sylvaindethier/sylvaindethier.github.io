import { defaultLocale, supportedLocales } from '../../config/locales'
import { firstMatch } from '../utils/browser-languages'

// best locale from browser firstMatch or default
const bestLocale = firstMatch(supportedLocales) || defaultLocale
const hasLocaleSupport = locale => supportedLocales.includes(locale)

export {
  defaultLocale,
  bestLocale,
  supportedLocales,
  hasLocaleSupport
}
