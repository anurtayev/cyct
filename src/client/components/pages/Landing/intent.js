import xs from 'xstream'

export default (domSource, {msg1, msg2, nav1}) => ({
    nav$: nav1.click$.map(e => '/admin'),
    socket$: xs.merge(
        msg1.click$.map(e => ({
            messageType: 'cyct.msg1',
            message: 'ahem'
        })),
        msg2.click$.map(e => ({
            messageType: 'cyct.msg2',
            message: 'stop noch, podozhdi. podozhdi ne uhodi...'
        }))
    )
})
