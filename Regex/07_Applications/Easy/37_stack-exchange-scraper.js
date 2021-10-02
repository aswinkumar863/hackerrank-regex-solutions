function processData(input) {
    let matches = input.matchAll(/(?:<a href="\/questions\/(\d+)\/.*?>|relativetime">)(?:\s+)?([^<]*)(?=<\/)/gm)
    let results = Array.from(matches)
    for (let i=0; i < results.length ; i+=2) {
        console.log([results[i][1], results[i][2], results[i+1][2]].join(';'))
    }
}
