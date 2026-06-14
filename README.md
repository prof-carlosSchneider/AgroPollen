# AgroPóllen — Educação Ambiental e Agroecologia

### Projeto Front-End para o Concurso Agrinho PR 2026
* **Subcategoria 3:** Programação Front-End (HTML, CSS e JavaScript)
* **Instituição de Ensino:** Colégio Cívico-Militar Moysés Lupion — Antonina - Paraná
* **Série:** 1ª Série do Ensino Médio Técnico em Desenvolvimento de Sistemas
* **Professor Orientador:** Carlos Schneider (Analista de Sistemas & Técnico em Meio Ambiente)
* **Estudantes Desenvolvedores:** Gabriel M. Silva, Gabrielle A. Schmeil, Maria V. C. da Rocha, Alice P. dos Santos

---

## 1. Alinhamento com o Tema do Concurso
**Tema:** *“Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente”*

O portal **AgroPóllen** demonstra como a sinergia entre **Sistemas Agroflorestais (SAFs)** e a criação de **abelhas nativas sem ferrão (Meliponicultura)** na **Reserva Legal** de pequenas propriedades rurais no litoral paranaense viabiliza a geração de renda sustentável (através de méis nobres, palmito juçara e frutas) enquanto recupera a biodiversidade local da Mata Atlântica e protege as encostas contra erosões.

---

## 2. Metodologia de Desenvolvimento (Fluxo de Trabalho e Colaboração)
O projeto foi desenvolvido adotando uma metodologia ágil inspirada no mercado profissional de tecnologia, executada em um ciclo de **2 semanas (cerca de 20 horas de laboratório)**:

* **Prototipação Inicial (Canva):** O design visual preliminar e o guia de estilo foram idealizados no Canva. Isso ajudou o grupo a ter um norte visual comum, agilizando o início da codificação dos estilos CSS e estruturação do layout.
* **Desenvolvimento Coletivo (Alunos):** Gabriel, Maria, Gabrielle e Alice trabalharam de forma integrada e colaborativa. Todos participaram ativamente de todas as frentes de trabalho: desde a pesquisa de dados geográficos e ambientais, redação dos manuais de manejo, até a estruturação do HTML, codificação do CSS responsivo e implementação das lógicas de JavaScript.
* **Revisão e Publicação (Prof. Carlos):** A revisão final de conformidade técnica (garantindo ausência de códigos inline, caminhos relativos e organização geral) e a publicação final no GitHub Pages ficaram a cargo do professor orientador.

---

## 3. Tecnologias Utilizadas
Em conformidade estrita com o item 6.1.15 do regulamento, o projeto foi construído **100% do zero, sem o uso de qualquer biblioteca ou framework externo** (como Tailwind, Bootstrap, jQuery ou React):
* **HTML5 Semântico:** Uso correto de tags estruturais (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) e elementos de formulário (`<form>`, `<input>`, `<select>`, `<button>`).
* **CSS3 Modular e Customizável:** Estilos organizados em arquivos separados na pasta `src/css/` e integrados via `@import` no `index.css`. Utiliza variáveis CSS para gerenciar temas e escalabilidade de fontes.
* **JavaScript Vanilla (ES6):** Manipulação de elementos do DOM, persistência local de dados (`localStorage`), escuta de eventos nativos (`click`, `submit`, `keydown` para acessibilidade) e estruturas de dados dinâmicas (arrays de objetos).

---

## 4. Principais Funcionalidades do Portal

### 4.1. Recomendador de Espécies por Cidade
Um widget interativo onde o usuário seleciona uma cidade do litoral paranaense e visualiza instantaneamente quais espécies de abelhas nativas e culturas agroflorestais são ideais para o plantio e polinização cruzada no município. Ao clicar em qualquer espécie, dicas específicas de manejo ecológico aparecem em uma caixa de destaque.

### 4.2. Calculadora de Impacto Ecológico
Um simulador onde o produtor ou estudante insere seu nome e a quantidade de ninhos de abelhas que deseja criar. A calculadora processa os dados matematicamente com base em dados técnicos da Embrapa/ICMBio e exibe:
* A quantidade de árvores nativas ativamente polinizadas;
* A área de mata protegida e beneficiada em hectares e metros quadrados;
* O número de visitas polinizadoras diárias às flores locais;
* Uma dica de manejo customizada baseada no tamanho do meliponário.

### 4.3. Biblioteca Digital de Manuais
Conjunto de 8 guias práticos em páginas HTML dedicadas, cobrindo tópicos como montagem de SAFs, loções de atração de abelhas, recuperação de solo degradado e conformidade jurídica do manejo sustentável na Reserva Legal.

### 4.4. Ferramentas Integradas de Acessibilidade
No topo de todas as páginas do portal, há botões que permitem:
* Alterar o contraste da página em tempo real (Alternância entre Tema Claro e Tema Escuro / Alto Contraste);
* Dar zoom/escala no tamanho do texto geral da página (de 80% até 140%).
As configurações de acessibilidade são persistidas no navegador do usuário, mantendo-se ativas durante toda a navegação pelas páginas internas de artigos.

---

## 5. Estrutura do Repositório
Todos os recursos de mídia e código estão organizados de forma lógica e limpa em diretórios dedicados:
```text
├── artigos/                    # Biblioteca de Manuais Didáticos (HTMLs dedicados)
├── src/
│   ├── assets/
│   │   └── images/             # Mídias e fotos organizadas
│   ├── css/                    # Folhas de estilo modulares (CSS Externo)
│   │   ├── acessibilidade.css
│   │   ├── artigos.css
│   │   ├── calculadora.css
│   │   ├── hero.css
│   │   ├── layout.css
│   │   ├── navegacao.css
│   │   ├── recomendador.css
│   │   ├── reserva.css
│   │   ├── sobre.css
│   │   └── variaveis.css
│   ├── calculadora.js          # Lógica específica da calculadora
│   ├── dados-cidades.js        # Banco de dados estático em formato JS
│   ├── main.js                 # Lógica de DOM da home e acessibilidade
│   └── theme-sync.js           # Sincronização rápida de tema
├── calculadora.html            # Tela da calculadora
├── index.html                  # Tela principal do portal
└── README.md                   # Documentação do projeto
```

---

## 6. Como Executar o Projeto Localmente
Por utilizar caminhos relativos e não possuir dependências externas, o projeto é extremamente portátil:
1. Faça o download ou clone do repositório.
2. Dê um duplo clique no arquivo `index.html` para abrir o site diretamente no seu navegador de preferência.

---

## 7. Fontes Científicas e Referências (Calibração da Calculadora)
As métricas de área de polinização ativa, população de colônias e visitas diárias por espécie utilizadas na calculadora foram baseadas nas seguintes fontes e referências técnicas:

*   **ARAÚJO, V. A. et al. (2004)** — *Raio de voo de meliponíneos em áreas de restinga*.
*   **KUHN NETO, B. et al. (2009)** — *Raio de voo e dispersão de Meliponini*.
*   **EMBRAPA MEIO AMBIENTE** — *Manual de Manejo de Abelhas Sem Ferrão*.
*   **ASSOCIAÇÃO ABELHA (abelha.org.br)** — *Fichas Técnicas de Espécies de Abelhas Nativas*.
*   **BRASIL. Lei nº 12.651/2012** (Novo Código Florestal Brasileiro).
*   **ICMBio** — *Instruções de Manejo Florestal Sustentável e Conservação de Meliponíneos*.
*   **EMBRAPA (2021)** — *Sistema Agroflorestal – Guia Prático*. 
*   **EMBRAPA (2021)** — *Recuperação de Solos Degradados*.
*   **EMBRAPA (2022)** — *Guia de Atração de Abelhas Nativas*. 
*   **EMBRAPA (2022)** — *Estudos sobre Valor Econômico da Polinização*. 
*   **EMBRAPA (2022)** — *Manejo Florestal Sustentável*.
*   **EMBRAPA (2023)** — *Manual de Manejo de Meliponários*.
*   **EMBRAPA (2023)** — *Integração Lavoura-Pecuária-Floresta (ILPF) e Sistemas Agroecológicos*.
---

## 8. Créditos das Imagens e Licenciamento
Todas as imagens de artigos e carrossel utilizadas no portal são de uso livre e gratuito para fins não-comerciais e educativos, obtidas no acervo do Wikimedia Commons:

| Arquivo Local | Descrição | Autor | Link de Origem | Licença |
| :--- | :--- | :--- | :--- | :--- |
| `atlantic_forest_coast.jpg` | Vista panorâmica da Baía de Antonina no litoral paranaense | Henrique Jakobi Moreira | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ba%C3%ADa_de_Antonina.jpg) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.pt) |
| `agroforestry_saf.jpg` | Sistema agroflorestal em faixas (alley cropping) | USDA National Agroforestry Center | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Alley_cropping_(26311855315).jpg) | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/deed.pt) |
| `bee_nest.jpg` | Entrada de ninho natural de abelha Jataí (*Tetragonisca angustula*) | Sintropepe | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tetragonisca_angustula_nest_entrance.jpg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pt) |
| `bee_pollination.jpg` | Abelha polinizando flor Portulaca grandiflora | Lucas Silveira Souza | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Portulaca_Grandiflora_em_momento_de_poliniza%C3%A7%C3%A3o.jpg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pt) |
| `legal_reserve_forest.jpg` | Mata Atlântica preservada na Serra do Mar em Morretes/PR | V.Agostinelli | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Serra_do_Mar_-_Primavera_em_Morretes-PR.jpg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pt) |
| `bee_flowers.jpg` | Cachos de flores amarelas da árvore Bracatinga | Joao de Deus Medeiros | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mimosa_scabrella.jpg) | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/deed.pt) |
| `meliponary_hives.jpg` | Caixas racionais de abelhas nativas em um meliponário | Rodrigo Tetsuo Argenton | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Jardim_Zoobotanico_de_Franca_(Melipon%C3%A1rio)_11012019.jpg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pt) |
| `agroecology_education.jpg` | Horta escolar pedagógica (Parque Amantikir) | Bentojr | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:School_Garden,_Parque_Amantikir.jpg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pt) |
| `logo_1781388657183.jpg` | Logotipo do portal AgroPóllen | Estudantes do Colégio Moysés Lupion | Criação Própria | Domínio Público |
