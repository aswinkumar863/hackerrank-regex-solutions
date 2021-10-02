function processData(input) {
    let allTags = input.matchAll(/<(\w*)(\b.*?)>/g)

    let tags = {}
    Array.from(allTags).forEach(tagMatch => {
        tags[tagMatch[1]] = tags[tagMatch[1]] || {}

        let allAttrs = tagMatch[2].matchAll(/\b(\w*)=["']/g)
        Array.from(allAttrs).forEach(attrMatch => {
            tags[tagMatch[1]][attrMatch[1]] = attrMatch[1]
        })
    })

    Object.keys(tags).sort().forEach(tag => {
        console.log(tag + ':' + Object.keys(tags[tag]).sort().join(','))
    })
}
