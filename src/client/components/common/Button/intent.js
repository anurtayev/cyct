export default domSource => {
    return {
        click$: domSource.select('.bigbutton').events('click')
    }
}
