const path = require('path');
const fn = require('./functions');
const caminho = path.join(__dirname, '..', 'legendas')
const simbolos = [
    '.', '?', '-', '*', '"', '♪', '_', '<i>', '</i>', '\r',
    '[', ']', '(', ')'
]

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
    //.then(fn.separarTextoPor('/n'))
    .then(conteudos => conteudos.join('\n'))
    .then(todoConteudos => todoConteudos.split('\n'))
    .then(linhas => fn.removerSeVazio(linhas))
    .then(linhas => fn.removerElementosSeIncluir('-->')(linhas))
    .then(fn.removerElementosSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(console.log)