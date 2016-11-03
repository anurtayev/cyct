export default domSource => ({
	nav$: domSource
		.select('.menushka')
		.events('click')
		.map(ev => '/admin').debug()
})
