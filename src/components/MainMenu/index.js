import xs from 'xstream'
import isolate from '@cycle/isolate'
import {
	div,
	h1,
	svg
} from '@cycle/dom'

function MainMenu(sources) {
	return {
		DOM: xs.of(
			div('#mainmenu', {
				style: {
					'border': '2px solid #73AD21',
					'border-radius': '25px',
					'width': '200px',
					'height': '150px',
					'margin': 'auto',
					'display': 'flex',
					'justify-content': 'center',
					'align-content': 'center',
					'text-align': 'center',
					'flex-direction': 'column'
				}
			}, [
				h1('#hm', {
					style: {
						color: 'red'
					}
				}, 'Menu1')
			])
		)
	}
}

export default sources => isolate(MainMenu)(sources)
