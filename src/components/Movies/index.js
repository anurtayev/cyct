import xs from 'xstream'
import isolate from '@cycle/isolate'
import {div, h1} from '@cycle/dom'

function Movies (sources) {
  return {
    DOM: xs.of(
      div({}, [
        h1('.login', 'Movies page...12')
      ])
    )
  }
}

export default sources => isolate(Movies)(sources)
