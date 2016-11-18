import xs from 'xstream'

export default (domSource, children) => ({
    nav$: domSource
        .select('.menushka')
        .events('click')
        .map(ev => '/admin').debug(),
    socket$: xs.merge(
        children.msgButton1.click$.map(e => ({
            messageType: 'cyct.msg1',
            message: 'ahem'
        })),
				children.msgButton2.click$.map(e => ({
            messageType: 'cyct.msg2',
            message: 'stop noch, podozhdi. podozhdi ne uhodi...'
        }))
    ).debug()
})
