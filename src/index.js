import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'lib/router'
import { AppRouter } from 'lib/router'
import DevTools from 'containers/DevTools'

render(
  <Provider store={ store }>
    <div>
      { AppRouter }
      <DevTools />
    </div>
  </Provider>
  , document.getElementById('root')
)
