function atualizarNotaEear(materia, nota) {
    nota = parseInt(nota);
    if (materia === "portugues")
        port = nota;
    else if (materia === "fisica")
        fis = nota;
    else if (materia === "matematica")
        mat = nota;
    else if (materia === "ingles")
        ing = nota;
    document.getElementById("mediaEear").innerHTML = "Média: " + parseFloat(mediaEear(port, mat, fis, ing).toFixed(2))
}

function mediaEear(p, m, f, i) {
        return (((p*25/6)+(m*25/6)+(f*25/6)+(i*25/6))/4)
}

var port = 0;
var fis = 0;
var mat = 0;
var ing = 0;

alert("Essa página foi criada para o cálculo dos cursos CFS 1 e CFS 2.");