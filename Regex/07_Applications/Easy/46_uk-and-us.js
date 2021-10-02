function processData(input) {
    let [n, ...lines] = input.split('\n')
    let [t, ...words] = lines.splice(+n)

    lines = lines.join('')

    words.forEach(word => {
        let matches = lines.matchAll(new RegExp(word.slice(0, -2) + '[sz]e\\b', 'g'))
        console.log(Array.from(matches).length)
    })
}
