function processData(input) {
    let matches = input.matchAll(/hackerrank/gi)
    console.log(Array.from(matches).length)
}
