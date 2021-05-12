function atualizarNotaAfa(materia, nota) {
    nota = parseInt(nota);
    if (materia === "portugues")
        port = nota;
    else if (materia === "fisica")
        fis = nota;
    else if (materia === "matematica")
        mat = nota;
    else if (materia === "ingles")
        ing = nota;
    else if (materia === "redacao")
        red = nota;
    document.getElementById("mediaAfa").innerHTML = "Média: " + parseFloat(mediaAfa(port, mat, fis, ing, red).toFixed(2))
}

function mediaAfa(p, m, f, i, red) {
    if (red === null)
        return ((((p / 16) + (m / 16) + (f / 16) + (i / 16)) * 100) / 4)
    else    
        return (((((p / 16) + (m / 16) + (f / 16) + (i / 16)) * 100) + red) / 5)
}

var port = 0;
var fis = 0;
var qui = 0;
var mat = 0;
var geo = 0;
var his = 0;
var ing = 0;
var red = null;