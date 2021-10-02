function processData(input) {
    let matches = input.matchAll(/\/\/.*$|\/\*+[^*]*\*+\//gm)
    Array.from(matches).forEach(match => console.log(match[0].trim().replace(/^\s*/gm, '')))
}
