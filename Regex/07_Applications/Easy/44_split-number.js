function processData(input) {
    let [n, ...s] = input.split('\n')
    s.forEach(i => {
        console.log(i.replace(
            /(\d{1,3})( |-)(\d{1,3})\2(\d{4,10})/,
            'CountryCode=$1,LocalAreaCode=$3,Number=$4'
        ))
    })
}
