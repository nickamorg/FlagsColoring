const continentDefs = {
    EU: {
        min2unlock: 15,
        total: 48,
        name: 'Europe',
        img: require('../assets/continents/eu.png')
    },
    NA: {
        min2unlock: 0,
        total: 3,
        name: 'North America',
        img: require('../assets/continents/na.png')
    },
    SA: {
        min2unlock: 3,
        total: 20,
        name: 'South America',
        img: require('../assets/continents/sa.png')
    },
    OC: {
        min2unlock: 100,
        total: 15,
        name: 'Oceania',
        img: require('../assets/continents/oc.png')
    },
    AS: {
        min2unlock: 75,
        total: 45,
        name: 'Asia',
        img: require('../assets/continents/as.png')
    },
    AF: {
        min2unlock: 40,
        total: 58,
        name: 'Africa',
        img: require('../assets/continents/af.png')
    },
    total: 146
}

export { continentDefs }; 