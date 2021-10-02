function processData(input) {
    let [n, ...lines] = input.split('\n')
    let [t, ...words] = lines.splice(+n)

    lines = lines.join('\n')

    words.forEach(word => {
        let matches = lines.matchAll(new RegExp('((?<=\\W)|^)' + word + '((?=\\W)|$)', 'g'))
        console.log(Array.from(matches).length)
    })
}
