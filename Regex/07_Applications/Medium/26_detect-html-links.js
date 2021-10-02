function processData(input) {
    let matches = input.matchAll(/<a href="(.*?)".*?>(?: )?([\w ,./]*)(?=<\/)/g)
    Array.from(matches).forEach(match => {
        console.log(match[1] + ',' + match[2])
    })
}
