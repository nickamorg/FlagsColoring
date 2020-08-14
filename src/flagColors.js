const flagColors = {
    // EU
    ad: ['#0018A8', '#FEDF00', '#D0103A'],
    al: ['#E41E20', '#000', '#000'],
    at: ['#ED2939', '#fff', '#ED2939'],
    be: ['#000', '#FAE042', '#ED2939'],
    bg: ['#fff', '#00966E', '#D62612'],
    by: ['#4AA657', '#C8313E'],
    ch: ['#D52B1E', '#fff', '#fff'],
    cy: ['#fff', '#435125', '#435125', '#D47600'],
    cz: ['#fff', '#D7141A', '#11457E'],
    de: ['#000', '#DD0000', '#FFCE00'],
    dk: ['#C60C30', '#fff', '#fff'],
    ee: ['#4891D9', '#000', '#fff'],
    es: ['#C60B1E', '#FFC400', '#C60B1E'],
    fi: ['#fff', '#003580', '#003580'],
    fr: ['#002395', '#fff', '#ED2939'],
    hr: ['red', '#fff', '#171796'],
    hu: ['#CD2A3E', '#fff', '#436F4D'],
    ie: ['#169B62', '#fff', '#FF883E'],
    is: ['#003897', '#fff', '#fff', '#D72828', '#D72828'],
    it: ['#009246', '#fff', '#CE2B37'],
    li: ['#002B7F', '#CE1126'],
    lt: ['#FDB913', '#006A44', '#C1272D'],
    lu: ['#ED2939', '#fff', '#00A1DE'],
    lv: ['#9E3039', '#fff', '#9E3039'],
    gb: ['#012169', '#fff', '#C8102E', '#fff', '#C8102E'],
    gr: ["#0D5EAF", '#fff', '#0D5EAF', '#0D5EAF', '#fff', '#fff'],
    me: ['#D3AE3B', '#C40308'],
    mk: ['#D20000', '#FFE600', '#FFE600'],
    mt: ['#fff', '#CF142B'],
    nl: ['#AE1C28', '#fff', '#21468B'],
    no: ['#EF2B2D', '#fff', '#fff', '#002868', '#002868'],
    pl: ['#fff', '#DC143C'],
    pt: ['#006600', 'red'],
    ro: ['#002B7F', '#FCD116', '#CE1126'],
    rs: ['#C6363C', '#0C4076', '#fff'],
    va: ['#FFE000', '#fff'],
    si: ['#fff', '#035EA5', '#EC2227'],
    se: ['#006AA7', '#FECC00', '#FECC00'],
    sk: ['#fff', '#0B4EA2', '#EE1C25', '#EE1C25', '#fff', '#0B4EA2'],
    md: ['#0046AE', '#FFD200', '#CC092F'],
    ua: ['#005BBB', '#FFD500'],
    fo: ['#fff', '#005BBB', '#005BBB', '#ED2939', '#ED2939'],

    // SA
    ar: ['#74ACDF', '#fff', '#74ACDF'],
    aw: ['#4189DD', '#F9D616', '#D21034'],
    bo: ['#D52B1E', '#F9E300', '#007934'],
    br: ['#009B3A', '#FEDF00'],
    cl: ['#D52B1E', '#fff', '#0039A6', '#fff'],
    co: ['#FCD116', '#003893', '#CE1126'],
    cw: ['#002B7F', '#F9E814', '#fff', '#fff'],
    ec: ['#FFDD00', '#034EA2', '#ED1C24'],
    gy: ['#009E49', '#fff', '#FCD116', '#000', '#CE1126'],
    py: ['#D52B1E', '#fff', '#0038A8'],
    sr: ['#377E3F', '#377E3F', '#fff', '#fff', '#B40A2D', '#ECC81D'],
    // fk
    ve: ['#FFCC00', '#00247D', '#CF142B', '#fff'],
    gf: ['#002395', '#fff', '#ED2939'],
    pe: ['#D91023', '#fff', '#D91023'],
    // gd
    tt: ['#CE1126', '#fff', '#000'],
    // uy

    // AS
    ae: ['#00732F', '#fff', '#000', 'red'],
    af: ['#000', '#BF0000', '#009900'],
    am: ['#D90012', '#0033A0', '#F2A800'],
    az: ['#00B9E4', '#ED2939', '#3F9C35', '#fff', '#fff'],
    bd: ['#006A4E', '#F42A41'],
    bn: ['#F7E017', '#fff', '#000'],
    bt: ['#FFD520', '#FF4E12'],
    id: ['#CE1126', '#fff'],
    in: ['#FF9933', '#fff', '#128807'],
    iq: ['#CE1126', '#fff', '#000000', '#007A3D'],
    il: ['#fff', '#0038B8', '#0038B8', '#fff'],
    jo: ['#000', '#fff', '#007A3D', '#CE1126', '#fff'],
    // kz: ['#00AFCA', '#FEC50C'],
    kg: ['#E8112D', '#FFEF00'],
    kh: ['#032EA1', '#E00025'],
    kr: ['#fff', '#C60C30', '#003478'],
    kw: ['#007A3D', '#fff', '#CE1126', '#000'],
    la: ['#CE1126', '#002868', '#CE1126', '#fff'],
    lb: ['#ED1C24', '#fff', '#ED1C24', '#00A651'],
    lk: ['#FFB700', '#005641', '#FF5B00', '#8D2029', '#FFB700', '#FFB700'],
    mm: ['#FECB00', '#34B233', '#EA2839', '#fff'],
    mn: ['#C4272F', '#015197', '#C4272F', '#F9CF02', '#F9CF02'],
    mv: ['#D21034', '#007E3A', '#fff'],
    my: ['#CC0001', '#fff', '#010066', '#FFCC00', '#FFCC00'],
    np: ['#DC143C', '#fff', '#fff'],
    om: ['#DB161B', '#fff', '#DB161B', '#008000'],
    ph: ['#0038A8', '#CE1126', '#fff', '#FCD116'],
    pk: ['#fff', '#01411C', '#fff', '#fff'],
    qa: ['#fff', '#8D1B3D'],
    sa: ['#006C35', '#fff'],
    sy: ['#CE1126', '#fff', '#000', '#007A3D', '#007A3D'],
    th: ['#A51931', '#fff', '#2D2A4A', '#fff', '#A51931'],
    tj: ['#CC0000', '#fff', '#006600'],
    // tm: 
    tl: ['#DC241F', '#FFC726', '#000', '#fff'],
    tr: ['#E30A17', '#fff', '#fff'],
    tw: ['#D52B1E', '#11457E', '#fff'],
    // uz:
    vn: ['#DA251D', '#FFFF00'],
    ye: ['#CE1126', '#fff', '#000'],
    hk: ['#DE2910', '#fff'],
    jp: ['#fff', '#BC002D'],
    ru: ['#fff', '#0039A6', '#D52B1E'],
    cn: ['#DE2910', '#FFDE00'],
    sg: ['#ED2939', '#fff', '#fff'],

    // NA
    ca: ['red', '#fff', 'red', 'red'],
    mx: ['#006847', '#fff', '#CE1126'],
    us: ['#B22234', '#fff', '#3C3B6E'],
    cr: ['#002b7f', '#fff', '#ce1126', '#002b7f'],
    dm: ['#006b3f', '#FCD116', '#fff', '#000', '#D41C30'],
    do: ['#fff', '#002d62', '#ce1126', '#002d62', '#ce1126'],
    sv: ['#0F47AF', '#fff', '#0F47AF'],
    gd: ['#ce1126', '#007a5e', '#fcd116', '#007a5e', '#fcd116', '#fcd116'],
    gp: ['#002395', '#fff', '#ED2939'],
    gt: ['#4997D0', '#fff', '#4997D0'],
    ht: ['#00209F', '#D21034'],
    jm: ['#009b3a', '#009b3a', '#fed100', '#000', '#000'],
    mq: ['#21428E', '#21428E', '#21428E', '#21428E', '#fff'],
    ni: ['#0067C6', '#fff', '#0067C6'],
    // kn: null,
    sx: ['#DC171D', '#012A87', '#FFF'],
    mf: ['#002395', '#fff', '#ED2939'],


    // AF
    ao: ['#CE1126', '#000', '#F9D616', '#F9D616', '#F9D616'],
    dz: ['#fff', '#006233', '#d21034', '#d21034'],
    bj: ['#e8112d', '#fcd116', '#008751'],
    bw: ['#75aadb', '#fff', '#000', '#75aadb'],
    bf: ['#009e49', '#ef2b2d', '#fcd116'],
    cm: ['#007a5e', '#ce1126', '#fcd116', '#fcd116'],
    cf: ['#ffce00', '#289728', '#fff', '#003082', '#D21034', '#ffce00', '#003082', '#fff', '#289728', '#ffce00'],
    td: ['#002664', '#FECB00', '#C60C30'],
    km: ['#FFC61E', '#FFF', '#CE1126', '#3A75C4', '#3D8E33', '#FFF'],
    cg: ['#009543', '#fbde4a', '#dc241f'],
    mg: ['#FC3D32', '#007E3A', '#fff'],
    cd: ['#007fff', '#007fff', '#f7d618', '#ce1021', '#f7d618'],
    dj: ['#6ab2e7', '#12ad2b', '#fff', '#d7141a'],
    eg: ['#CE1126', '#fff', '#000'],
    gq: ['#e32118', '#fff', '#3e9a00', '#0073ce'],
    er: ['#ea0437', '#4189dd', '#12ad2b', '#ffc726'],
    et: ['#078930', '#FCDD09', '#DA121A', '#0F47AF'],
    ga: ['#009E60', '#FCD116', '#3A75C4'],
    gm: ['#CE1126', '#fff', '#0C1C8C', '#3A7728'],
    gh: ['#CE1126', '#FCD116', '#006B3F', '#000'],
    gn: ['#CE1126', '#FCD116', '#009460'],
    gw: ['#CE1126', '#FCD116', '#009E49', '#000'],
    ci: ['#F77F00', '#fff', '#009E60'],
    ke: ['#000', '#fff', '#b00', '#060', '#b00'],
    ls: ['#00209F', '#fff', '#009543'],
    lr: null,
    ly: ['#E70013', '#000', '#239E46', '#fff', '#fff'],
    mw: ['#000', '#CE1126', '#339E35', '#CE1126'],
    ml: ['#14B53A', '#FCD116', '#CE1126'],
    mr: ['#CD2A3E', '#006233', '#CD2A3E', '#FFC400', '#FFC400'],
    yt: ['#002395', '#fff', '#ED2939'],
    ma: ['#C1272D'],
    mz: null,
    na: ['#003580', '#009543', '#fff', '#D21034', '#FFCE00'],
    ne: ['#E05206', '#fff', '#0DB02B', '#E05206'],
    ng: ['#008751', '#fff', '#008751'],
    rw: ['#00A1DE', '#FAD201', '#20603D', '#E5BE01'],
    sd: ['#D21034', '#fff', '#000', '#007229'],
    st: ['#12AD2B', '#FFCE00', '#12AD2B', '#D21034', '#000', '#000'],
    sn: ['#00853F', '#FDEF42', '#E31B23', '#00853F'],
    sl: ['#1EB53A', '#fff', '#0072C6'],
    so: ['#4189DD', '#fff'],
    za: ['#de3831', '#002395', '#fff', '#007a4d', '#ffb612', '#000'],
    ss: null,
    sz: ['#3e5eb9', '#ffd900', '#b10c0c', '#3e5eb9', '#fff', "#000"],
    tz: ['#00A3DD', '#1EB53A', '#FCD116', '#000'],
    tg: ['#006A4E', '#FFCE00', '#006A4E', '#FFCE00', '#006A4E', '#D21034', '#fff'],
    tn: ['#E70013', '#fff', '#E70013', '#E70013'],
    ug: ['#000', '#FCDC04', '#D90000', '#000', '#FCDC04', '#D90000'],
    eh: ['#000', '#fff', '#007A3D', '#C4111B', '#C4111B'],
    zm: ['#198A00', '#de2010', '#000', '#EF7D00'],
    zw: ['#319208', '#FFD200', '#de2010', '#000', '#de2010', '#FFD200', '#319208', '#fff', '#de2010'],
    // OC
    // au: null,
    // fj: null,
    nc: ['#0035AD', '#ED4135', '#009543', '#FAE600'],
    pg: ['#000', '#CE1126', '#FCD116', '#fff'],
    sb: ['#0051ba', '#215b33', '#fff', '#fcd116'],
    vu: ['#D21034', '#009543', '#000', '#FDCE12', '#000', '#FDCE12']
}

export { flagColors }; 