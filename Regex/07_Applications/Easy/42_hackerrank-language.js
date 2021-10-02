function processData(input) {
    let [n, ...s] = input.split('\n')
    let regex = new RegExp('^[0-9]*\\s\\b(C|CPP|JAVA|PYTHON|PERL|PHP|RUBY|CSHARP|HASKELL|CLOJURE|BASH|SCALA|ERLANG|CLISP|LUA|BRAINFUCK|JAVASCRIPT|GO|D|OCAML|R|PASCAL|SBCL|DART|GROOVY|OBJECTIVEC)\\b$', 'g')
    s.forEach(i => {
        console.log(i.match(regex) ? 'VALID' : 'INVALID')
    })
}
