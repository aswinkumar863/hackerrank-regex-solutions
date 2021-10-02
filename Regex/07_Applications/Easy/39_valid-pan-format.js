function processData(input) {
    let [n, ...s] = input.split('\n')
    s.forEach(i => {
        console.log(i.match(/^[A-Z]{5}[0-9]{4}[A-Z]$/) ? 'YES' : 'NO')
    })
}
