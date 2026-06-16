const formulario = document.querySelector('form');
const areacomentarios = document.getElementById('areacomentarios');


let listaComentarios = JSON.parse(localStorage.getItem('comentariosSalvos')) || [];


function renderizarComentarios() {
    areacomentarios.innerHTML = ''; 

   
    listaComentarios.forEach(function(comentario) {
        const novoComentario = `
            <div class="comentario-postado" style="border-left: 4px solid green; margin-bottom: 15px; padding-left: 10px; color: black;">
                <strong>${comentario.nome}</strong>
                <p>${comentario.mensagem}</p>
            </div>
        `;
        areacomentarios.innerHTML += novoComentario;
    });
}


renderizarComentarios();


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nomeTorcedor = document.getElementById('nome').value;
    const mensagemTorcedor = document.getElementById('mensagem').value;


    const novoObjetoComentario = {
        nome: nomeTorcedor,
        mensagem: mensagemTorcedor
    };

    
    listaComentarios.push(novoObjetoComentario);

    
    localStorage.setItem('comentariosSalvos', JSON.stringify(listaComentarios));

    
    renderizarComentarios();

    
    formulario.reset();
});