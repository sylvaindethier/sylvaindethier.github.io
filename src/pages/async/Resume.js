import Loadable from 'react-loadable'
import path from 'path'
import LoadingComponent from './Loading'

const Resume = Loadable({
  loader: () => import('../Resume'),
  LoadingComponent,
  // optional options
  serverSideRequirePath: path.join(__dirname, '../Resume'),
  webpackRequireWeakId: () => require.resolveWeak('../Resume')
})

export default Resume
