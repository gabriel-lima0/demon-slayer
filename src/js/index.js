// JavaScript

// OBJETIVO | ESCONDER UM CARTÃO E ATIVAR OUTRO

// PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de personagens
const listaSelecaoPersonagens = document.querySelectorAll(".personagem");

// PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPersonagens.forEach((personagem) => {
    personagem.addEventListener("click", () => {
        
        // PASSO 3 - remover a classe aberto só do cartão que tá aberto
        removerClassAberto();

        // PASSO 4 - ao clicar em um personagem da lista pegamos o id desse personagem para saber qual cartão abrir
        const { cartaoPersonagemParaAbrir, idPersonagemSelecionado } = idDoPersonagemSelecionadoDaLista(personagem);

        cartaoPersonagemParaAbrir.classList.add("aberto");
        // return idPersonagemSelecionado;

        // PASSO 5 - remover a classe ativo que marca o personagem selecionado na listagem
        removerClassAtivo();

        // PASSO 6 - adicinar a classe ativo no personagem selecionado na listagem
        adicionarClassAtivoPersonagemSelecionado(idPersonagemSelecionado);

    });
});

            // FUNCTIONS

 // PASSO 3 - remover a classe aberto só do cartão que tá aberto
function removerClassAberto() {
    const cartaoPersonagemAberto = document.querySelector(".aberto");
    cartaoPersonagemAberto.classList.remove("aberto");
}

// PASSO 4 - ao clicar em um personagem da lista pegamos o id desse personagem para saber qual cartão abrir
function idDoPersonagemSelecionadoDaLista(personagem) {
    const idPersonagemSelecionado = personagem.attributes.id.value;
    const idCartaoPersonagemParaAbrir = "cartao-" + idPersonagemSelecionado;
    const cartaoPersonagemParaAbrir = document.getElementById(
        idCartaoPersonagemParaAbrir
    );
    return { cartaoPersonagemParaAbrir, idPersonagemSelecionado };
}

// PASSO 5 - remover a classe ativo que marca o personagem selecionado na listagem
function removerClassAtivo() {
    const personagemAtivoNaListagem = document.querySelector(".ativo");
    personagemAtivoNaListagem.classList.remove("ativo");
}

// PASSO 6 - adicinar a classe ativo no personagem selecionado na listagem
function adicionarClassAtivoPersonagemSelecionado(idPersonagemSelecionado) {
    const personagemSelecionadoNaListagem = document.getElementById(
        idPersonagemSelecionado
    );
    personagemSelecionadoNaListagem.classList.add("ativo");
}