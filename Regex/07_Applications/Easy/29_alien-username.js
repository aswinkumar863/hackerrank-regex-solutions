function processData(input) {
    let [n, ...s] = input.split('\n')
    s.forEach(i => {
        console.log(i.match(/^[_.][0-9]+[a-z]*_?$/i) ? 'VALID' : 'INVALID')
    })
}
