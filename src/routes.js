// Components
import App from './components/App'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

// locales
import { bestLocale, hasLocaleSupport } from './locales/config'
import { loadLocale } from './locales/actions'

const bestLocalePath = `/${bestLocale}`
const createOnEnterLocale = ({ dispatch }) =>
  (nextState, replace, terminate) => {
    // check if locale param is supported, replace w/ best locale otherwise
    const locale = nextState.params.locale
    if (!hasLocaleSupport(locale)) {
      replace(bestLocalePath)
      terminate()
    } else {
      dispatch(loadLocale(locale))
      .then(terminate())
    }
  }

// @TODO: Consider translating Route path
const pageRoutes = [
  // <Route path='about' component={About} />
  { path: 'about', component: About },
  // <Route path='*' component={NotFound} />
  { path: '*', component: NotFound }
]

const createRoutes = (store) => (
  {
    // <Route path='/' component={App}>
    path: '/',
    component: App,
    // <IndexRedirect to={`/${bestLocale}`} />
    indexRoute: {
      onEnter: (nextState, replace) => { replace(bestLocalePath) }
    },
    childRoutes: [{
      // <Route path=':locale'>
      path: ':locale',
      // <IndexRoute component={Home} />
      indexRoute: { component: Home },
      onEnter: createOnEnterLocale(store),
      childRoutes: pageRoutes
    }]
  }
)

export default createRoutes
