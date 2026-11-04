const BOOKS = [
    {
        "id": "1",
        "name": "Die Geheimnisse des Ozeans",
        "img": "ocean.jpg",
        "imgAlt": "Ein Ozean.",
        "author": "Clara Meer",
        "likes": 1250,
        "liked": true,
        "price": 19.99,
        "publishedYear": 2018,
        "genre": "Fantasy",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
            },
            {
                "name": "Bookworm84",
                "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
            },
            {
                "name": "FantasyFanatic",
                "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
            },
            {
                "name": "SciFiGuru",
                "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
            },
            {
                "name": "NovelLover",
                "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
            }
        ]
    },
    {
        "id": "2",
        "name": "Der vergessene Pfad",
        "img": "path.jpg",
        "imgAlt": "Ein verborgener Pfad im Grünen.",
        "author": "Maximilian Schwarz",
        "likes": 980,
        "liked": false,
        "price": 14.50,
        "publishedYear": 2021,
        "genre": "Fantasy",
        "comments": []
    },
    {
        "id": "3",
        "name": "Die Farben des Himmels",
        "img": "sky.jpg",
        "imgAlt": "Der Himmel über einer Wiese mit Baum in der Mitte.",
        "author": "Laura Blau",
        "likes": 1520,
        "liked": true,
        "price": 22.95,
        "publishedYear": 2019,
        "genre": "Romantik",
        "comments": [
            {
                "name": "LeserPeter",
                "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
            },
            {
                "name": "BookLover21",
                "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
            },
            {
                "name": "FantasyNerd",
                "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
            },
            {
                "name": "SciFiEnthusiast",
                "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
            },
            {
                "name": "ReadingAddict",
                "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
            }
        ]
    },
    {
        "id": "4",
        "name": "Das Rätsel der Zeit",
        "img": "time.jpg",
        "imgAlt": "Eine alte Taschenuhr im Sand.",
        "author": "Alexander Weiss",
        "likes": 750,
        "liked": false,
        "price": 18.00,
        "publishedYear": 2020,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "BuchKenner",
                "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
            },
            {
                "name": "LeseWurm",
                "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
            }
        ]
    },
    {
        "id": "5",
        "name": "Der letzte Wächter",
        "img": "sentinel.png",
        "imgAlt": "Ein Engel in einer Rüstung.",
        "author": "Sabine Grün",
        "likes": 1300,
        "liked": true,
        "price": 16.75,
        "publishedYear": 2017,
        "genre": "Fantasy",
        "comments": []
    },
    {
        "id": "6",
        "name": "Im Schatten des Mondes",
        "img": "moon.jpg",
        "imgAlt": "Der Mond am Nachthimmel.",
        "author": "Philipp Silber",
        "likes": 890,
        "liked": false,
        "price": 12.30,
        "publishedYear": 2022,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "BücherLiebhaber",
                "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
            },
            {
                "name": "Leseratte",
                "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
            }
        ]
    },
    {
        "id": "6",
        "name": "Jenseits der Sterne",
        "img": "stars.webp",
        "imgAlt": "Die Sterne im All, ein Raumschiff fliegt auf sie zu.",
        "author": "Oliver Schwarz",
        "likes": 1450,
        "liked": true,
        "price": 21.00,
        "publishedYear": 2015,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
            }
        ]
    },
    {
        "id": "7",
        "name": "Das verborgene Königreich",
        "img": "kingdom.jpg",
        "imgAlt": "Türme auf Felsen, oberhalb der Wolkenlinie.",
        "author": "Elena Gold",
        "likes": 920,
        "liked": false,
        "price": 17.50,
        "publishedYear": 2020,
        "genre": "Fantasy",
        "comments": [
            {
                "name": "Bookworm92",
                "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
            }
        ]
    },
    {
        "id": "8",
        "name": "Liebe in Zeiten des Krieges",
        "img": "war_love.jpg",
        "imgAlt": "Ein küssendes Paar mit Kleidung der 1940er Jahre.",
        "author": "Emilia Rot",
        "likes": 1800,
        "liked": true,
        "price": 19.99,
        "publishedYear": 2016,
        "genre": "Romantik",
        "comments": [
            {
                "name": "Bibliophile23",
                "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
            },
            {
                "name": "StorySeeker",
                "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
            },
            {
                "name": "SciFiExplorer",
                "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
            }
        ]
    }
]