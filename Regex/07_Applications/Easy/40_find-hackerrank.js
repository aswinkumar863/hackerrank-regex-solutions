function processData(input) {
    let [n, ...s] = input.trim().split('\n')
    s.forEach(i => {
        let [, start = '', end = ''] = i.match(/(.)*hackerrank(.)*/) || []
        console.log([[0, 1], [2, -1]][start.length][end.length])
    })
}
