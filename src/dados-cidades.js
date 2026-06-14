/* ==========================================================================
   ARQUIVO: dados-cidades.js
   AUTORES: Alunos do Colégio Moysés Lupion (Antonina/PR - Agrinho 2026)
   DESCRIÇÃO: Nosso Banco de Dados de Cidades litorâneas, contendo as espécies
             de abelhas sem ferrão indicadas e os cultivos agroflorestais (SAF)
             recomendados para cada local.
   ========================================================================== */

/* Oi, professor! Este arquivo aqui é o nosso "Banco de Dados" local!
   A Roberta e o Thiago pesquisaram tudo sobre as abelhas nativas e os cultivos do litoral
   e digitaram esse array gigante no bloco de notas. O array "bancoDeDadosCidades" guarda
   em forma de objetos do JavaScript todas as informações de abelhas sem ferrão e plantas de SAF
   para Antonina, Morretes, Paranaguá e Guaraqueçaba.
   Depois o script "main.js" lê esse array e monta os cards na tela quando o usuário clica.
   A gente separou os dados aqui pra não bagunçar o código de controle lá do main.js! */
const bancoDeDadosCidades = [
  {
    id: "paranagua",
    nome: "Paranaguá",
    abelhas: [
      { 
        nome: "Abelha Jataí", 
        nomeCientifico: "Tetragonisca angustula", 
        descricao: "Dócil, rústica, fácil de criar e comum na região litorânea.", 
        detalhes: "A Jataí se adapta bem ao vento úmido de Paranaguá. Faz ninhos fáceis em frestas de muros ou árvores rústicas. Seu mel é fino, líquido e medicinal." 
      },
      { 
        nome: "Abelha Mandaçaia", 
        nomeCientifico: "Melipona mandacaia", 
        descricao: "Espécie maior, produtora de um mel espesso e de sabor floral delicioso.", 
        detalhes: "Necessita de caixas maiores e sombreadas contra calor forte. Constrói entradas de barro arredondadas nos troncos rurais." 
      },
      { 
        nome: "Abelha Guaraipo", 
        nomeCientifico: "Melipona blackburni", 
        descricao: "Espécie nobre da Mata Atlântica. Exige áreas de sombra farta e protegida.", 
        detalhes: "Por ser sensível ao desmatamento das florestas originais, a Guaraipo prospera muito bem sob o sub-bosque sombreado de SAFs." 
      }
    ],
    saf: [
      { 
        nome: "Palmito Juçara", 
        nomeCientifico: "Euterpe edulis", 
        descricao: "Espécie chave para a fauna. Produz sementes e polpa rica semelhante ao açaí.", 
        detalhes: "O Juçara gosta de sombra na fase inicial. É ótimo para consórcios com bananeiras e cacau litorâneos." 
      },
      { 
        nome: "Banana d'Água / Caturra", 
        nomeCientifico: "Musa spp.", 
        descricao: "Rápida cobertura de solo, umidade farta e retorno financeiro rápido.", 
        detalhes: "Por acumular muita água em seu caule, a bananeira revitaliza o solo arenoso, fornecendo palha abundante para adubo." 
      },
      { 
        nome: "Cacau Crioulo", 
        nomeCientifico: "Theobroma cacao", 
        descricao: "Planta de sombra. Adapta-se muito bem ao calor úmido das matas litorâneas.", 
        detalhes: "Plantado entre palmeiras e bananas, o cacaueiro..." 
      }
    ]
  },
  {
    id: "morretes",
    nome: "Morretes",
    abelhas: [
      { 
        nome: "Abelha Mandaçaia", 
        nomeCientifico: "Melipona mandacaia", 
        descricao: "Aproveita o clima fresco de vale para produzir méis aromáticos e ricos.", 
        detalhes: "Nos vales protegidos de Morretes, crescem muito rápido. Recomenda-se instalar perto de pomares de tangerina e citros." 
      },
      { 
        nome: "Abelha Tubuna", 
        nomeCientifico: "Scaptotrigona bipunctata", 
        descricao: "Abelha extremamente ágil e forte polinizadora de flores frutíferas locais.", 
        detalhes: "Muito trabalhadora, poliniza bananeiras e pomares rurais. Tem comportamento ativo e rápido no voo." 
      },
      { 
        nome: "Abelha Mirim-Quaçú", 
        nomeCientifico: "Plebeia remota", 
        descricao: "Espécie pequena, calma e ideal para introdução e atividades escolares.", 
        detalhes: "Não possui nenhuma agressividade. Nidifica em pequenos espaços e se recolhe nas noites frias de serra." 
      }
    ],
    saf: [
      { 
        nome: "Citros / Tangerina", 
        nomeCientifico: "Citrus reticulata", 
        descricao: "Cultivo tradicional de Morretes que depende muito da polinização das abelhas.", 
        detalhes: "As flores cheirosas ativam o trabalho dos enxames. O solo úmido e adubado com palha gera frutas extraordinárias." 
      },
      { 
        nome: "Palmito Juçara", 
        nomeCientifico: "Euterpe edulis", 
        descricao: "Se beneficia da terra rica de encostas e rios cristalinos de Morretes.", 
        detalhes: "Cresce com segurança nas áreas úmidas. Sua polpa de fruta pode ser colhida sem derrubar as palmeiras raras." 
      },
      { 
        nome: "Gengibre do Litoral", 
        nomeCientifico: "Zingiber officinale", 
        descricao: "Raiz nobre valorizada no comércio que cresce na sombra protetora do SAF.", 
        detalhes: "Desenvolve-se no solo macio e sombreado de bananeiras grandes, gerando renda contínua e integrada à floresta." 
      }
    ]
  },
  {
    id: "antonina",
    nome: "Antonina",
    abelhas: [
      { 
        nome: "Abelha Manduri", 
        nomeCientifico: "Melipona marginata", 
        descricao: "Pequeno porte, excelente para polinizar quaresmeiras em encostas de matas.", 
        detalhes: "Adora as encostas úmidas da baía de Antonina. Constrói favos delicados em espiral em ocos de árvores médias." 
      },
      { 
        nome: "Abelha Iraí", 
        nomeCientifico: "Nannotrigona testaceicornis", 
        descricao: "Dócil, constrói um característico tubo de cera flexível na entrada do ninho.", 
        detalhes: "Fantástica para quintais rurais e urbanos, convive em paz com crianças. Adora as flores rasteiras ricas de pólen." 
      },
      { 
        nome: "Uruçu-Amarela", 
        nomeCientifico: "Melipona rufiventris", 
        descricao: "Vistosa, excelente polinizadora no dossel alto da Mata Atlântica.", 
        detalhes: "Precisa de caixas espaçosas e protegidas de umidade excessiva. Produz um mel líquido, floral e refinado." 
      }
    ],
    saf: [
      { 
        nome: "Palmeira Pupunha", 
        nomeCientifico: "Bactris gasipaes", 
        descricao: "Cultivo rápido de palmito macio sem derrubar árvores nativas raras.", 
        detalhes: "Como gera novos brotos após o corte, garante renda constante. Segura o solo de morros contra erosões de chuvas." 
      },
      { 
        nome: "Banana-Terra d'Antonina", 
        nomeCientifico: "Musa paradisiaca", 
        descricao: "Alimento farto e gerador de biomassa foliar em encostas ricas de argila.", 
        detalhes: "Atua como planta pioneira no SAF. Suas folhas largas ajudam a manter a umidade do solo para cafezais e cacau de encosta." 
      },
      { 
        nome: "Abacateiro", 
        nomeCientifico: "Persea americana", 
        descricao: "Árvore grande que atua como quebra-ventos no topo e produz sombra farta.", 
        detalhes: "Suas raízes seguram as encostas dos morros. Oferece sombra ideal para plantas menores e colmeias nativas do quintal." 
      }
    ]
  },
  {
    id: "guaraqueçaba",
    nome: "Guaraqueçaba",
    abelhas: [
      { 
        nome: "Abelha Guaraipo Litorânea", 
        nomeCientifico: "Melipona blackburni", 
        descricao: "Espécie endêmica da mata nativa preservada. Voa sob névoa costeira.", 
        detalhes: "Vive nas profundezas de florestas intocadas. Essencial para a polinização de orquídeas e bromélias raras de manguezal." 
      },
      { 
        nome: "Abelha Mandaçaia", 
        nomeCientifico: "Melipona mandacaia", 
        descricao: "Presente nas ilhas rústicas e encostas ricas em orvalho e umidade.", 
        detalhes: "Enxames extremamente fortes. O mel dessa área tem acidez sutil característica e alto valor de mercado." 
      },
      { 
        nome: "Abelha Borá", 
        nomeCientifico: "Tetragona clavipes", 
        descricao: "Defensora do território. Mel com acidez marcante e muito apreciado.", 
        detalhes: "Prefere troncos ocos profundos de árvores grandes da mata. Viaja longas distâncias para colher o pólen nos mangues." 
      }
    ],
    saf: [
      { 
        nome: "Palmito Juçara Nativo", 
        nomeCientifico: "Euterpe edulis", 
        descricao: "Eco-renda focada na colheita racional de frutos silvestres (açaí de Juçara).", 
        detalhes: "Garante preservação ecológica. Alimenta as aves e fornece as flores ideais para os meliponários do sítio." 
      },
      { 
        nome: "Café Sombreado Caiçara", 
        nomeCientifico: "Coffea arabica", 
        descricao: "Tradição caiçara. O café cresce lentamente sob a sombra de árvores nativas.", 
        detalhes: "Ganha açúcares complexos sob a canela-preta. Plantio respeita e protege a floresta de proteção nativa." 
      },
      { 
        nome: "Quaresmeiras e Flores Apícolas", 
        nomeCientifico: "Tibouchina spp.", 
        descricao: "Flora rústica de proteção que floresce na entressafra alimentando enxames.", 
        detalhes: "Cresce em solos pobres e se enche de flores roxas na primavera. Garante néctar constante e seguro o ano todo." 
      }
    ]
  },
  {
    id: "matinhos",
    nome: "Matinhos",
    abelhas: [
      { 
        nome: "Abelha Jataí", 
        nomeCientifico: "Tetragonisca angustula", 
        descricao: "Líder em quintais residenciais e adaptada às matas arenosas de duna.", 
        detalhes: "Suporta ventos costeiros salinos com facilidade. Poliniza flores rústicas das áreas de dunas e gramas." 
      },
      { 
        nome: "Mirim-Preguiça", 
        nomeCientifico: "Frieseomelitta varia", 
        descricao: "Calma, dócil e silenciosa. Perfeita para introdução ecológica urbana.", 
        detalhes: "Não incomoda vizinhos nem apresenta riscos. Voa nas horas quentes e ensolaradas do litoral." 
      },
      { 
        nome: "Abelha Guaraipo", 
        nomeCientifico: "Melipona blackburni", 
        descricao: "Desenvolve-se muito bem no interior rural e encostas florestais protegidas.", 
        detalhes: "Exige proteção contra o vento sul frio. Prefere árvores nativas úmidas do interior da planície costeira." 
      }
    ],
    saf: [
      { 
        nome: "Guanandi Costeiro", 
        nomeCientifico: "Calophyllum brasiliense", 
        descricao: "Árvore robusta de folha verde-escura adaptada ao solo encharcado arenoso.", 
        detalhes: "Excelente barreira contra ventania arenosa do mar. Aguenta solos argilosos e encharcados da baixada." 
      },
      { 
        nome: "Araticum-da-Restinga", 
        nomeCientifico: "Annona glabra", 
        descricao: "Planta frutífera de restinga rústica que convive bem com lençóis altos.", 
        detalhes: "Dá frutas apreciadas pela fauna local. Suas flores aromáticas atraem ativamente as pequenas abelhas." 
      },
      { 
        nome: "Pitangueira", 
        nomeCientifico: "Eugenia uniflora", 
        descricao: "Arbusto rápido, dócil, produtor de bagas vermelhas ricas em vitaminas.", 
        detalhes: "Floração abundante de néctar no início da primavera. Suas folhas perfumadas geram adubação rústica no solo de areia." 
      }
    ]
  },
  {
    id: "guaratuba",
    nome: "Guaratuba",
    abelhas: [
      { 
        nome: "Tiúba (Uruçu-Cinzenta)", 
        nomeCientifico: "Melipona fasciculata", 
        descricao: "Excelente coletora de pólen em áreas úmidas de baías e mangues.", 
        detalhes: "Cria ninhos populosos e vigorosos. Consegue carregar pólen pesado de flores rústicas que abelhas pequenas evitam." 
      },
      { 
        nome: "Abelha Mandaçaia", 
        nomeCientifico: "Melipona mandacaia", 
        descricao: "Totalmente adaptada aos bananais orgânicos do fértil interior agrícola.", 
        detalhes: "Gosta do ambiente fresco das plantações de banana, que mantêm as caixas protegidas da luz direta constante." 
      },
      { 
        nome: "Abelha Manduri", 
        nomeCientifico: "Melipona marginata", 
        descricao: "Pequena e veloz, busca recursos in cipós rústicos e trepadeiras silvestres.", 
        detalhes: "Super ativa nas horas úmidas tradicionais de Guaratuba. Trabalha colhendo pólen sob tempo parcialmente nublado." 
      }
    ],
    saf: [
      { 
        nome: "Palmito Juçara da Encosta", 
        nomeCientifico: "Euterpe edulis", 
        descricao: "Desenvolve-se com muita pressa na bacia super chuvosa de Guaratuba.", 
        detalhes: "Aproveita a chuva abundante para crescer firme. Seus cachos pretos alimentam dezenas de aves e esquilos florestais." 
      },
      { 
        nome: "Banana Maçã e Caturra", 
        nomeCientifico: "Musa spp.", 
        descricao: "Base agroecológica local. Melhora o solo e serve de amortecedor do clima.", 
        detalhes: "Dá sombra rápida e palha rica em potássio para enriquecer o chão, fornecendo retorno de caixa mensal." 
      },
      { 
        nome: "Gengibre Orgânico", 
        nomeCientifico: "Zingiber officinale", 
        descricao: "Parceiro nobre. Cresce na umidade limpa sob a sombra das bananeiras.", 
        detalhes: "Prefere solo argiloso e fresco sem uso de químicos agrícolas. Combinação ideal com as fileiras de banana." 
      }
    ]
  },
  {
    id: "pontaldoparana",
    nome: "Pontal do Paraná",
    abelhas: [
      { 
        nome: "Abelha Iraí", 
        nomeCientifico: "Nannotrigona testaceicornis", 
        descricao: "Robusta, excelente convivente de escolas urbanas e quintais costeiros.", 
        detalhes: "Cria ninhos saudáveis em muros ocos e caixas didáticas livres de perigo. Ideal para aprendizado de sustentabilidade." 
      },
      { 
        nome: "Mirim-Droriana", 
        nomeCientifico: "Plebeia droriana", 
        descricao: "Miniatura especializada na polinização das pequeninas flores da restinga.", 
        detalhes: "Tem tamanho inferior a um grão de arroz. Vital na reprodução de plantas delicadas que vivem junto à duna." 
      },
      { 
        nome: "Abelha Jataí das Restingas", 
        nomeCientifico: "Tetragonisca angustula", 
        descricao: "Forte na coleta de resinas silvestres que geram própolis ricas em valor.", 
        detalhes: "Usa cascas de árvores da baixada e arbustos para vergar as caixas, protegendo o enxame na umidade fria de inverno." 
      }
    ],
    saf: [
      { 
        nome: "Araçazeiro", 
        nomeCientifico: "Psidium cattleianum", 
        descricao: "Fruteira nativa de araçás amarelados ou vermelhos super saborosos.", 
        detalhes: "Muito rústica, cresce bem in dunas secas e arenosas. Garante farto banquete para as abelhas na primavera." 
      },
      { 
        nome: "Grumixama Roxa", 
        nomeCientifico: "Eugenia brasiliensis", 
        descricao: "Cereja nativa da Mata Atlântica que prefere solo de floresta arenosa protegida.", 
        detalhes: "Folhas brilhantes que formam uma camada rica de folhas no solo, economizando água e mantendo a terra fresca." 
      },
      { 
        nome: "Ingá-da-Restinga", 
        nomeCientifico: "Inga laurina", 
        descricao: "Desenvolvimento ágil e atuante como fixadora de nutrientes no solo de areia.", 
        detalhes: "Sua folhagem recupera o solo infértil da praia. Flores cheias de néctar servem como prato cheio para enxames." 
      }
    ]
  }
];
