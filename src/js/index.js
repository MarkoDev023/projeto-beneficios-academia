const botoes = document.querySelectorAll(".botao");
const motivos = document.querySelectorAll(".motivos");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarMotivo();

		botao.classList.add("selecionado");
		motivos[indice].classList.add("selecionado");
	});
});

function desselecionarMotivo() {
	const motivosSelecionado = document.querySelector(".motivos.selecionado");
	motivosSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
