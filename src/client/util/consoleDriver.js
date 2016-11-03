export default msg$ => msg$.addListener({
	next: x => console.log(`CD: ${JSON.stringify(x)}`),
	error: err => { /* handle errors */ },
	complete: () => { /* the stream ended */ },
})
