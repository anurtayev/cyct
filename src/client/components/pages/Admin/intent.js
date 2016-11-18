import xs from 'xstream'

export default (domSource, children) => ({
    nav$: children.nav1.click$.map(e => '/'),
    counter$: xs.merge(
        domSource
        .select('.inc')
        .events('click')
        .map(e => 1),
        domSource
        .select('.dec')
        .events('click')
        .map(e => -1)
    )
})
