function processData(input) {
    let [n, ...lines] = input.split('\n')
    let [t, ...words] = lines.splice(+n)

    lines = lines.join('\n')

    words.forEach(word => {
        let matches = lines.matchAll(new RegExp('[a-zA-Z1-9_]+' + word + '[a-zA-Z1-9_]+', 'g'))
        console.log(Array.from(matches).length)
    })
}
