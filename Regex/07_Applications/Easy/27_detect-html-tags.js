function processData(input) {
    let matches = input.matchAll(/<(\w*)\b.*?>/g)
    let results = Array.from(matches).map(match => match[1])
    console.log(Array.from(new Set(results)).sort().join(';'))
}
