export default domSource => ({
	nav$: domSource
		.select('.menushka')
		.events('click')
		.map(ev => '/admin').debug(),
	msg1$: domSource
		.select('.event1')
		.events('click')
    .map(e=>({
      messageType: 'cyct.msg1',
      message: 'ahem'
    }))
})
