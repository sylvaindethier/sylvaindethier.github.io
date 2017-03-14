import Loadable from 'react-loadable'
import path from 'path'
import LoadingComponent from './Loading'

const Contact = Loadable({
  loader: () => import('../Contact'),
  LoadingComponent,
  // optional options
  serverSideRequirePath: path.join(__dirname, '../Contact'),
  webpackRequireWeakId: () => require.resolveWeak('../Contact')
})

export default Contact
