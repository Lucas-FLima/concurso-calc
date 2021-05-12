function atualizarNota(materia, nota) {
    nota = parseInt(nota);
    if (materia === "portugues")
        port = nota;
    else if (materia === "fisica")
        fis = nota;
    else if (materia === "quimica")
        qui = nota;
    else if (materia === "matematica")
        mat = nota;
    else if (materia === "geografia")
        geo = nota;
    else if (materia === "historia")
        his = nota;
    else if (materia === "ingles")
        ing = nota;
    else if (materia === "redacao")
        red = nota;
    document.getElementById("media").innerHTML = "Média: " + parseFloat(media(port, fis, qui, mat, geo, his, ing, red).toFixed(2))
}

function media(p, f, q, m, g, h, i) {
    return ((p * 10 + (f * 25) / 3 + (q * 25) / 3 + m * 10 + (g * 25) / 3 + (h * 25) / 3 + (i * 25) / 3) / 9)

}

var port = 0;
var fis = 0;
var qui = 0;
var mat = 0;
var geo = 0;
var his = 0;
var ing = 0;
var red = null;
