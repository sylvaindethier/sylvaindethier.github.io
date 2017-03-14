import Loadable from 'react-loadable'
import path from 'path'
import LoadingComponent from './Loading'

const About = Loadable({
  // loader: () => fakeDelay(5000).then(() => import('../pages/About')),
  loader: () => import('../About'),
  LoadingComponent,
  // optional options
  serverSideRequirePath: path.join(__dirname, '../About'),
  webpackRequireWeakId: () => require.resolveWeak('../About')
})

export default About
