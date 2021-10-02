function processData(input) {
    let [n, ...lines] = input.split('\n')
    let [t, ...words] = lines.splice(+n)

    lines = lines.join('\n')

    words.forEach(word => {
        let matches = lines.matchAll(new RegExp(word.replace(/ou?r/, 'ou?r') + '\\b', 'g'))
        console.log(Array.from(matches).length)
    })
}
