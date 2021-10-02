function processData(input) {
    let matches = input.matchAll(/^hi [^d].*/gmi)
    console.log(Array.from(matches).join('\n'))
}
