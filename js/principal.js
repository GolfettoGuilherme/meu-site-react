
function defineCopoCafe(){
    let numeroCafe = Math.floor((Math.random() * 10000) + 1);
    $("#contador-cafe").text(numeroCafe);
}

function defineContagemRepositorios(){
    let contagem = "XX"; 
    let urlGitHub = "https://api.github.com/users/GolfettoGuilherme/repos?per_page=100";
    $.get(urlGitHub, function(results){
        if(results){
            contagem = results.length;
            $("#contador-repositorios").text(contagem);
        }
    });
}