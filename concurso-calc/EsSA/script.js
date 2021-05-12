function atualizarNotaEsa(materia, nota) {
    nota = parseInt(nota);
    if (materia === "portugues")
        port = nota;
    else if (materia === "matematica")
        mat = nota;
    else if (materia === "geografia")
        geo = nota;
    else if (materia === "historia")
        his = nota;
    else if (materia === "ingles")
        ing = nota;
    document.getElementById("mediaEsa").innerHTML = "Média: " + parseFloat(mediaEsa(port, mat, geo, his, ing).toFixed(2))
}

function mediaEsa(p, m, g, h, i) {
        return (((((p * 50) / 7) + ((m * 50) / 7) + ((((g * 50) / 3) + ((h * 50) / 3)) / 2) + (i * 10)) / 4));
}

var port = 0;
var mat = 0;
var geo = 0;
var his = 0;
var ing = 0;