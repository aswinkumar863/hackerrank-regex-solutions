function processData(input) {
    let [n, ...s] = input.split('\n')
    s.forEach(i => {
        console.log(i.match(/\([+\-]?(90(\.0+)?|[1-8]\d(\.\d+)?|\d(\.\d+)?), [+\-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{2}(\.\d+)?|\d(\.\d+)?)\)/) ? 'Valid' : 'Invalid')
    })
}
