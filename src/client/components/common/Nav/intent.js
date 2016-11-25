export default ({
    DOM
}) => {
    return {
        click$: DOM.select('.Nav').events('click')
    }
}
