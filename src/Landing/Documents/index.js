import xs from 'xstream'
import isolate from '@cycle/isolate'
import {div, h1} from '@cycle/dom'
import style from './style.css'

function Documents (sources) {
  return {
    DOM: xs.of(
      div({}, [
        h1('.myh1', 'Documents pag___')
      ])
    )
  }
}

export default sources => isolate(Documents)(sources)
