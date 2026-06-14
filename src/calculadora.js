/* ==========================================================================
   PROJETO AGROPÓLLEN - MOTOR DE CÁLCULO ECOLÓGICO
   ARQUIVO: calculadora.js
   DESCRIÇÃO: Gerencia as simulações ecológicas e calcula o impacto das caixas
             de abelhas nativas (reflorestamento assistido e polinização diária).
   ========================================================================== */

// Configurações de impacto ecológico por espécie de abelha
// Dados calibrados com base em relatórios da Embrapa Meio Ambiente e do ICMBio.
const configuracoesAbelhas = {
  jatai: {
    areaHectares: 1.2,
    visitasDiarias: 1500000
  },
  mandacaia: {
    areaHectares: 3.0,
    visitasDiarias: 1500000
  },
  guaraipo: {
    areaHectares: 3.8,
    visitasDiarias: 1200000
  },
  iraie: {
    areaHectares: 1.1,
    visitasDiarias: 1200000
  },
  tiuba: {
    areaHectares: 4.5,
    visitasDiarias: 2000000
  },
  tubuna: {
    areaHectares: 2.5,
    visitasDiarias: 3000000
  },
  mirim_quacu: {
    areaHectares: 0.8,
    visitasDiarias: 800000
  },
  manduri: {
    areaHectares: 2.0,
    visitasDiarias: 1000000
  },
  urucu_amarela: {
    areaHectares: 4.5,
    visitasDiarias: 1800000
  },
  bora: {
    areaHectares: 3.1,
    visitasDiarias: 2500000
  },
  mirim_preguica: {
    areaHectares: 0.5,
    visitasDiarias: 500000
  },
  mirim_droriana: {
    areaHectares: 0.5,
    visitasDiarias: 600000
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const formularioCalculadora = document.getElementById("formulario-impacto");
  const campoNomeUsuario = document.getElementById("calc-nome-usuario");
  const campoQuantidadeCaixas = document.getElementById("calc-caixas");
  const campoSelecaoEspecie = document.getElementById("calc-especie");
  
  const blocoResultadosAguardando = document.getElementById("resultados-aguardando");
  const blocoResultadosAtivos = document.getElementById("resultados-ativos");
  
  const textoBoasVindas = document.getElementById("resultados-boas-vindas");
  const elementoEstatisticaArvores = document.getElementById("valor-estat-arvores");
  const elementoEstatisticaArea = document.getElementById("valor-estat-area");
  const elementoEstatisticaFlores = document.getElementById("valor-estat-flores");
  
  const elementoTituloDica = document.getElementById("valor-titulo-dica");
  const elementoDescricaoDica = document.getElementById("valor-desc-dica");

  if (!formularioCalculadora) return;

  formularioCalculadora.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nomeUsuario = campoNomeUsuario.value.trim() || "Amigo da Natureza";
    const quantidadeCaixas = parseInt(campoQuantidadeCaixas.value) || 0;
    const textoEspecie = campoSelecaoEspecie.options[campoSelecaoEspecie.selectedIndex].text;
    const valorEspecie = campoSelecaoEspecie.value;

    if (quantidadeCaixas <= 0) {
      alert("Por favor, digite uma quantidade de caixas válida (maior que zero)!");
      return;
    }

    const dadosConfiguracao = configuracoesAbelhas[valorEspecie] || configuracoesAbelhas.jatai;

    // Cálculo das métricas ecológicas (Árvores, Hectares e Visitas de Polinização)
    const quantidadeArvores = quantidadeCaixas * 45;
    const totalHectares = (quantidadeCaixas * dadosConfiguracao.areaHectares).toFixed(1);
    const totalMetrosQuadrados = (quantidadeCaixas * dadosConfiguracao.areaHectares * 10000).toLocaleString("pt-BR");
    const totalFloresPolinizadas = quantidadeCaixas * dadosConfiguracao.visitasDiarias;

    // Formatação de milhar em português
    const floresFormatado = totalFloresPolinizadas.toLocaleString("pt-BR");

    // Renderiza a mensagem de boas-vindas personalizada
    textoBoasVindas.innerHTML = `🌳 Olá, <strong>${nomeUsuario}</strong>! Com suas <strong>${quantidadeCaixas} caixas de ${textoEspecie}</strong>, veja o impacto fantástico gerado na nossa Mata Atlântica paranaense:`;

    // Atualiza os painéis numéricos de resultados
    elementoEstatisticaArvores.textContent = `${quantidadeArvores} árvores`;
    elementoEstatisticaArea.textContent = `${totalHectares} ha (${totalMetrosQuadrados} m²)`;
    elementoEstatisticaFlores.textContent = `${floresFormatado} por dia`;

    // Define a dica pedagógica com base no tamanho do meliponário
    let tituloDica = "";
    let textoDica = "";

    if (quantidadeCaixas <= 5) {
      tituloDica = "# DICA DO CRISTIANO (Iniciante Ativo):";
      textoDica = `Excelente escolha para começar! Esse meliponário de ${quantidadeCaixas} caixa(s) é perfeito para quintais domiciliares e pomares pequenos. Suas abelhas vão garantir tomates, laranjas e tangerinas enormes em casa, além de preservarem a fauna e flora litorâneas locais sem perigo por não terem ferrão!`;
    } else if (quantidadeCaixas <= 20) {
      tituloDica = "# DICA DA MELISSA (Produtor Consorciado):";
      textoDica = `Um meliponário de médio porte fantástico com ${quantidadeCaixas} caixas! Ideal para produtores familiares que querem conciliar meliponicultura com sistemas de banana-terra e palmito pupunha. Coloque as caixas sob a sombra alta das árvores da Reserva Legal para protegê-las do vento frio da Baía de Antonina no inverno!`;
    } else {
      tituloDica = "# DICA DA ROBERTA (Protetora da Biosfera):";
      textoDica = `Incrível! Com ${quantidadeCaixas} caixas, você está estruturando um verdadeiro Polo Santuário Ecológico na nossa região! Esse impacto de mais de ${floresFormatado} visitas diárias vai disparar a produção de sementes nativas e reerguer as encostas da serra de Antonina contra erosões por causa da alta regeneração florestal assistida. Lembre de plantar flores da restinga e quaresmeiras para garantir resina o ano todo!`;
    }

    elementoTituloDica.textContent = tituloDica;
    elementoDescricaoDica.textContent = textoDica;

    // Transição de exibição do painel de resultados via manipulador de classes
    blocoResultadosAguardando.classList.add("oculto");
    blocoResultadosAtivos.classList.remove("oculto");
  });
});
