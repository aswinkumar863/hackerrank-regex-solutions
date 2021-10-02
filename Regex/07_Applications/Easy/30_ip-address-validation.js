function processData(input) {
    let [n, ...ips] = input.split('\n')
    ips.forEach(ip => {
        if (ip.match(/^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/)) {
            console.log('IPv4')
        } else if (ip.match(/^([a-f0-9:]+:+)+[a-f0-9]+$/)) {
            console.log('IPv6')
        } else {
            console.log('Neither')
        }
    })
}
