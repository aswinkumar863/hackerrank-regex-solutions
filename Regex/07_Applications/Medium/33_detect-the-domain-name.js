function processData(input) {
    let matches = input.matchAll(/https?:\/\/(ww[w2].)?([-\w.]+\.[a-z]+)/gi)
    let results = Array.from(matches).map(match => match[2])
    console.log([...new Set(results)].sort().join(';'))
}
