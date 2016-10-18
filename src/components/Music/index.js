import xs from 'xstream'
import isolate from '@cycle/isolate'
import {div, h1} from '@cycle/dom'

function Music (sources) {
  return {
    DOM: xs.of(
      div({}, [
        h1('.login', 'Music page...12')
      ])
    )
  }
}

export default sources => isolate(Music)(sources)
