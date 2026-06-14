/* ==========================================================================
   PROJETO AGROPÓLLEN - CONTROLE DINÂMICO DO PORTAL
   ARQUIVO: main.js
   DESCRIÇÃO: Inicializa os recursos de acessibilidade (ajuste de zoom e contraste),
             gerencia a exibição do widget de recomendação por cidade e o menu mobile.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  inicializarAcessibilidade();
  inicializarRecomendador();
  inicializarMenuMobile();
});

/* ============================================================================
   ACESSIBILIDADE: GERENCIAMENTO DE CONTRASTE E ZOOM
   ============================================================================ */
function inicializarAcessibilidade() {
  const corpoPagina = document.body;
  const raizHtml = document.documentElement;
  
  // Elementos da barra de acessibilidade
  const botaoTema = document.getElementById("botao-alternar-tema");
  const botaoDiminuir = document.getElementById("botao-diminuir-fonte");
  const botaoAumentar = document.getElementById("botao-aumentar-fonte");
  const indicadorEscala = document.getElementById("indicador-escala-fonte");

  // Recupera configurações salvas ou adota o padrão inicial
  let temaSalvo = localStorage.getItem("agropollen-tema-v4") || "claro";
  let escalaSalva = parseFloat(localStorage.getItem("agropollen-escala-fonte-v4") || "1.0");

  // Aplica a classe de contraste escuro no elemento raiz e no body
  const aplicarTema = (novoTema) => {
    if (novoTema === "escuro") {
      corpoPagina.classList.add("tema-escuro");
      raizHtml.classList.add("tema-escuro");
    } else {
      corpoPagina.classList.remove("tema-escuro");
      raizHtml.classList.remove("tema-escuro");
    }
    
    // Atualiza o texto descritivo do botão de alternância
    if (botaoTema) {
      const textoBotao = botaoTema.querySelector(".texto-botao-tema") || botaoTema;
      textoBotao.textContent = novoTema === "escuro" ? "Tema Claro" : "Tema Escuro";
    }
    localStorage.setItem("agropollen-tema-v4", novoTema);
  };

  // Define a escala de fonte dinâmica ajustando a propriedade CSS --escala-letra
  const aplicarEscala = (novaEscala) => {
    raizHtml.style.setProperty("--escala-letra", novaEscala);
    if (indicadorEscala) {
      indicadorEscala.textContent = `${Math.round(novaEscala * 100)}%`;
    }
    localStorage.setItem("agropollen-escala-fonte-v4", novaEscala);
  };

  // Inicializa o estado visual salvo
  aplicarTema(temaSalvo);
  aplicarEscala(escalaSalva);

  // Listener para alternância de tema
  botaoTema?.addEventListener("click", () => {
    const modoEscuro = corpoPagina.classList.contains("tema-escuro");
    aplicarTema(modoEscuro ? "claro" : "escuro");
  });

  // Listener para redução do tamanho da fonte (limite de 80%)
  botaoDiminuir?.addEventListener("click", () => {
    if (escalaSalva > 0.8) {
      escalaSalva = parseFloat((escalaSalva - 0.1).toFixed(1));
      aplicarEscala(escalaSalva);
    }
  });

  // Listener para aumento do tamanho da fonte (limite de 140%)
  botaoAumentar?.addEventListener("click", () => {
    if (escalaSalva < 1.4) {
      escalaSalva = parseFloat((escalaSalva + 0.1).toFixed(1));
      aplicarEscala(escalaSalva);
    }
  });
}

/* ============================================================================
   RECOMENDADOR DE ESPÉCIES POR CIDADE
   ============================================================================ */
function inicializarRecomendador() {
  const botoesCidades = document.querySelectorAll(".botao-cidade");
  const listaAbelhas = document.getElementById("lista-abelhas");
  const listaSaf = document.getElementById("lista-saf");
  const painelDetalhes = document.getElementById("painel-detalhes");
  const tituloDetalhe = document.getElementById("titulo-detalhes");
  const textoDetalhe = document.getElementById("texto-detalhes");

  if (!listaAbelhas || !listaSaf) return;

  // Renderiza um card individual de espécie recomendada
  const criarCardEspecie = (dadosEspecie, emoji) => {
    const elementoLi = document.createElement("li");
    elementoLi.className = "item-recomendacao";
    elementoLi.setAttribute("role", "button");
    elementoLi.setAttribute("tabindex", "0");

    // Conteúdo HTML do item da recomendação
    elementoLi.innerHTML = `
      <div class="icone-especie" aria-hidden="true">${emoji}</div>
      <div class="detalhes-especie">
        <span class="nome-especie">${dadosEspecie.nome}</span>
        <span class="nome-cientifico-especie">${dadosEspecie.nomeCientifico}</span>
        <span class="resumo-especie">${dadosEspecie.descricao}</span>
        <span class="clique-detalhes">Clique para detalhes</span>
      </div>
    `;

    // Exibe detalhes específicos do manejo do item clicado
    const acaoClique = () => {
      document.querySelectorAll(".item-recomendacao").forEach(item => item.classList.remove("ativo"));
      elementoLi.classList.add("ativo");
      
      tituloDetalhe.textContent = `💡 Detalhes de Manejo: ${dadosEspecie.nome}`;
      textoDetalhe.textContent = dadosEspecie.detalhes;
      
      // Feedback tátil por acessibilidade
      painelDetalhes.focus();
    };

    elementoLi.addEventListener("click", acaoClique);
    elementoLi.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        acaoClique();
      }
    });

    return elementoLi;
  };

  // Carrega os dados correspondentes à cidade a partir do banco de dados estático
  const carregarDadosCidade = (idCidade) => {
    // bancoDeDadosCidades é importado globalmente a partir de dados-cidades.js
    const cidadeEncontrada = bancoDeDadosCidades.find(cid => cid.id === idCidade);
    if (!cidadeEncontrada) return;

    listaAbelhas.innerHTML = "";
    listaSaf.innerHTML = "";

    // Preenche a lista de abelhas recomendadas
    cidadeEncontrada.abelhas.forEach(b => {
      listaAbelhas.appendChild(criarCardEspecie(b, "🐝"));
    });

    // Preenche a lista de culturas para sistemas agroflorestais (SAF)
    cidadeEncontrada.saf.forEach(s => {
      listaSaf.appendChild(criarCardEspecie(s, "🌱"));
    });

    // Reseta o painel de dica de leitura
    tituloDetalhe.textContent = "💡 Dica de Leitura:";
    textoDetalhe.textContent = "Clique em cima de qualquer uma das abelhas ou plantas na lista acima para abrir nesta caixa os segredos práticos de plantio, manejo ecológico e simbiose!";
  };

  // Vincula evento de seleção nas abas de cidades
  botoesCidades.forEach(botao => {
    botao.addEventListener("click", (evento) => {
      botoesCidades.forEach(b => b.classList.remove("ativo"));
      evento.currentTarget.classList.add("ativo");
      
      const cidadeSelecionada = evento.currentTarget.getAttribute("data-cidade");
      carregarDadosCidade(cidadeSelecionada);
    });
  });

  // Cidade inicial padrão (Paranaguá)
  carregarDadosCidade("paranagua");
}

/* ============================================================================
   MENU MOBILE HAMBÚRGUER
   ============================================================================ */
function inicializarMenuMobile() {
  const botaoMenu = document.getElementById("botao-menu");
  const menuNavegacao = document.querySelector(".menu-navegacao");

  if (!botaoMenu || !menuNavegacao) return;

  botaoMenu.addEventListener("click", () => {
    const aberto = botaoMenu.getAttribute("aria-expanded") === "true";
    botaoMenu.setAttribute("aria-expanded", !aberto);
    menuNavegacao.classList.toggle("aberto");
    botaoMenu.classList.toggle("ativo");
  });

  // Fecha o menu de navegação ao selecionar qualquer link de âncora
  menuNavegacao.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      botaoMenu.setAttribute("aria-expanded", "false");
      menuNavegacao.classList.remove("aberto");
      botaoMenu.classList.remove("ativo");
    });
  });
}
