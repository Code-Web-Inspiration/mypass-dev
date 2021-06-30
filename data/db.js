//... DATABASES ...

export default {
    projetName: 'mypass',

    bannerEvents: {
        bannerImg: 'https://images.pexels.com/photos/3216865/pexels-photo-3216865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        bannerAtl: 'events banner',
    },

    filters: {
        dates: ["Aujourd'hui", "Demain", "Cette semaine", "Ce mois", "Mois prochain"],
        status: ["Déjà passé", "En cours", "A venir"],
        countries: ["Cote d'Ivoire", "Togo", "Gbana", "Mali", "Senegale", "Egypte", "Burkina Fasso", "Congo", "France"],
        city: [],
        entries: ["Gratuite", "Payante"],
    },

    categories: [
        'Tous les événements',
        'Arts',
        'Cadeaux et bons',
        'Cours et ateliers',
        'Films et cinéma',
        'Gastronomie',
        'Loisirs',
        'Musique et concert',
        'Networking et meetup',
        'Rencontres professionnelles',
        'Soirées et fêtes',
        'Sports',
        'Autres',
    ],

    articles: [
        {
            id: 1, 
            title: 'Lorem Ipsum Title Article', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit accusantium nihil perferendis alias illo numquam incidunt doloribus, commodi quis harum esse quidem cumque, enim optio eum sapiente, quos earum.',
            thumb: 'https://images.pexels.com/photos/3216865/pexels-photo-3216865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            date: new Date().toDateString(),
            author: {
                name: 'Pape djouf',
                profil: 'https://images.pexels.com/photos/3216865/pexels-photo-3216865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            },
            price: '300'.padEnd(',00'),
        },
        {
            id: 2, 
            title: 'Lorem Ipsum Title Article', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit accusantium nihil perferendis alias illo numquam incidunt doloribus, commodi quis harum esse quidem cumque, enim optio eum sapiente, quos earum.',
            thumb: 'https://images.pexels.com/photos/3473085/pexels-photo-3473085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            date: new Date().toDateString(),
            author: {
                name: 'Alvin Doua',
                profil: 'https://images.pexels.com/photos/3473085/pexels-photo-3473085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            },
            price: '800'.padEnd(',00'),
        },
        {
            id: 3, 
            title: 'Lorem Ipsum Title Article', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit accusantium nihil perferendis alias illo numquam incidunt doloribus, commodi quis harum esse quidem cumque, enim optio eum sapiente, quos earum.',
            thumb: 'https://images.pexels.com/photos/1928131/pexels-photo-1928131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            date: new Date().toDateString(),
            author: {
                name: 'Prince Karos',
                profil: 'https://images.pexels.com/photos/1928131/pexels-photo-1928131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            },
            price: '500'.padEnd(',00'),
        },
        {
            id: 4, 
            title: 'Lorem Ipsum Title Article', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit accusantium nihil perferendis alias illo numquam incidunt doloribus, commodi quis harum esse quidem cumque, enim optio eum sapiente, quos earum.',
            thumb: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            date: new Date().toDateString(),
            author: {
                name: 'Jack Datorie',
                profil: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            },
            price: '0'.padEnd(',00'),
        },
        {
            id: 5, 
            title: 'Lorem Ipsum Title Article', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit accusantium nihil perferendis alias illo numquam incidunt doloribus, commodi quis harum esse quidem cumque, enim optio eum sapiente, quos earum.',
            thumb: 'https://images.pexels.com/photos/3216865/pexels-photo-3216865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            date: new Date().toDateString(),
            author: {
                name: 'Jane Daniel',
                profil: 'https://images.pexels.com/photos/3216865/pexels-photo-3216865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            },
            price: '500'.padEnd(',00'),
        },
        {
            id: 6, 
            title: 'Lorem Ipsum Title Article', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit accusantium nihil perferendis alias illo numquam incidunt doloribus, commodi quis harum esse quidem cumque, enim optio eum sapiente, quos earum.',
            thumb: 'https://images.pexels.com/photos/3473085/pexels-photo-3473085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            date: new Date().toDateString(),
            author: {
                name: 'Mark darcaskos',
                profil: 'https://images.pexels.com/photos/3473085/pexels-photo-3473085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            },
            price: '1000'.padEnd(',00'),
        },
        {
            id: 7, 
            title: 'Lorem Ipsum Title Article', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit accusantium nihil perferendis alias illo numquam incidunt doloribus, commodi quis harum esse quidem cumque, enim optio eum sapiente, quos earum.',
            thumb: 'https://images.pexels.com/photos/1928131/pexels-photo-1928131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            date: new Date().toDateString(),
            author: {
                name: 'John doe',
                profil: 'https://images.pexels.com/photos/1928131/pexels-photo-1928131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            },
            price: '80'.padEnd(',00'),
        },
        {
            id: 8, 
            title: 'Lorem Ipsum Title Article', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit accusantium nihil perferendis alias illo numquam incidunt doloribus, commodi quis harum esse quidem cumque, enim optio eum sapiente, quos earum.',
            thumb: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            date: new Date().toDateString(),
            // country: this.filters.countries,
            author: {
                name: 'Isaac Loucou',
                profil: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            },
            price: '500'.padEnd(',00'),
        },
    ],

    partners: {
        banner: '/partners.png',
        bannerAtl: 'partners banner',
    }

};

