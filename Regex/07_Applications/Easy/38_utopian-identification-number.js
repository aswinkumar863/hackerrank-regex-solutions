function processData(input) {
    let [n, ...s] = input.split('\n')
    s.forEach(i => {
        console.log(i.match(/^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}$/) ? 'VALID' : 'INVALID')
    })
}
