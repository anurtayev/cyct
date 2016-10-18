export default msg$ => msg$.addListener({
	next: x => console.log(x),
	error: err => { /* handle errors */ },
	complete: () => { /* the stream ended */ },
})
