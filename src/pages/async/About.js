import Loadable from 'react-loadable'
import path from 'path'
import LoadingComponent from './Loading'

// function fakeDelay (ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms)
//   })
// }

const About = Loadable({
  // loader: () => fakeDelay(5000).then(() => import('../About')),
  loader: () => import('../About'),
  LoadingComponent,
  // optional options
  serverSideRequirePath: path.join(__dirname, '../About'),
  webpackRequireWeakId: () => require.resolveWeak('../About')
})

export default About
