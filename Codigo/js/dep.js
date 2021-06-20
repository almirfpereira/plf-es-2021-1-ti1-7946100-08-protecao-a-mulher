


function exibeDep(deps_data) {
    let divTela = document.getElementById('carrossel');
    let texto = ``;
    let i, j;
    
    //primeira row do carrossel:
    texto=texto+ `
        <div class="carousel-item active">
            <div class="row">`;
        for(j=0;j<3;j++){
            let dep = deps_data.deps[j];
            texto = texto + `
                                <div class="col-12 col-md-4 col-lg-4">
                                    <div class="div-img">
                                        ${dep.imagem}
                                    </div>

                                    <h3>${dep.nome}</h3>
                                    <p>${dep.depoimento}</p>
                                    <p>
                                        Leia mais em: ${dep.fonte}
                                    </p>

                                </div>
                `

        }
        texto = texto + `</div>
        </div>`

    for(i=1;i<(deps_data.deps.length)/3;i++){
        texto=texto + `
        <div class="carousel-item">
            <div class="row">`;
        for(j=0;j<3;j++){
            let dep = deps_data.deps[j+3*i];
            texto = texto + `
            <div class="col-12 col-md-4 col-lg-4">
                <div class="div-img">
                    ${dep.imagem}
                </div>

                <h3>${dep.nome}</h3>
                <p>${dep.depoimento}</p>
                <p>
                    Leia mais em: ${dep.fonte}
                </p>

            </div>
                `

        }
        texto = texto + `</div>
        </div>`
    }

    //var dado = dados;
    //preencher div
    divTela.innerHTML = texto;
}


var deps_data = {
    "deps": [
        {
            "nome":'Yannahe Marques - Autora do livro "Eu Escolhi viver"',
            "depoimento":'"Ao contrário do consenso geral, que apenas donas de casa ou mulheres dependentes dos parceiros se submetem a situações de violência, eu sempre fui uma mulher forte, trabalhadora e independente. A situação não se instala da noite para o dia. Vai piorando aos poucos e, se você não rompe aos primeiros sinais de alerta, está correndo o risco de pagar com a sua vida."',
            "imagem":'<img src="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2021/06/15145446/Yannahe-Marques.jpg" alt="img1">',
            "fonte": '<a target="blank"href="https://jornaldebrasilia.com.br/blogs-e-colunas/analice-nicolau/yannahe-marques/">jornaldebrasilia.com.br</a>'
        },
        {
            "nome":"Thais",
            "depoimento":'"Sou vítima e sobrevivente a um atentado de feminicídio. Peço que todas que sofram algum tipo de agressão, verbal, psicológica, procurem a polícia. Denunciem. Procurem um posto de saúde, procurem ajuda. Isso não é normal. Eles começamvverbalmente e depois fisicamente. Nem todo mundo terá a mesma sorte que eu tive de estar viva."',
            "imagem":'<img src="https://www.rbsdirect.com.br/filestore/6/0/6/9/7_57d84ade8342d72/79606_e52d5011adfb109.jpg?w=1024&rv=2-10-05&safari" alt="Carro da polícia Civil">',
            "fonte": '<a target="blank" href="https://gauchazh.clicrbs.com.br/seguranca/noticia/2021/05/nao-podemos-subestimar-as-pessoas-diz-mulher-que-sobreviveu-a-nove-facadas-do-ex-e-orientou-proprio-socorro-durante-ataque-ckoudswsa005y018m66fu3o7z.html">gauchazh.clicrbs.com.br</a>'
        }
        ,
        {
            "nome":"Delegacia de Atendimento à Mulher de Duque de Caxias",
            "depoimento":`"É muito importante que a mulher vá a uma unidade policial e elabore esse
            registro e comunique esse fato, sobretudo, para que a atividade do estado se
            realize no sentido de inibir a continuidade desse comportamento. A repetição
            desse comportamento geralmente ocorre quando a mulher silencia"`,
            "imagem":'<img src="https://s2.glbimg.com/o6n7Db-7tD2JRkoq4xqz4milQyw=/0x0:5592x3684/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/j/O/MLDa8eSLm5Iwu9nVX8Rw/t0a40122222222222.jpg" alt="Equipe de mulheres que atuam na Deam de Duque de Caxias — Foto: Marcos Serra Lima/ G1">',
            "fonte": '<a target="blank" href=" https://g1.globo.com/rj/rio-de-janeiro/noticia/2019/04/18/agressoes-ameacas-injuria-veja-relatos-de-vitimas-na-delegacia-recordista-de-casos-de-violencia-contra-mulher-no-rj.ghtml">g1.globo.com</a>'
        },
        {
            "nome":"Alice",
            "depoimento":`"Eu tinha meus amigos. Eu perdi contato com todos, porque eu não podia ter
            contato com meu passado, porque eu era uma nova mulher. Amigos homens? Nem
            pensar. E minhas amigas também. Todas elas, ele botou algum defeito [...] Eu
            queria tanto que desse certo, que eu ceguei para tudo. Aí, começou aquela
            fase de que as roupas que eu vestia não eram adequadas. Parei de usar brinco.
            Batom vermelho era coisa de vagabunda. Pintar a unha de vermelho, então… Nossa!
            Era o fim do mundo."`,
            "imagem":'<img src="https://static.ndmais.com.br/2018/08/cropped/892f50f61d933142871da1c9be8cd368d1b82937.jpg">',
            "fonte": '<a target="blank" href="https://ndmais.com.br/seguranca/policia/depoimento-de-uma-sobrevivente-entenda-o-ciclo-da-violencia-domestica/">ndmais.com.br</a>'
        },
        {
            "nome":"Andrea, 46 anos",
            "depoimento":`"Às vezes, ouço mulheres falando que quem passa pelo que eu passei é sem
            vergonha.
            Ao contrário: é por excesso de vergonha que a gente não abre para a família e a
            sociedade o que acontece. Sou uma mulher muito melhor porque passei a
            me colocar como a principal pessoa da minha vida. Tive outros relacionamentos
            maravilhosos. O atual me trata com admiração e respeito. Às vezes, paro e penso:
            'Existe vida após a violência doméstica.'"`,
            "imagem":'<img src="https://conteudo.imguol.com.br/c/entretenimento/ca/2020/06/18/cinco-mulheres-contam-como-se-livraram-do-agressor-ha-vida-apos-violencia-1592492545805_v2_450x450.jpg.webp" alt="Andrea">',
            "fonte": '<a target="blank" href="https://www.uol.com.br/universa/noticias/redacao/2020/06/22/cinco-mulheres-contam-como-se-livraram-do-agressor-ha-vida-apos-violencia.htm">uol.com.br</a>'
        },
        {
            "nome": "Carol, 34 anos",
            "depoimento":`"Foram idas e vindas durante sete anos. A gente sempre tem a esperança de que
            tudo vai dar certo. Por isso, você nem conta o que está passando para as
            pessoas. E também para não ser julgada. E aí você vai sobrevivendo. No fim, você
            enxerga que está fazendo tudo, e a pessoa absolutamente nada. Sem perceber, seu
            corpo e sua alma estão doentes. Você está esgotada. Estou livre dele há oito
            meses e aprendendo a viver. Hoje, sou outra pessoa. A
            medida protetiva que ganhei após a agressão é a minha nova certidão de
            nascimento. A mulher precisa entender que a culpa nunca é dela. E acreditar que
            existe saída."`,
            "imagem":'<img src="https://conteudo.imguol.com.br/c/entretenimento/b6/2020/06/19/me-livrei-do-meu-agressor-elas-contam-como-deram-fim-a-violencia-domestica-1592599360827_v2_450x450.jpg.webp" alt="img1">',
            "fonte": '<a target="blank" href="https://www.uol.com.br/universa/noticias/redacao/2020/06/22/cinco-mulheres-contam-como-se-livraram-do-agressor-ha-vida-apos-violencia.htm">uol.com.br</a>'
        }
    ]
}
exibeDep(deps_data);