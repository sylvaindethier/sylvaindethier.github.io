/* eslint-disable */
import path from 'path'
import React from 'react'
import Loadable from 'react-loadable'
import fakeDelay from './fakeDelay'
import LoadingComponent from './Loading'

const LoadableExample = Loadable({
  loader: () => fakeDelay(5000).then(() => import('./Example')),
  LoadingComponent,
  // optional options...
  delay: 1000,
  serverSideRequirePath: path.join(__dirname, './Example'),
  webpackRequireWeakId: () => require.resolveWeak('./Example')
})

export default function Application() {
  return (
    <div>
      <h1>Hello World</h1>
      <LoadableExample/>
    </div>
  );
}
