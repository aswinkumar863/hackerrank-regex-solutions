function processData(input) {
    let matches = input.matchAll(/[\w\.]+@(?:\w+\.)+\w+/g)
    let results = Array.from(matches).map(match => match[0])
    console.log([...new Set(results)].sort().join(';'))
}
