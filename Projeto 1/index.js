const path = require('path');
const fn = require('./functions');
const caminho = path.join(__dirname, '..', 'legendas')
const simbolos = [
    '.', '?', '-', '*', '"', '♪', '_', '<i>', '</i>', '\r',
    '[', ']', '(', ')',
]
const mesclarConteudos = array => array.join(' ')
const separarPorLinhas = todoConteudo => todoConteudo.split('\n')
const separarPorPalavras = todoConteudo => todoConteudo.split(' ')



fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))
    .then(fn.lerArquivos)
    .then(mesclarConteudos)
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosSeIncluir('-->'))
    .then(fn.removerElementosSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(mesclarConteudos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosSeApenasNumero)
    .then(fn.agruparPalavras)
    .then(fn.ordenarPorAtribNumerico('qtde', 'desc'))
    .then(console.log)