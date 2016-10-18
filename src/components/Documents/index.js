import xs from 'xstream'
import isolate from '@cycle/isolate'
import {div, h1} from '@cycle/dom'

function Documents (sources) {
  return {
    DOM: xs.of(
      div({}, [
        h1('.login', 'Documents page...12')
      ])
    )
  }
}

export default sources => isolate(Documents)(sources)
