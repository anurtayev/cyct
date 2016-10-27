export default domSource => {
	return {
		buttonClicks$: domSource.select('.bigbutton').events('click')
			.map(ev => 1)
	}
}
