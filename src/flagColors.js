const flagColors = {
    // EU
    ad: ['#0018A8', '#FEDF00', '#D0103A'],
    al: ['#E41E20', '#000000', '#000000'],
    at: ['#ED2939', '#ffffff', '#ED2939'],
    be: ['#000000', '#FAE042', '#ED2939'],
    bg: ['#ffffff', '#00966E', '#D62612'],
    by: ['#4AA657', '#C8313E'],
    ch: ['#D52B1E', '#ffffff', '#ffffff'],
    cy: ['#ffffff', '#435125', '#435125', '#D47600'],
    cz: ['#ffffff', '#D7141A', '#11457E'],
    de: ['#000000', '#DD0000', '#FFCE00'],
    dk: ['#C60C30', '#ffffff', '#ffffff'],
    ee: ['#4891D9', '#000000', '#ffffff'],
    es: ['#C60B1E', '#FFC400', '#C60B1E'],
    fi: ['#ffffff', '#003580', '#003580'],
    fr: ['#002395', '#ffffff', '#ED2939'],
    hr: ['#ff0000', '#ffffff', '#171796'],
    hu: ['#CD2A3E', '#ffffff', '#436F4D'],
    ie: ['#169B62', '#ffffff', '#FF883E'],
    is: ['#003897', '#ffffff', '#ffffff', '#D72828', '#D72828'],
    it: ['#009246', '#ffffff', '#CE2B37'],
    li: ['#002B7F', '#CE1126'],
    lt: ['#FDB913', '#006A44', '#C1272D'],
    lu: ['#ED2939', '#ffffff', '#00A1DE'],
    lv: ['#9E3039', '#ffffff', '#9E3039'],
    gb: ['#012169', '#ffffff', '#C8102E', '#ffffff', '#C8102E'],
    gr: ["#0D5EAF", '#ffffff', '#0D5EAF', '#0D5EAF', '#ffffff', '#ffffff'],
    me: ['#D3AE3B', '#C40308'],
    mk: ['#D20000', '#FFE600', '#FFE600'],
    mt: ['#ffffff', '#CF142B'],
    nl: ['#AE1C28', '#ffffff', '#21468B'],
    no: ['#EF2B2D', '#ffffff', '#ffffff', '#002868', '#002868'],
    pl: ['#ffffff', '#DC143C'],
    pt: ['#006600', '#ff0000'],
    ro: ['#002B7F', '#FCD116', '#CE1126'],
    rs: ['#C6363C', '#0C4076', '#ffffff'],
    va: ['#FFE000', '#ffffff'],
    si: ['#ffffff', '#035EA5', '#EC2227'],
    se: ['#006AA7', '#FECC00', '#FECC00'],
    sk: ['#ffffff', '#0B4EA2', '#EE1C25', '#EE1C25', '#ffffff', '#0B4EA2'],
    md: ['#0046AE', '#FFD200', '#CC092F'],
    ua: ['#005BBB', '#FFD500'],
    fo: ['#ffffff', '#005BBB', '#005BBB', '#ED2939', '#ED2939'],

    // SA
    ar: ['#74ACDF', '#ffffff', '#74ACDF'],
    aw: ['#4189DD', '#F9D616', '#D21034'],
    bo: ['#D52B1E', '#F9E300', '#007934'],
    br: ['#009B3A', '#FEDF00'],
    cl: ['#D52B1E', '#ffffff', '#0039A6', '#ffffff'],
    co: ['#FCD116', '#003893', '#CE1126'],
    cw: ['#002B7F', '#F9E814', '#ffffff', '#ffffff'],
    ec: ['#FFDD00', '#034EA2', '#ED1C24'],
    gy: ['#009E49', '#ffffff', '#FCD116', '#000000', '#CE1126'],
    py: ['#D52B1E', '#ffffff', '#0038A8'],
    sr: ['#377E3F', '#377E3F', '#ffffff', '#ffffff', '#B40A2D', '#ECC81D'],
    // fk
    ve: ['#FFCC00', '#00247D', '#CF142B', '#ffffff'],
    gf: ['#002395', '#ffffff', '#ED2939'],
    pe: ['#D91023', '#ffffff', '#D91023'],
    // gd
    tt: ['#CE1126', '#ffffff', '#000000'],
    // uy

    // AS
    ae: ['#00732F', '#ffffff', '#000000', '#ff0000'],
    af: ['#000000', '#BF0000', '#009900'],
    am: ['#D90012', '#0033A0', '#F2A800'],
    az: ['#00B9E4', '#ED2939', '#3F9C35', '#ffffff', '#ffffff'],
    bd: ['#006A4E', '#F42A41'],
    bn: ['#F7E017', '#ffffff', '#000000'],
    bt: ['#FFD520', '#FF4E12'],
    id: ['#CE1126', '#ffffff'],
    in: ['#FF9933', '#ffffff', '#128807'],
    iq: ['#CE1126', '#ffffff', '#000000', '#007A3D'],
    il: ['#ffffff', '#0038B8', '#0038B8', '#ffffff'],
    jo: ['#000000', '#ffffff', '#007A3D', '#CE1126', '#ffffff'],
    // kz: ['#00AFCA', '#FEC50C'],
    kg: ['#E8112D', '#FFEF00'],
    kh: ['#032EA1', '#E00025'],
    kr: ['#ffffff', '#C60C30', '#003478'],
    kw: ['#007A3D', '#ffffff', '#CE1126', '#000000'],
    la: ['#CE1126', '#002868', '#CE1126', '#ffffff'],
    lb: ['#ED1C24', '#ffffff', '#ED1C24', '#00A651'],
    lk: ['#FFB700', '#005641', '#FF5B00', '#8D2029', '#FFB700', '#FFB700'],
    mm: ['#FECB00', '#34B233', '#EA2839', '#ffffff'],
    mn: ['#C4272F', '#015197', '#C4272F', '#F9CF02', '#F9CF02'],
    mv: ['#D21034', '#007E3A', '#ffffff'],
    my: ['#CC0001', '#ffffff', '#010066', '#FFCC00', '#FFCC00'],
    np: ['#DC143C', '#ffffff', '#ffffff'],
    om: ['#DB161B', '#ffffff', '#DB161B', '#008000'],
    ph: ['#0038A8', '#CE1126', '#ffffff', '#FCD116'],
    pk: ['#ffffff', '#01411C', '#ffffff', '#ffffff'],
    qa: ['#ffffff', '#8D1B3D'],
    sa: ['#006C35', '#ffffff'],
    sy: ['#CE1126', '#ffffff', '#000000', '#007A3D', '#007A3D'],
    th: ['#A51931', '#ffffff', '#2D2A4A', '#ffffff', '#A51931'],
    tj: ['#CC0000', '#ffffff', '#006600'],
    // tm: 
    tl: ['#DC241F', '#FFC726', '#000000', '#ffffff'],
    tr: ['#E30A17', '#ffffff', '#ffffff'],
    tw: ['#D52B1E', '#11457E', '#ffffff'],
    // uz:
    vn: ['#DA251D', '#FFFF00'],
    ye: ['#CE1126', '#ffffff', '#000000'],
    hk: ['#DE2910', '#ffffff'],
    jp: ['#ffffff', '#BC002D'],
    ru: ['#ffffff', '#0039A6', '#D52B1E'],
    cn: ['#DE2910', '#FFDE00'],
    sg: ['#ED2939', '#ffffff', '#ffffff'],

    // NA
    ca: ['#ff0000', '#ffffff', '#ff0000', '#ff0000'],
    mx: ['#006847', '#ffffff', '#CE1126'],
    us: ['#B22234', '#ffffff', '#3C3B6E'],

    // AF
    ao: ['#CE1126', '#000000', '#F9D616', '#F9D616', '#F9D616'],
    dz: ['#ffffff', '#006233', '#d21034', '#d21034'],
    bj: ['#e8112d', '#fcd116', '#008751'],
    bw: ['#75aadb', '#ffffff', '#000000', '#75aadb'],
    bf: ['#009e49', '#ef2b2d', '#fcd116'],
    cm: ['#007a5e', '#ce1126', '#fcd116', '#fcd116'],
    cf: ['#ffce00', '#289728', '#ffffff', '#003082', '#D21034', '#ffce00', '#003082', '#ffffff', '#289728', '#ffce00'],
    td: ['#002664', '#FECB00', '#C60C30'],
    km: ['#FFC61E', '#ffffff', '#CE1126', '#3A75C4', '#3D8E33', '#ffffff'],
    cg: ['#009543', '#fbde4a', '#dc241f'],
    mg: ['#FC3D32', '#007E3A', '#ffffff'],
    cd: ['#007fff', '#007fff', '#f7d618', '#ce1021', '#f7d618'],
    dj: ['#6ab2e7', '#12ad2b', '#ffffff', '#d7141a'],
    eg: ['#CE1126', '#ffffff', '#000000'],
    gq: ['#e32118', '#ffffff', '#3e9a00', '#0073ce'],
    er: ['#ea0437', '#4189dd', '#12ad2b', '#ffc726'],
    et: ['#078930', '#FCDD09', '#DA121A', '#0F47AF'],
    ga: ['#009E60', '#FCD116', '#3A75C4'],
    gm: ['#CE1126', '#ffffff', '#0C1C8C', '#3A7728'],
    gh: ['#CE1126', '#FCD116', '#006B3F', '#000000'],
    gn: ['#CE1126', '#FCD116', '#009460'],
    gw: ['#CE1126', '#FCD116', '#009E49', '#000000'],
    ci: ['#F77F00', '#ffffff', '#009E60'],
    ke: ['#000000', '#ffffff', '#b00', '#060', '#b00'],
    ls: ['#00209F', '#ffffff', '#009543'],
    lr: ['#00209F', '#ffffff', '#009543'], //null,
    ly: ['#E70013', '#000000', '#239E46', '#ffffff', '#ffffff'],
    mw: ['#000000', '#CE1126', '#339E35', '#CE1126'],
    ml: ['#14B53A', '#FCD116', '#CE1126'],
    mr: ['#CD2A3E', '#006233', '#CD2A3E', '#FFC400', '#FFC400'],
    yt: ['#002395', '#ffffff', '#ED2939'],
    ma: ['#C1272D'],
    mz: ['#C1272D'], //null,
    na: ['#003580', '#009543', '#ffffff', '#D21034', '#FFCE00'],
    ne: ['#E05206', '#ffffff', '#0DB02B', '#E05206'],
    ng: ['#008751', '#ffffff', '#008751'],
    rw: ['#00A1DE', '#FAD201', '#20603D', '#E5BE01'],
    sd: ['#D21034', '#ffffff', '#000000', '#007229'],
    st: ['#12AD2B', '#FFCE00', '#12AD2B', '#D21034', '#000000', '#000000'],
    sn: ['#00853F', '#FDEF42', '#E31B23', '#00853F'],
    sl: ['#1EB53A', '#ffffff', '#0072C6'],
    so: ['#4189DD', '#ffffff'],
    za: ['#de3831', '#002395', '#ffffff', '#007a4d', '#ffb612', '#000000'],
    ss: ['#4189DD', '#ffffff'], //null,
    sz: ['#3e5eb9', '#ffd900', '#b10c0c', '#3e5eb9', '#ffffff', '#000000'],
    tz: ['#00A3DD', '#1EB53A', '#FCD116', '#000000'],
    tg: ['#006A4E', '#FFCE00', '#006A4E', '#FFCE00', '#006A4E', '#D21034', '#ffffff'],
    tn: ['#E70013', '#ffffff', '#E70013', '#E70013'],
    ug: ['#000000', '#FCDC04', '#D90000', '#000000', '#FCDC04', '#D90000'],
    eh: ['#000000', '#ffffff', '#007A3D', '#C4111B', '#C4111B'],
    zm: ['#198A00', '#de2010', '#000000', '#EF7D00'],
    zw: ['#319208', '#FFD200', '#de2010', '#000000', '#de2010', '#FFD200', '#319208', '#ffffff', '#de2010'],
    // OC
    nc: ['#002395', '#ffffff', '#ED2939'],
    pg: ['#000000', '#CE1126', '#FCD116', '#ffffff'],
    vu: ['#D21034', '#009543', '#000000', '#FDCE12', '#000000', '#FDCE12']
}

export { flagColors }; 