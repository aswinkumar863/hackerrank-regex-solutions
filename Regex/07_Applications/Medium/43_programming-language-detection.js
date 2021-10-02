function processData(input) {
    if (input.match(/class\s[A-Z]\w+\s*{/g)) {
        console.log('Java')
    } else if (input.match(/main\(.*?\)[\s\n]*{/g)) {
        console.log('C')
    } else {
        console.log('Python')
    }
}
