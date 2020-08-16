const flagColors = {
    AF: {
        dz: ['#FFF', '#006233', '#D21034', '#D21034'],
        ao: ['#CE1126', '#000', '#F9D616', '#F9D616', '#F9D616'],
        bj: ['#E8112D', '#FCD116', '#008751'],
        bw: ['#75AADB', '#FFF', '#000', '#75AADB'],
        bf: ['#009E49', '#EF2B2D', '#FCD116'],
        bi: ['#1EB53A', '#1EB53A', '#CE1126', '#CE1126', '#FFF', '#CE1126'],
        cm: ['#007A5e', '#CE1126', '#FCD116', '#FCD116'],
        cf: ['#FFCE00', '#289728', '#FFF', '#003082', '#D21034', '#FFCE00', '#003082', '#FFF', '#289728', '#FFCE00'],
        td: ['#002664', '#FECB00', '#C60C30'],
        km: ['#FFC61E', '#FFF', '#CE1126', '#3A75C4', '#3D8E33', '#FFF'],
        cg: ['#009543', '#FBDE4A', '#DC241F'],
        cd: ['#007FFF', '#007FFF', '#F7D618', '#CE1021', '#F7D618'],
        dj: ['#6AB2E7', '#12AD2B', '#FFF', '#D7141A'],
        eg: ['#CE1126', '#FFF', '#000'],
        gq: ['#E32118', '#FFF', '#3E9A00', '#0073CE'],
        er: ['#EA0437', '#4189DD', '#12AD2B', '#FFC726'],
        et: ['#078930', '#FCDD09', '#DA121A', '#0F47AF'],
        ga: ['#009E60', '#FCD116', '#3A75C4'],
        gm: ['#CE1126', '#FFF', '#0C1C8C', '#3A7728'],
        gh: ['#CE1126', '#FCD116', '#006B3F', '#000'],
        gn: ['#CE1126', '#FCD116', '#009460'],
        gw: ['#CE1126', '#FCD116', '#009E49', '#000'],
        ci: ['#F77F00', '#FFF', '#009E60'],
        ke: ['#000', '#FFF', '#B00', '#060', '#B00'],
        ls: ['#00209F', '#FFF', '#009543'],
        lr: ['#BF0A30', '#FFF', '#002868', '#FFF'],
        ly: ['#E70013', '#000', '#239E46', '#FFF', '#FFF'],
        mg: ['#FC3D32', '#007E3A', '#FFF'],
        mw: ['#000', '#CE1126', '#339E35', '#CE1126'],
        ml: ['#14B53A', '#FCD116', '#CE1126'],
        mr: ['#CD2A3E', '#006233', '#CD2A3E', '#FFC400', '#FFC400'],
        yt: ['#002395', '#FFF', '#ED2939'],
        ma: ['#C1272D'],
        mz: ['#FCE100', '#000', '#007168', '#FFF', '#D21034'],
        na: ['#003580', '#009543', '#FFF', '#D21034', '#FFCE00'],
        ne: ['#E05206', '#FFF', '#0DB02B', '#E05206'],
        ng: ['#008751', '#FFF', '#008751'],
        rw: ['#00A1DE', '#FAD201', '#20603D', '#E5BE01'],
        sd: ['#D21034', '#FFF', '#000', '#007229'],
        st: ['#12AD2B', '#FFCE00', '#12AD2B', '#D21034', '#000', '#000'],
        sn: ['#00853F', '#FDEF42', '#E31B23', '#00853F'],
        sl: ['#1EB53A', '#FFF', '#0072C6'],
        so: ['#4189DD', '#FFF'],
        za: ['#DE3831', '#002395', '#FFF', '#007A4D', '#FFB612', '#000'],
        ss: ['#078930', '#DA121A', '#000', '#FFF', '#0F47AF', '#FCDD09'],
        sz: ['#3E5EB9', '#FFD900', '#B10C0C', '#3E5EB9', '#FFF', "#000"],
        tz: ['#00A3DD', '#1EB53A', '#FCD116', '#000'],
        tg: ['#006A4E', '#FFCE00', '#006A4E', '#FFCE00', '#006A4E', '#D21034', '#FFF'],
        tn: ['#E70013', '#FFF', '#E70013', '#E70013'],
        ug: ['#000', '#FCDC04', '#D90000', '#000', '#FCDC04', '#D90000', '#FFF'],
        eh: ['#000', '#FFF', '#007A3D', '#C4111B', '#C4111B'],
        zm: ['#198A00', '#DE2010', '#000', '#EF7D00'],
        zw: ['#319208', '#FFD200', '#DE2010', '#000', '#DE2010', '#FFD200', '#319208', '#FFF', '#DE2010']
    },
    AS: {
        ae: ['#00732F', '#FFF', '#000', 'red'],
        af: ['#000', '#BF0000', '#009900'],
        am: ['#D90012', '#0033A0', '#F2A800'],
        az: ['#00B9E4', '#ED2939', '#3F9C35', '#FFF', '#FFF'],
        bd: ['#006A4E', '#F42A41'],
        bn: ['#F7E017', '#FFF', '#000'],
        bt: ['#FFD520', '#FF4E12'],
        id: ['#CE1126', '#FFF'],
        ir: ['#239F40', '#FFF', '#DA0000', '#DA0000'],
        in: ['#FF9933', '#FFF', '#128807'],
        iq: ['#CE1126', '#FFF', '#000', '#007A3D'],
        il: ['#FFF', '#0038B8', '#0038B8', '#FFF'],
        jo: ['#000', '#FFF', '#007A3D', '#CE1126', '#FFF'],
        kz: ['#00AFCA', '#FEC50C', '#FEC50C', '#FEC50C'],
        kg: ['#E8112D', '#FFEF00'],
        kh: ['#032EA1', '#E00025'],
        kr: ['#FFF', '#C60C30', '#003478'],
        kw: ['#007A3D', '#FFF', '#CE1126', '#000'],
        la: ['#CE1126', '#002868', '#CE1126', '#FFF'],
        lb: ['#ED1C24', '#FFF', '#ED1C24', '#00A651'],
        lk: ['#FFB700', '#005641', '#FF5B00', '#8D2029', '#FFB700', '#FFB700'],
        mm: ['#FECB00', '#34B233', '#EA2839', '#FFF'],
        mn: ['#C4272F', '#015197', '#C4272F', '#F9CF02', '#F9CF02'],
        mv: ['#D21034', '#007E3A', '#FFF'],
        my: ['#CC0001', '#FFF', '#010066', '#FFCC00', '#FFCC00'],
        np: ['#DC143C', '#FFF', '#FFF'],
        om: ['#DB161B', '#FFF', '#DB161B', '#008000'],
        ph: ['#0038A8', '#CE1126', '#FFF', '#FCD116'],
        pk: ['#FFF', '#01411C', '#FFF', '#FFF'],
        ps: ['#000', '#FFF', '#007A3D', '#C4111B'],
        qa: ['#FFF', '#8D1B3D'],
        sa: ['#006C35', '#FFF'],
        sy: ['#CE1126', '#FFF', '#000', '#007A3D', '#007A3D'],
        th: ['#A51931', '#FFF', '#2D2A4A', '#FFF', '#A51931'],
        tj: ['#C00', '#FFF', '#060'],
        tm: ['#28AE66', '#FFF'],
        tl: ['#DC241F', '#FFC726', '#000', '#FFF'],
        tr: ['#E30A17', '#FFF', '#FFF'],
        tw: ['#D52B1E', '#11457E', '#FFF'],
        uz: ['#0099B5', '#FFF', '#1EB53A', '#FFF'],
        vn: ['#DA251D', '#FF0'],
        ye: ['#CE1126', '#FFF', '#000'],
        hk: ['#DE2910', '#FFF'],
        jp: ['#FFF', '#BC002D'],
        ru: ['#FFF', '#0039A6', '#D52B1E'],
        cn: ['#DE2910', '#FFDE00'],
        ge: ['#FFF','red', 'red', 'red', 'red', 'red'],
        sg: ['#ED2939', '#FFF', '#FFF']
    },
    EU: {
        ad: ['#0018A8', '#FEDF00', '#D0103A'],
        al: ['#E41E20', '#000', '#000'],
        at: ['#ED2939', '#FFF', '#ED2939'],
        be: ['#000', '#FAE042', '#ED2939'],
        ba: ['#002395', '#FECB00', '#FFF'],
        bg: ['#FFF', '#00966E', '#D62612'],
        by: ['#4AA657', '#C8313E'],
        ch: ['#D52B1E', '#FFF', '#FFF'],
        cy: ['#FFF', '#435125', '#435125', '#D47600'],
        cz: ['#FFF', '#D7141A', '#11457E'],
        de: ['#000', '#D00', '#FFCE00'],
        dk: ['#C60C30', '#FFF', '#FFF'],
        ee: ['#4891D9', '#000', '#FFF'],
        es: ['#C60B1E', '#FFC400', '#C60B1E'],
        fi: ['#FFF', '#003580', '#003580'],
        fr: ['#002395', '#FFF', '#ED2939'],
        hr: ['red', '#FFF', '#171796'],
        hu: ['#CD2A3E', '#FFF', '#436F4D'],
        ie: ['#169B62', '#FFF', '#FF883E'],
        is: ['#003897', '#FFF', '#FFF', '#D72828', '#D72828'],
        it: ['#009246', '#FFF', '#CE2B37'],
        li: ['#002B7F', '#CE1126'],
        lt: ['#FDB913', '#006A44', '#C1272D'],
        lu: ['#ED2939', '#FFF', '#00A1DE'],
        lv: ['#9E3039', '#FFF', '#9E3039'],
        gb: ['#012169', '#FFF', '#C8102E', '#FFF', '#C8102E'],
        gr: ["#0D5EAF", '#FFF', '#0D5EAF', '#0D5EAF', '#0D5EAF', '#0D5EAF', '#FFF'],
        me: ['#D3AE3B', '#C40308'],
        mk: ['#D20000', '#FFE600', '#FFE600'],
        mt: ['#FFF', '#CF142B'],
        nl: ['#AE1C28', '#FFF', '#21468B'],
        no: ['#EF2B2D', '#FFF', '#FFF', '#002868', '#002868'],
        pl: ['#FFF', '#DC143C'],
        pt: ['#006600', 'red'],
        ro: ['#002B7F', '#FCD116', '#CE1126'],
        rs: ['#C6363C', '#0C4076', '#FFF'],
        va: ['#FFE000', '#FFF'],
        si: ['#FFF', '#035EA5', '#EC2227'],
        se: ['#006AA7', '#FECC00', '#FECC00'],
        sk: ['#FFF', '#0B4EA2', '#EE1C25', '#EE1C25', '#FFF', '#0B4EA2'],
        md: ['#0046AE', '#FFD200', '#CC092F'],
        ua: ['#005BBB', '#FFD500'],
        fo: ['#FFF', '#005BBB', '#005BBB', '#ED2939', '#ED2939']
    },
    NA: {
        ai: ['#00247D', '#FFF', '#CF142B', '#FFF', '#9CF', '#f90'],
        ag: ['#FFF', '#000', '#FCD116', '#0072C6', '#CE1126', '#CE1126'],
        bs: ['#00ABC9', '#00ABC9', '#FAE042', '#000'],
        bb: ['#00267F', '#FFC726', '#00267F', '#000'],
        bz: ['#CE1126', '#003F87', '#CE1126', '#FFF'],
        bm: ['#CF142B'],
        vg: ['#00247D', '#006129', '#FFF'],
        ca: ['red', '#FFF', 'red', 'red'],
        ky: ['#00247D'],
        cr: ['#002B7F', '#FFF', '#CE1126', '#002B7F'],
        cu: ['#002A8F', '#002A8F', '#002A8F', '#FFF', '#FFF', '#CF142B', '#FFF'],
        dm: ['#006B3F', '#FCD116', '#FFF', '#000', '#D41C30'],
        do: ['#FFF', '#002D62', '#ce1126', '#002D62', '#ce1126'],
        sv: ['#0F47AF', '#FFF', '#0F47AF'],
        gl: ['#FFF', '#D00C33'],
        gd: ['#CE1126', '#007A5e', '#FCD116', '#007A5e', '#FCD116', '#FCD116'],
        gp: ['#002395', '#FFF', '#ED2939'],
        gt: ['#4997D0', '#FFF', '#4997D0'],
        ht: ['#00209F', '#D21034'],
        hn: ['#0073CF', '#FFF', '#0073CF', '#0073CF'],
        jm: ['#009B3A', '#009B3A', '#FED100', '#000', '#000'],
        mq: ['#21428E', '#21428E', '#21428E', '#21428E', '#FFF', '#FFF'],
        mx: ['#006847', '#FFF', '#CE1126'],
        ms: ['#00247D', '#00A2BD', '#A53D08', '#008021'],
        ni: ['#0067C6', '#FFF', '#0067C6'],
        pa: ['#FFF', '#FFF', '#005293', '#D21034', '#005293', '#005293'],
        pr: ['#ED0000', '#ED0000', '#ED0000', '#FFF', '#FFF', '#0050F0', '#FFF'],
        kn: ['#009E49', '#CE1126', '#FCD116', '#000', '#FFF', '#FFF', '#FCD116'],
        lc: ['#6CF', '#FFF', '#000', '#FCD116'],
        vc: ['#009E60', '#FCD116', '#0072C6', '#009E60', '#009E60', '#009E60'],
        sx: ['#DC171D', '#012A87', '#FFF'],
        mf: ['#002395', '#FFF', '#ED2939'],
        tc: ['#00247D', '#FDC300', '#00A728'],
        us: ['#B22234', '#FFF', '#3C3B6E'],
        vi: ['#FFF', '#0081C6', '#162667', '#F4C53D', '#369443']
    },
    OC: {
        as: ['#006', '#BD1021', '#FFF', '#9C3900', '#FFC221'],
        au: ['#00247D', '#FFF', '#FFF'],
        ck: ['#00247D', '#FFF'],
        fj: ['#68BFE5'],
        pf: ['#CE1126', '#FFF', '#CE1126'],
        gu: ['#C62139', '#00297B', '#66AFEB'],
        ki: ['#CE1126', '#FCD116', '#003F87', '#FFF'],
        nr: ['#002B7F', '#FFC61E', '#002B7F', '#FFF'],
        nc: ['#0035AD', '#ED4135', '#009543', '#FAE600'],
        nz: ['#00247D', '#CC142B'],
        nf: ['#007934', '#FFF', '#007934', '#007934'],
        nu: ['#FCD116', '#002868', '#FFF', '#C8102E', '#FCD116'],
        pw: ['#4AADD6', '#FFDE00'],
        pg: ['#000', '#CE1126', '#FCD116', '#FFF'],
        pn: ['#00247D', '#006EC7'],
        ws: ['#CE1126', '#002B7F', '#FFF'],
        sb: ['#0051BA', '#215B33', '#FFF', '#FCD116'],
        tk: ['#00247D', '#FED100'],
        to: ['#C10000', '#FFF', '#C10000'],
        vu: ['#D21034', '#009543', '#000', '#000', '#FDCE12', '#FDCE12'],
        wf: ['#ED2939', '#002395', '#FFF', '#ED2939', '#FFF']
    },
    SA: {
        ar: ['#74ACDF', '#FFF', '#74ACDF'],
        aw: ['#4189DD', '#F9D616', '#D21034'],
        bo: ['#D52B1E', '#F9E300', '#007934'],
        br: ['#009B3A', '#FEDF00'],
        cl: ['#D52B1E', '#FFF', '#0039A6', '#FFF'],
        co: ['#FCD116', '#003893', '#CE1126'],
        cw: ['#002B7F', '#F9E814', '#FFF', '#FFF'],
        ec: ['#FFDD00', '#034EA2', '#ED1C24'],
        fk: ['#00247D'],
        gy: ['#009E49', '#FFF', '#FCD116', '#000', '#CE1126'],
        py: ['#D52B1E', '#FFF', '#0038A8'],
        sr: ['#377E3F', '#377E3F', '#FFF', '#FFF', '#B40A2D', '#ECC81D'],
        gf: ['#002395', '#FFF', '#ED2939'],
        pe: ['#D91023', '#FFF', '#D91023'],
        tt: ['#CE1126', '#FFF', '#000'],
        uy: ['#FFF', '#FFF', '#0038A8'],
        ve: ['#FFCC00', '#00247D', '#CF142B', '#FFF']
    }
}

export { flagColors }; 