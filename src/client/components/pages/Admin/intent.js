import xs from 'xstream'

export default ({
    DOM
}) => ({
    nav$: DOM
        .select('.Admin.nav1')
        .events('click')
        .map(e => '/'),
    counter$: xs.merge(
        DOM
        .select('.Admin.inc')
        .events('click')
        .map(e => 1),
        DOM
        .select('.Admin.dec')
        .events('click')
        .map(e => -1)
    )
})
