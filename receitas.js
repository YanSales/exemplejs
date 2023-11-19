// receitas.js

// Dados de exemplo (substitua com seus próprios dados)
const receitas = [
    {
        titulo: "Bolo de Chocolate",
        imagem: "caminho/para/bolo_chocolate.png",
        preparo: "Instruções de preparo do bolo de chocolate.",
        ingredientes: ["Farinha", "Açúcar", "Chocolate em pó", "Ovos", "Leite"]
    },
    {
        titulo: "Sopa de Legumes",
        imagem: "caminho/para/sopa_legumes.png",
        preparo: "Instruções de preparo da sopa de legumes.",
        ingredientes: ["Batata", "Cenoura", "Abobrinha", "Cebola", "Alho"]
    },
    // Adicione mais receitas conforme necessário
];

// Função para gerar a lista de ingredientes em HTML
function getListaIngredientes(ingredientes) {
    const listaHTML = `<ul>${ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}</ul>`;
    return listaHTML;
}

// Função para gerar o painel da receita em HTML
function getCard(receita) {
    return `
        <div class="card">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
                <h5 class="card-title">${receita.titulo}</h5>
                <div class="card-text">
                    ${getListaIngredientes(receita.ingredientes)}
                    <hr>
                    ${receita.preparo}
                </div>
            </div>
        </div>
    `;
}

// Função para preencher o catálogo de receitas na página
function preencheCatalogo() {
    const pnlCatalogo = document.getElementById('pnlCatalogo');

    const catalogoHTML = receitas.map(receita => getCard(receita)).join('');
    
    pnlCatalogo.innerHTML = catalogoHTML;
}
