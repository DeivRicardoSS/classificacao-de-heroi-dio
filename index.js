const herois = [
    {
        nome: "Saitama \t",
        genero: "M",
        forca: 9999,
        velocidade: 9999,
        resistencia: 9999,
    },
    {
        nome: "Genus \t\t",
        genero: "M",
        forca: 6070,
        velocidade: 5090,
        resistencia: 3670
    },
    {
        nome: "Tornado \t",
        genero: "F",
        forca: 8567,
        velocidade: 4000,
        resistencia: 8000
    },
    {
        nome: "Nevasca do Inferno",
        genero: "M",
        forca: 2100,
        velocidade: 880,
        resistencia: 600
    },
    {
        nome: "Cavaleiro sem licença",
        genero: "M",
        forca: 120,
        velocidade: 100,
        resistencia: 70
    }
]

const classificacao = [
    {
        ranking: "C",
        min_forca: 100,
        min_velocidade: 80,
        min_resistencia: 70 
    },
    {
        ranking: "B",
        min_forca: 1000,
        min_velocidade: 800,
        min_resistencia: 500 
    },
    {
        ranking: "A",
        min_forca: 4000,
        min_velocidade: 1000,
        min_resistencia: 900 
    },
    {
        ranking: "S",
        min_forca: 6000,
        min_velocidade: 4000,
        min_resistencia: 3000 
    }
];

console.log("Classificação e heróis")
console.log(`Nome \t\t\t Gen \t Forc \t Veloc \t Resist  Classe`)

herois.forEach(heroi => {
    let ranking
    classificacao.forEach(rank => {
        if(heroi.forca >= rank.min_forca && heroi.velocidade >= rank.min_velocidade && heroi.resistencia >= rank.min_resistencia) {
            ranking = rank.ranking;
        }
    });
    console.log(`${heroi.nome} \t ${heroi.genero} \t ${heroi.forca} \t ${heroi.velocidade} \t ${heroi.resistencia} \t ${ranking}`)
});