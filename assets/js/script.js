const listaDeFilmes = document.querySelector(".listaDeFilmes");

function listarFilmes(colecaoDeFilmes) {
   listaDeFilmes.innerHTML = "";

   colecaoDeFilmes.forEach(function (filme) {
      const template = criarTemplate(filme);
      listaDeFilmes.appendChild(template);
   })
}
listarFilmes(filmes);

function criarTemplate(filme) {
   const li = document.createElement("li");
   li.innerHTML = `
   <figure>
      <img src="${filme.url}" alt="${filme.nome}">
   </figure>
   <h2>${filme.nome}</h2>
   `
   return li
}

function filtrarFilme(categoriaDoFilme) {
   const filmesFiltrados = filmes.filter(function (filme) {
      if (categoriaDoFilme == filme.categoria) {
         return filme
      }
   })
   listarFilmes(filmesFiltrados)
}

const secaoCategorias = document.querySelector(".secaoCategorias");

secaoCategorias.addEventListener('click', function (event) {
   event.preventDefault();
 
   const categoriaSelecionada = event.target.text
   if (categoriaSelecionada == "Todos") {
      listarFilmes(filmes)

   } else {
      filtrarFilme(categoriaSelecionada)
   }
})