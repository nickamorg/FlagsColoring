const flagColors = {
    // EU
    ad: ['#0018A8', '#FEDF00', '#D0103A'],
    al: ['#E41E20', 'black', 'black'],
    at: ['#ED2939', 'white', '#ED2939'],
    be: ['black', '#FAE042', '#ED2939'],
    bg: ['white', '#00966E', '#D62612'],
    by: ['#4AA657', '#C8313E'],
    ch: ['#D52B1E', 'white', 'white'],
    cy: ['white', '#435125', '#435125', '#D47600'],
    cz: ['white', '#D7141A', '#11457E'],
    de: ['black', '#DD0000', '#FFCE00'],
    dk: ['#C60C30', 'white', 'white'],
    ee: ['#4891D9', 'black', 'white'],
    es: ['#C60B1E', '#FFC400', '#C60B1E'],
    fi: ['white', '#003580', '#003580'],
    fr: ['#002395', 'white', '#ED2939'],
    hr: ['#FF0000', 'white', '#171796'],
    hu: ['#CD2A3E', 'white', '#436F4D'],
    ie: ['#169B62', 'white', '#FF883E'],
    is: ['#003897', 'white', '#D72828'],
    it: ['#009246', 'white', '#CE2B37'],
    li: ['#002B7F', '#CE1126'],
    lt: ['#FDB913', '#006A44', '#C1272D'],
    lv: ['#9E3039', 'white', '#9E3039'],
    gb: ['#012169', 'white', '#C8102E', 'white', '#C8102E'],
    gr: ["#0D5EAF", 'white', '#0D5EAF', '#0D5EAF', 'white', 'white'],
    me: ['#D3AE3B', '#C40308'],
    mk: ['#D20000', '#FFE600', '#FFE600'],
    mt: ['white', '#CF142B'],
    nl: ['#AE1C28', 'white', '#21468B'],
    no: ['#EF2B2D', 'white', 'white', '#002868', '#002868'],
    pl: ['white', '#DC143C'],
    pt: ['#006600', '#FF0000'],
    ro: ['#002B7F', '#FCD116', '#CE1126'],
    rs: ['#C6363C', '#0C4076', 'white'],
    va: ['#FFE000', 'white'],
    si: ['white', '#035EA5', '#EC2227'],
    se: ['#006AA7', '#FECC00', '#FECC00'],
    sk: ['white', '#0B4EA2', '#EE1C25', '#EE1C25', 'white', '#0B4EA2'],
    md: ['#0046AE', '#FFD200', '#CC092F'],
    ua: ['#005BBB', '#FFD500'],
    fo: ['white', '#005BBB', '#005BBB', '#ED2939', '#ED2939'],

    // SA
    ar: ['#74ACDF', 'white', '#74ACDF'],
    aw: ['#4189DD', '#F9D616', '#D21034'],
    bo: ['#D52B1E', '#F9E300', '#007934'],
    br: ['#009B3A', '#FEDF00'],
    cl: ['#D52B1E', 'white', '#0039A6', 'white'],
    co: ['#FCD116', '#003893', '#CE1126'],
    cw: ['#002B7F', '#F9E814', 'white', 'white'],
    ec: ['#FFDD00', '#034EA2', '#ED1C24'],
    gy: ['#009E49', 'white', '#FCD116', 'black', '#CE1126'],
    py: ['#D52B1E', 'white', '#0038A8'],
    sr: ['#377E3F', '#377E3F', 'white', 'white', '#B40A2D', '#ECC81D'],
    // fk
    ve: ['#FFCC00', '#00247D', '#CF142B', 'white'],
    gf: ['#002395', 'white', '#ED2939'],
    pe: ['#D91023', 'white', '#D91023'],
    // gd
    tt: ['#CE1126', 'white', 'black'],
    // uy

    // AS
    ae: ['#00732F', 'white', 'black', '#FF0000'],
    af: ['black', '#BF0000', '#009900'],
    am: ['#D90012', '#0033A0', '#F2A800'],
    az: ['#00B9E4', '#ED2939', '#3F9C35', 'white', 'white'],
    bd: ['#006A4E', '#F42A41'],
    bn: ['#F7E017', 'white', 'black'],
    bt: ['#FFD520', '#FF4E12'],
    id: ['#CE1126', 'white'],
    in: ['#FF9933', 'white', '#128807'],
    iq: ['#CE1126', 'white', '#000000', '#007A3D'],
    il: ['white', '#0038B8', '#0038B8', 'white'],
    jo: ['black', 'white', '#007A3D', '#CE1126', 'white'],
    // kz: ['#00AFCA', '#FEC50C'],
    kg: ['#E8112D', '#FFEF00'],
    kh: ['#032EA1', '#E00025'],
    kr: ['white', '#C60C30', '#003478'],
    kw: ['#007A3D', 'white', '#CE1126', 'black'],
    la: ['#CE1126', '#002868', '#CE1126', 'white'],
    lb: ['#ED1C24', 'white', '#ED1C24', '#00A651'],
    lk: ['#FFB700', '#005641', '#FF5B00', '#8D2029', '#FFB700', '#FFB700'],
    mm: ['#FECB00', '#34B233', '#EA2839', 'white'],
    mn: ['#C4272F', '#015197', '#C4272F', '#F9CF02', '#F9CF02'],
    mv: ['#D21034', '#007E3A', 'white'],
    my: ['#CC0001', 'white', '#010066', '#FFCC00', '#FFCC00'],
    np: ['#DC143C', 'white', 'white'],
    om: ['#DB161B', 'white', '#DB161B', '#008000'],
    ph: ['#0038A8', '#CE1126', 'white', '#FCD116'],
    pk: ['white', '#01411C', 'white', 'white'],
    qa: ['white', '#8D1B3D'],
    sa: ['#006C35', 'white'],
    sy: ['#CE1126', 'white', 'black', '#007A3D', '#007A3D'],
    th: ['#A51931', 'white', '#2D2A4A', 'white', '#A51931'],
    tj: ['#CC0000', 'white', '#006600'],
    // tm: 
    tl: ['#DC241F', '#FFC726', 'black', 'white'],
    tr: ['#E30A17', 'white', 'white'],
    tw: ['#D52B1E', '#11457E', 'white'],
    // uz:
    vn: ['#DA251D', '#FFFF00'],
    ye: ['#CE1126', 'white', 'black'],
    hk: ['#DE2910', 'white'],
    jp: ['white', '#BC002D'],
    ru: ['white', '#0039A6', '#D52B1E'],
    cn: ['#DE2910', '#FFDE00'],
    cd: ['#007FFF', '#F7D618', '#CE1021', '#F7D618'],
    sg: ['#ED2939', 'white', 'white'],

    // NA
    ca: ['#FF0000', 'white', '#FF0000', '#FF0000'],
    mx: ['#006847', 'white', '#CE1126'],
    us: ['#B22234', 'white', '#3C3B6E'],

    // AF
    ao: ['#CE1126', 'black', '#F9D616', '#F9D616', '#F9D616'],
    eg: ['#CE1126', 'white', 'black'],
    mg: ['#FC3D32', '#007E3A', 'white'],

    // OC
    nc: ['#002395', 'white', '#ED2939'],
    pg: ['black', '#CE1126', '#FCD116', 'white'],
    vu: ['#D21034', '#009543', 'black', '#FDCE12', 'black', '#FDCE12']
}

export { flagColors }; 