# Dicionário de Nomenclatura — Portal AgroPóllen

Este documento serve como um guia didático de consulta rápida para os estudantes do **Colégio Moysés Lupion**. Ele explica o significado e a função de cada classe CSS, ID e variável JavaScript que criamos em português, ajudando a compreender como cada parte do código funciona na prática.

---

## 1. Estruturas Globais e Acessibilidade (HTML / CSS)

| Nome (Português) | Tipo | O que faz no código? |
| :--- | :--- | :--- |
| `barra-acessibilidade` | Classe CSS | Caixa cinza horizontal no topo da tela que agrupa os botões de ajuste de texto e contraste. |
| `grupo-acessibilidade` | Classe CSS | Agrupa a etiqueta de texto (ex: "Contraste:") e seus respectivos botões na barra de acessibilidade. |
| `botao-acessibilidade` | Classe CSS | Estiliza os botões de diminuir fonte (A-), aumentar fonte (A+) e alternar contraste. |
| `botao-alternar-tema` | ID HTML | Botão que o usuário clica para alternar entre o tema claro e o tema escuro (alto contraste). |
| `texto-botao-tema` | Classe CSS | Elemento de texto interno do botão de tema que muda dinamicamente de "Tema Escuro" para "Tema Claro". |
| `botao-diminuir-fonte` | ID HTML | Botão de ação que reduz o tamanho das letras do site ao ser clicado. |
| `indicador-escala-fonte` | ID HTML | Mostrador digital (como `100%`) que exibe dinamicamente o nível de zoom das letras na tela. |
| `botao-aumentar-fonte` | ID HTML | Botão de ação que aumenta o tamanho das letras do site ao ser clicado. |
| `tema-escuro` | Classe CSS | Aplicada na raiz da página (`<html>`) para ativar as variáveis de cores do modo noturno. |
| `cabecalho-site` | Classe CSS | Faixa retangular de cabeçalho na biblioteca de artigos e na calculadora. |
| `container-cabecalho` | Classe CSS | Centraliza e limita a largura máxima do texto dentro do cabeçalho da página. |
| `slogan` | Classe CSS | Pequeno subtítulo descritivo em letras maiúsculas que assina o projeto escolar. |
| `conteudo-principal` | Classe CSS | O bloco central que abraça todo o conteúdo do site e dá espaçamento entre as seções. |
| `rodape-site` | Classe CSS | Rodapé cinza no final do site com direitos autorais e assinatura do colégio. |
| `sub-rodape` | Classe CSS | Linha de texto menor no rodapé indicando a localização física e o ano do Agrinho. |
| `botao` | Classe CSS | Classe base de botões que dá formato arredondado, margens internas e cursor de clique. |
| `botao-primario` | Classe CSS | Dá a cor verde-floresta oficial do projeto aos botões de maior destaque. |
| `botao-contorno` | Classe CSS | Botão com fundo transparente e borda fina, usado para ações secundárias de menor impacto. |
| `oculto` | Classe CSS | Classe utilitária que esconde temporariamente qualquer elemento na tela (`display: none;`). |

---

## 2. Barra de Navegação (Navbar)

| Nome (Português) | Tipo | O que faz no código? |
| :--- | :--- | :--- |
| `barra-navegacao` | Classe CSS | A barra de menu principal que fica colada no topo do navegador durante a rolagem. |
| `container-navegacao` | Classe CSS | Centraliza o conteúdo da navbar e joga o logo para a esquerda e os links de menu para a direita. |
| `marca-navegacao` | Classe CSS | O link principal de identificação que une o logotipo redondo e o título AgroPóllen. |
| `logo-navegacao` | Classe CSS | Recorta e estiliza o logotipo redondo do portal com uma borda verde-floresta. |
| `texto-marca` | Classe CSS | Embrulha o título AgroPóllen e a legenda do Colégio Moysés Lupion. |
| `nome-marca` | Classe CSS | Estiliza em negrito e tamanho destacado a marca AgroPóllen. |
| `subtitulo-marca` | Classe CSS | Legenda menor de identificação escolar abaixo da marca na barra de navegação. |
| `menu-navegacao` | Classe CSS | Lista horizontal que contém os links de navegação rápida pelas seções do portal. |
| `link-navegacao` | Classe CSS | Estiliza os links do menu e cria a linha verde sutil que aparece debaixo deles. |
| `link-destaque` | Classe CSS | Destaca o link da "Calculadora" em cor amarelo-mel para atrair o usuário à simulação. |

---

## 3. Banner de Boas-Vindas (Hero Section)

| Nome (Português) | Tipo | O que faz no código? |
| :--- | :--- | :--- |
| `secao-apresentacao` | Classe CSS | O grande banner inicial com a foto aérea da Baía de Antonina no fundo. |
| `sobreposicao-apresentacao` | Classe CSS | Película escura translúcida sobre a imagem para garantir que os títulos brancos fiquem legíveis. |
| `embrulho-apresentacao` | Classe CSS | Centraliza os textos e botões de ação bem no meio da área da imagem de fundo. |
| `conteudo-apresentacao` | Classe CSS | Alinha verticalmente o título, subtítulo e os botões na tela de apresentação. |
| `etiqueta-apresentacao` | Classe CSS | Pequena etiqueta contornada para destacar que o projeto é escolar ou direcionado. |
| `titulo-apresentacao` | Classe CSS | Título principal gigante em letras brancas na página inicial. |
| `subtitulo-apresentacao` | Classe CSS | Parágrafo explicativo em letras claras abaixo do título da apresentação. |
| `acoes-apresentacao` | Classe CSS | Grade que organiza os botões do banner inicial de forma organizada. |
| `botao-destaque` | Classe CSS | Dá cor amarela (cor de mel) ao botão principal da calculadora no banner. |
| `botao-contorno-apresentacao` | Classe CSS | Botão com fundo semitransparente que brilha em branco no banner inicial. |

---

## 4. Cards Informativos e Biblioteca (Artigos)

| Nome (Português) | Tipo | O que faz no código? |
| :--- | :--- | :--- |
| `cards-informativos` | Classe CSS | Grade para organizar pequenos cartões rápidos de informações. |
| `card-informativo` | Classe CSS | Cartão individual com ícone grande e pequeno resumo. |
| `icone-card` | Classe CSS | Formata o emoji de ícone no topo de cada cartão informativo. |
| `titulo-card` | Classe CSS | Título em negrito do cartão informativo. |
| `descricao-card` | Classe CSS | Parágrafo descritivo do cartão informativo. |
| `secao-artigos` | Classe CSS | Seção geral que envolve a grade dos 8 guias didáticos na home. |
| `titulo-secao-embrulho` | Classe CSS | Embrulho centralizado para o título principal e subtítulo da seção de artigos. |
| `grade-artigos` | Classe CSS | Grade flexível que organiza os cards de artigos em colunas responsivas que se ajustam sozinhas. |
| `card-artigo` | Classe CSS | Caixa individual de cada artigo, contendo a foto e o botão de leitura. |
| `imagem-card` | Classe CSS | Estiliza e enquadra a foto de capa de cada artigo em formato paisagem. |
| `corpo-card` | Classe CSS | Dá margem interna e organiza o texto do título e descrição do artigo-card. |
| `botao-leitura` | Classe CSS | Centraliza o botão "Ler Manual Completo" no fundo do card do artigo. |
| `etiqueta` | Classe CSS | Selo pequeno colorido usado nos artigos para destacar o tema (ex: "Meliponicultura"). |
| `corpo-artigo` | Classe CSS | Formata as margens e o espaçamento vertical entre os parágrafos de leitura do manual completo. |
| `rodape-artigo` | Classe CSS | Linha divisória fina no final do artigo que envolve o botão de voltar. |
| `corpo-pagina-artigo` | Classe CSS | Fundo geral da página do manual completo de leitura. |
| `secao-introducao` | Classe CSS | Bloco de papel branco centralizado que simula uma folha física de caderno de estudos. |

---

## 5. Recomendador de Espécies por Cidade (HTML / JS)

| Nome (Português) | Tipo | O que faz no código? |
| :--- | :--- | :--- |
| `secao-recomendador` | Classe CSS | Envolve o widget interativo de recomendação de abelhas na home. |
| `texto-ajuda` | Classe CSS | Texto de orientação que pede para o usuário selecionar uma cidade da lista. |
| `botoes-cidades` | Classe CSS | Agrupa os botões das abas com os nomes das cidades do litoral. |
| `botao-cidade` | Classe CSS | Botão em forma de aba arredondada contendo o nome da cidade. |
| `data-cidade` | Atributo HTML | Guarda o identificador da cidade no botão para o JS saber qual carregar ao clicar. |
| `grade-resultados` | Classe CSS | Divide a exibição de resultados em duas colunas (Abelhas e Plantas SAF). |
| `coluna-resultados` | Classe CSS | Cada uma das colunas de resultado no recomendador. |
| `lista-especies` | Classe CSS | Lista limpa que recebe as li dinâmicas geradas pelo JavaScript. |
| `lista-abelhas` | ID HTML | O elemento `<ul>` que recebe a lista de abelhas indicadas pelo JS. |
| `lista-saf` | ID HTML | O elemento `<ul>` que recebe a lista de plantas do SAF indicadas pelo JS. |
| `painel-detalhes` | ID HTML | Caixa amarela de destaque na base que exibe dicas específicas de manejo. |
| `titulo-detalhes` | ID HTML | Título em letras maiúsculas dentro da caixa de detalhes de manejo. |
| `texto-detalhes` | ID HTML | Texto contendo as instruções práticas de plantio e simbiose na caixa de detalhes. |
| `caixa-informacao` | Classe CSS | Estilização da caixa de aviso com borda amarela destacada no recomendador. |
| `item-recomendacao` | Classe CSS | Elemento `<li>` de cada espécie listada, com borda lateral decorativa. |
| `cabecalho-item` | Classe CSS | Organiza o nome popular e o nome científico em itálico na mesma linha. |
| `titulo-item` | Classe CSS | Estiliza em negrito o nome popular da planta ou abelha sugerida. |
| `nome-cientifico` | Classe CSS | Formata o nome latino/científico da espécie em itálico e cor discreta. |
| `descricao-item` | Classe CSS | Pequeno resumo do papel da espécie na agroecologia local. |
| `clique-detalhes` | Classe CSS | Frase sublinhada que convida o usuário a clicar para ler o manejo prático. |
| `ativo` | Classe CSS | Classe dinâmica aplicada pelo JS no botão e no item selecionado para destacar em amarelo/verde. |

---

## 6. Calculadora de Impacto Ecológico (HTML / JS)

| Nome (Português) | Tipo | O que faz no código? |
| :--- | :--- | :--- |
| `secao-calculadora` | Classe CSS | Envolve toda a área da grade da calculadora na página. |
| `grade-calculadora` | Classe CSS | Grade principal que divide o formulário na esquerda e os resultados na direita. |
| `card-formulario-calculadora` | Classe CSS | Cartão branco que envolve o formulário de entradas de dados. |
| `titulo-formulario-calculadora` | Classe CSS | Título da seção do formulário na calculadora. |
| `texto-formulario-calculadora` | Classe CSS | Texto instrutivo sobre a calibração com dados da Embrapa. |
| `formulario-impacto` | ID HTML | O formulário que recebe o evento de envio (submit) para rodar o cálculo ecológico. |
| `formulario-calculadora` | Classe CSS | Define as margens internas e o espaçamento dos grupos do formulário. |
| `grupo-formulario` | Classe CSS | Agrupa a etiqueta (`<label>`) e o campo de digitação (`<input>`) correspondente. |
| `ultimo-grupo-formulario` | Classe CSS | Grupo de formulário final, usado para dar um espaçamento maior antes do botão calcular. |
| `rotulo-formulario` | Classe CSS | Estiliza a etiqueta identificadora do campo de texto em letras maiúsculas discretas. |
| `calc-nome-usuario` | ID HTML | O campo de texto `<input>` onde o usuário digita seu nome de participante. |
| `calc-caixas` | ID HTML | O campo numérico `<input>` onde se insere a quantidade de colmeias. |
| `calc-especie` | ID HTML | O campo de seleção `<select>` onde o usuário escolhe uma das 12 abelhas nativas. |
| `entrada-formulario` | Classe CSS | Estiliza os campos de texto, inputs numéricos e seletores do formulário. |
| `botao-calculadora` | Classe CSS | Estiliza o grande botão verde "Calcular Força Ecológica ⚡". |
| `card-resultados-calculadora` | Classe CSS | Cartão da direita que exibe os resultados da simulação de polinização. |
| `resultados-aguardando` | Classe CSS / ID | Elementos visuais exibidos antes do cálculo (enquanto não há dados para mostrar). |
| `logo-aguardando` | Classe CSS | Logotipo redondo do AgroPóllen que flutua na área de espera de resultados. |
| `texto-aguardando` | Classe CSS | Frase curta instruindo o usuário a calcular para ver a mágica acontecer. |
| `resultados-ativos` | Classe CSS / ID | Elementos visuais revelados após o cálculo com os dados calculados do produtor. |
| `resultados-boas-vindas` | ID HTML | Banner de boas-vindas contendo uma frase personalizada com o nome e caixas digitadas. |
| `banner-boas-vindas` | Classe CSS | Estiliza o banner verde-mel que exibe a frase de boas-vindas personalizada do usuário. |
| `item-estatistica` | Classe CSS | Bloco cinza individual que exibe cada dado estimado (ex: árvores, hectares, flores). |
| `icone-estatistica` | Classe CSS | O círculo branco redondo que segura o emoji identificador do dado ecológico. |
| `conteudo-estatistica` | Classe CSS | Envolve o número estimado e a etiqueta do dado estatístico. |
| `valor-estat-arvores` | ID HTML | O elemento de texto que recebe dinamicamente o número de árvores recuperadas. |
| `valor-estatistica` | Classe CSS | Estiliza em letras verdes gigantes os números resultantes da simulação. |
| `rotulo-estatistica` | Classe CSS | Legenda menor explicando qual é a unidade de medida do número resultante. |
| `valor-estat-area` | ID HTML | O elemento de texto que recebe dinamicamente a área em hectares polinizada. |
| `valor-estat-flores` | ID HTML | O elemento de texto que recebe dinamicamente o total de flores visitadas diariamente. |
| `container-dica` | Classe CSS | Linha pontilhada discreta que separa as estatísticas da dica técnica. |
| `caixa-dica` | Classe CSS | Caixa com fundo amarelo-mel clarinho que armazena a dica do estudante. |
| `valor-titulo-dica` | ID HTML | Título dinâmico da dica (muda dependendo de quem é o aluno dono da dica técnica). |
| `titulo-dica` | Classe CSS | Estiliza em letras maiúsculas laranjas o título da dica de manejo. |
| `valor-desc-dica` | ID HTML | Texto da dica técnica de manejo escolar calculada dinamicamente pelo JS. |
| `descricao-dica` | Classe CSS | Formata em tamanho menor e cor confortável o texto da dica de manejo. |
| `rodape-calculadora` | Classe CSS | Faixa final onde fica posicionado o botão de retornar para a Home. |

---

## 7. Banco de Dados e Variáveis Globais (JavaScript)

| Nome (Português) | Tipo | O que faz no código? |
| :--- | :--- | :--- |
| `bancoDeDadosCidades` | Variável JS | Lista (array) que contém os objetos de dados indicados para Paranaguá, Antonina, etc. |
| `abelhas` | Propriedade | Chave no objeto de dados que armazena o array de abelhas recomendadas. |
| `saf` | Propriedade | Chave no objeto de dados que armazena o array de cultivos recomendados para SAF. |
| `nome` | Propriedade | Chave no objeto que armazena o nome popular da espécie ou da cidade. |
| `nomeCientifico` | Propriedade | Chave no objeto de dados que armazena o nome latim científico da espécie. |
| `descricao` | Propriedade | Chave no objeto de dados que armazena a breve introdução ecológica. |
| `detalhes` | Propriedade | Chave no objeto que armazena o passo-a-passo técnico de manejo. |
| `configuracoesAbelhas` | Variável JS | Objeto em `calculadora.js` que armazena os fatores matemáticos multiplicadores de cada abelha. |
| `areaHectares` | Propriedade | O fator de multiplicação de área que cada ninho de abelha consegue polinizar no litoral. |
| `visitasDiarias` | Propriedade | O total médio estimado de flores que a espécie poliniza individualmente ao dia. |
| `modoEscuro` | Variável JS | Armazena se a classe `tema-escuro` está ativa no corpo da página para inverter a lógica. |
