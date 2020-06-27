const countryImages = {
    EU: {
        ad: [require('..//assets/flags/eu/ad.png'), require('..//assets/countries_background/eu/ad.png')],
        al: [require('..//assets/flags/eu/al.png'), require('..//assets/countries_background/eu/al.png')],
        at: [require('..//assets/flags/eu/at.png'), require('..//assets/countries_background/eu/at.png')],
        ba: [require('..//assets/flags/eu/ba.png'), require('..//assets/countries_background/eu/ba.png')],
        be: [require('..//assets/flags/eu/be.png'), require('..//assets/countries_background/eu/be.png')],
        bg: [require('..//assets/flags/eu/bg.png'), require('..//assets/countries_background/eu/bg.png')],
        by: [require('..//assets/flags/eu/by.png'), require('..//assets/countries_background/eu/by.png')],
        ch: [require('..//assets/flags/eu/ch.png'), require('..//assets/countries_background/eu/ch.png')],
        cz: [require('..//assets/flags/eu/cz.png'), require('..//assets/countries_background/eu/cz.png')],
        cy: [require('..//assets/flags/eu/cy.png'), require('..//assets/countries_background/eu/cy.png')],
        de: [require('..//assets/flags/eu/de.png'), require('..//assets/countries_background/eu/de.png')],
        dk: [require('..//assets/flags/eu/dk.png'), require('..//assets/countries_background/eu/dk.png')],
        ee: [require('..//assets/flags/eu/ee.png'), require('..//assets/countries_background/eu/ee.png')],
        es: [require('..//assets/flags/eu/es.png'), require('..//assets/countries_background/eu/es.png')],
        fi: [require('..//assets/flags/eu/fi.png'), require('..//assets/countries_background/eu/fi.png')],
        fo: [require('..//assets/flags/eu/fo.png'), require('..//assets/countries_background/eu/fo.png')],
        fr: [require('..//assets/flags/eu/fr.png'), require('..//assets/countries_background/eu/fr.png')],
        hr: [require('..//assets/flags/eu/hr.png'), require('..//assets/countries_background/eu/hr.png')],
        hu: [require('..//assets/flags/eu/hu.png'), require('..//assets/countries_background/eu/hu.png')],
        gb: [require('..//assets/flags/eu/gb.png'), require('..//assets/countries_background/eu/gb.png')],
        gr: [require('..//assets/flags/eu/gr.png'), require('..//assets/countries_background/eu/gr.png')],
        ie: [require('..//assets/flags/eu/ie.png'), require('..//assets/countries_background/eu/ie.png')],
        is: [require('..//assets/flags/eu/is.png'), require('..//assets/countries_background/eu/is.png')],
        it: [require('..//assets/flags/eu/it.png'), require('..//assets/countries_background/eu/it.png')],
        li: [require('..//assets/flags/eu/li.png'), require('..//assets/countries_background/eu/li.png')],
        lt: [require('..//assets/flags/eu/lt.png'), require('..//assets/countries_background/eu/lt.png')],
        lu: [require('..//assets/flags/eu/lu.png'), require('..//assets/countries_background/eu/lu.png')],
        lv: [require('..//assets/flags/eu/lv.png'), require('..//assets/countries_background/eu/lv.png')],
        md: [require('..//assets/flags/eu/md.png'), require('..//assets/countries_background/eu/md.png')],
        me: [require('..//assets/flags/eu/me.png'), require('..//assets/countries_background/eu/me.png')],
        mk: [require('..//assets/flags/eu/mk.png'), require('..//assets/countries_background/eu/mk.png')],
        mt: [require('..//assets/flags/eu/mt.png'), require('..//assets/countries_background/eu/mt.png')],
        nl: [require('..//assets/flags/eu/nl.png'), require('..//assets/countries_background/eu/nl.png')],
        no: [require('..//assets/flags/eu/no.png'), require('..//assets/countries_background/eu/no.png')],
        pl: [require('..//assets/flags/eu/pl.png'), require('..//assets/countries_background/eu/pl.png')],
        pt: [require('..//assets/flags/eu/pt.png'), require('..//assets/countries_background/eu/pt.png')],
        ro: [require('..//assets/flags/eu/ro.png'), require('..//assets/countries_background/eu/ro.png')],
        rs: [require('..//assets/flags/eu/rs.png'), require('..//assets/countries_background/eu/rs.png')],
        va: [require('..//assets/flags/eu/va.png'), require('..//assets/countries_background/eu/va.png')],
        si: [require('..//assets/flags/eu/si.png'), require('..//assets/countries_background/eu/si.png')],
        se: [require('..//assets/flags/eu/se.png'), require('..//assets/countries_background/eu/se.png')],
        sk: [require('..//assets/flags/eu/sk.png'), require('..//assets/countries_background/eu/sk.png')],
        ua: [require('..//assets/flags/eu/ua.png'), require('..//assets/countries_background/eu/ua.png')]
    },

    NA: {
        us: [require('..//assets/flags/na/us.png'), require('..//assets/countries_background/na/us.png')],
        ca: [require('..//assets/flags/na/ca.png'), require('..//assets/countries_background/na/ca.png')],
        mx: [require('..//assets/flags/na/mx.png'), require('..//assets/countries_background/na/mx.png')]
    },

    SA: {
        aw: [require('..//assets/flags/sa/aw.png'), require('..//assets/countries_background/sa/aw.png')],
        ar: [require('..//assets/flags/sa/ar.png'), require('..//assets/countries_background/sa/ar.png')],
        bo: [require('..//assets/flags/sa/bo.png'), require('..//assets/countries_background/sa/bo.png')],
        br: [require('..//assets/flags/sa/br.png'), require('..//assets/countries_background/sa/br.png')],
        cl: [require('..//assets/flags/sa/cl.png'), require('..//assets/countries_background/sa/cl.png')],
        pe: [require('..//assets/flags/sa/pe.png'), require('..//assets/countries_background/sa/pe.png')],
        co: [require('..//assets/flags/sa/co.png'), require('..//assets/countries_background/sa/co.png')],
        cw: [require('..//assets/flags/sa/cw.png'), require('..//assets/countries_background/sa/cw.png')],
        ec: [require('..//assets/flags/sa/ec.png'), require('..//assets/countries_background/sa/ec.png')],
        fk: [require('..//assets/flags/sa/fk.png'), require('..//assets/countries_background/sa/fk.png')],
        gd: [require('..//assets/flags/sa/gd.png'), require('..//assets/countries_background/sa/gd.png')],
        gy: [require('..//assets/flags/sa/gy.png'), require('..//assets/countries_background/sa/gy.png')],
        py: [require('..//assets/flags/sa/py.png'), require('..//assets/countries_background/sa/py.png')],
        sr: [require('..//assets/flags/sa/sr.png'), require('..//assets/countries_background/sa/sr.png')],
        tt: [require('..//assets/flags/sa/tt.png'), require('..//assets/countries_background/sa/tt.png')],
        uy: [require('..//assets/flags/sa/uy.png'), require('..//assets/countries_background/sa/uy.png')],
        ve: [require('..//assets/flags/sa/ve.png'), require('..//assets/countries_background/sa/ve.png')],
        gf: [require('..//assets/flags/sa/gf.png'), require('..//assets/countries_background/sa/gf.png')]
    },

    OC: {
        au: [require('..//assets/flags/oc/au.png'), require('..//assets/countries_background/oc/au.png')],
        fj: [require('..//assets/flags/oc/fj.png'), require('..//assets/countries_background/oc/fj.png')],
        nc: [require('..//assets/flags/oc/nc.png'), require('..//assets/countries_background/oc/nc.png')],
        nz: [require('..//assets/flags/oc/nz.png'), require('..//assets/countries_background/oc/nz.png')],
        pg: [require('..//assets/flags/oc/pg.png'), require('..//assets/countries_background/oc/pg.png')],
        sb: [require('..//assets/flags/oc/sb.png'), require('..//assets/countries_background/oc/sb.png')],
        vu: [require('..//assets/flags/oc/vu.png'), require('..//assets/countries_background/oc/vu.png')]
    },

    AS: {
        ae: [require('..//assets/flags/as/ae.png'), require('..//assets/countries_background/as/ae.png')],
        af: [require('..//assets/flags/as/af.png'), require('..//assets/countries_background/as/af.png')],
        am: [require('..//assets/flags/as/am.png'), require('..//assets/countries_background/as/am.png')],
        az: [require('..//assets/flags/as/az.png'), require('..//assets/countries_background/as/az.png')],
        bd: [require('..//assets/flags/as/bd.png'), require('..//assets/countries_background/as/bd.png')],
        bn: [require('..//assets/flags/as/bn.png'), require('..//assets/countries_background/as/bn.png')],
        bt: [require('..//assets/flags/as/bt.png'), require('..//assets/countries_background/as/bt.png')],
        id: [require('..//assets/flags/as/id.png'), require('..//assets/countries_background/as/id.png')],
        il: [require('..//assets/flags/as/il.png'), require('..//assets/countries_background/as/il.png')],
        in: [require('..//assets/flags/as/in.png'), require('..//assets/countries_background/as/in.png')],
        iq: [require('..//assets/flags/as/iq.png'), require('..//assets/countries_background/as/iq.png')],
        ir: [require('..//assets/flags/as/ir.png'), require('..//assets/countries_background/as/ir.png')],
        jo: [require('..//assets/flags/as/jo.png'), require('..//assets/countries_background/as/jo.png')],
        kg: [require('..//assets/flags/as/kg.png'), require('..//assets/countries_background/as/kg.png')],
        kh: [require('..//assets/flags/as/kh.png'), require('..//assets/countries_background/as/kh.png')],
        kr: [require('..//assets/flags/as/kr.png'), require('..//assets/countries_background/as/kr.png')],
        kw: [require('..//assets/flags/as/kw.png'), require('..//assets/countries_background/as/kw.png')],
        kz: [require('..//assets/flags/as/kz.png'), require('..//assets/countries_background/as/kz.png')],
        la: [require('..//assets/flags/as/la.png'), require('..//assets/countries_background/as/la.png')],
        lb: [require('..//assets/flags/as/lb.png'), require('..//assets/countries_background/as/lb.png')],
        lk: [require('..//assets/flags/as/lk.png'), require('..//assets/countries_background/as/lk.png')],
        mm: [require('..//assets/flags/as/mm.png'), require('..//assets/countries_background/as/mm.png')],
        mn: [require('..//assets/flags/as/mn.png'), require('..//assets/countries_background/as/mn.png')],
        mv: [require('..//assets/flags/as/mv.png'), require('..//assets/countries_background/as/mv.png')],
        my: [require('..//assets/flags/as/my.png'), require('..//assets/countries_background/as/my.png')],
        np: [require('..//assets/flags/as/np.png'), require('..//assets/countries_background/as/np.png')],
        om: [require('..//assets/flags/as/om.png'), require('..//assets/countries_background/as/om.png')],
        ph: [require('..//assets/flags/as/ph.png'), require('..//assets/countries_background/as/ph.png')],
        pk: [require('..//assets/flags/as/pk.png'), require('..//assets/countries_background/as/pk.png')],
        qa: [require('..//assets/flags/as/qa.png'), require('..//assets/countries_background/as/qa.png')],
        sa: [require('..//assets/flags/as/sa.png'), require('..//assets/countries_background/as/sa.png')],
        sy: [require('..//assets/flags/as/sy.png'), require('..//assets/countries_background/as/sy.png')],
        th: [require('..//assets/flags/as/th.png'), require('..//assets/countries_background/as/th.png')],
        tj: [require('..//assets/flags/as/tj.png'), require('..//assets/countries_background/as/tj.png')],
        tl: [require('..//assets/flags/as/tl.png'), require('..//assets/countries_background/as/tl.png')],
        tm: [require('..//assets/flags/as/tm.png'), require('..//assets/countries_background/as/tm.png')],
        tr: [require('..//assets/flags/as/tr.png'), require('..//assets/countries_background/as/tr.png')],
        tw: [require('..//assets/flags/as/tw.png'), require('..//assets/countries_background/as/tw.png')],
        uz: [require('..//assets/flags/as/uz.png'), require('..//assets/countries_background/as/uz.png')],
        vn: [require('..//assets/flags/as/vn.png'), require('..//assets/countries_background/as/vn.png')],
        ye: [require('..//assets/flags/as/ye.png'), require('..//assets/countries_background/as/ye.png')],
        hk: [require('..//assets/flags/as/hk.png'), require('..//assets/countries_background/as/hk.png')],
        jp: [require('..//assets/flags/as/jp.png'), require('..//assets/countries_background/as/jp.png')],
        ru: [require('..//assets/flags/as/ru.png'), require('..//assets/countries_background/as/ru.png')],
        cn: [require('..//assets/flags/as/cn.png'), require('..//assets/countries_background/as/cn.png')],
        sg: [require('..//assets/flags/as/sg.png'), require('..//assets/countries_background/as/sg.png')]
    },

    AF:  {
        eg: [require('..//assets/flags/af/eg.png'), require('..//assets/countries_background/af/eg.png')],
        ao: [require('..//assets/flags/af/ao.png'), require('..//assets/countries_background/af/ao.png')],
        mg: [require('..//assets/flags/af/mg.png'), require('..//assets/countries_background/af/mg.png')],
        cd: [require('..//assets/flags/af/cd.png'), require('..//assets/countries_background/af/cd.png')],
        bi: [require('..//assets/flags/af/bi.png'), require('..//assets/countries_background/af/bi.png')],
        bj: [require('..//assets/flags/af/bj.png'), require('..//assets/countries_background/af/bj.png')],
        bf: [require('..//assets/flags/af/bf.png'), require('..//assets/countries_background/af/bf.png')],
        bw: [require('..//assets/flags/af/bw.png'), require('..//assets/countries_background/af/bw.png')],
        cf: [require('..//assets/flags/af/cf.png'), require('..//assets/countries_background/af/cf.png')],
        ci: [require('..//assets/flags/af/ci.png'), require('..//assets/countries_background/af/ci.png')],
        cm: [require('..//assets/flags/af/cm.png'), require('..//assets/countries_background/af/cm.png')],
        cg: [require('..//assets/flags/af/cg.png'), require('..//assets/countries_background/af/cg.png')],
        dj: [require('..//assets/flags/af/dj.png'), require('..//assets/countries_background/af/dj.png')],
        dz: [require('..//assets/flags/af/dz.png'), require('..//assets/countries_background/af/dz.png')],
        er: [require('..//assets/flags/af/er.png'), require('..//assets/countries_background/af/er.png')],
        et: [require('..//assets/flags/af/et.png'), require('..//assets/countries_background/af/et.png')],
        ga: [require('..//assets/flags/af/ga.png'), require('..//assets/countries_background/af/ga.png')],
        gh: [require('..//assets/flags/af/gh.png'), require('..//assets/countries_background/af/gh.png')],
        gn: [require('..//assets/flags/af/gn.png'), require('..//assets/countries_background/af/gn.png')],
        gm: [require('..//assets/flags/af/gm.png'), require('..//assets/countries_background/af/gm.png')],
        gw: [require('..//assets/flags/af/gw.png'), require('..//assets/countries_background/af/gw.png')],
        gq: [require('..//assets/flags/af/gq.png'), require('..//assets/countries_background/af/gq.png')],
        ke: [require('..//assets/flags/af/ke.png'), require('..//assets/countries_background/af/ke.png')],
        lr: [require('..//assets/flags/af/lr.png'), require('..//assets/countries_background/af/lr.png')],
        ly: [require('..//assets/flags/af/ly.png'), require('..//assets/countries_background/af/ly.png')],
        ls: [require('..//assets/flags/af/ls.png'), require('..//assets/countries_background/af/ls.png')],
        ma: [require('..//assets/flags/af/ma.png'), require('..//assets/countries_background/af/ma.png')],
        ml: [require('..//assets/flags/af/ml.png'), require('..//assets/countries_background/af/ml.png')],
        mz: [require('..//assets/flags/af/mz.png'), require('..//assets/countries_background/af/mz.png')],
        mr: [require('..//assets/flags/af/mr.png'), require('..//assets/countries_background/af/mr.png')],
        mw: [require('..//assets/flags/af/mw.png'), require('..//assets/countries_background/af/mw.png')],
        na: [require('..//assets/flags/af/na.png'), require('..//assets/countries_background/af/na.png')],
        ne: [require('..//assets/flags/af/ne.png'), require('..//assets/countries_background/af/ne.png')],
        ng: [require('..//assets/flags/af/ng.png'), require('..//assets/countries_background/af/ng.png')],
        rw: [require('..//assets/flags/af/rw.png'), require('..//assets/countries_background/af/rw.png')],
        eh: [require('..//assets/flags/af/eh.png'), require('..//assets/countries_background/af/eh.png')],
        ss: [require('..//assets/flags/af/ss.png'), require('..//assets/countries_background/af/ss.png')],
        sn: [require('..//assets/flags/af/sn.png'), require('..//assets/countries_background/af/sn.png')],
        sl: [require('..//assets/flags/af/sl.png'), require('..//assets/countries_background/af/sl.png')],
        sz: [require('..//assets/flags/af/sz.png'), require('..//assets/countries_background/af/sz.png')],
        td: [require('..//assets/flags/af/td.png'), require('..//assets/countries_background/af/td.png')],
        tg: [require('..//assets/flags/af/tg.png'), require('..//assets/countries_background/af/tg.png')],
        tn: [require('..//assets/flags/af/tn.png'), require('..//assets/countries_background/af/tn.png')],
        tz: [require('..//assets/flags/af/tz.png'), require('..//assets/countries_background/af/tz.png')],
        ug: [require('..//assets/flags/af/ug.png'), require('..//assets/countries_background/af/ug.png')],
        za: [require('..//assets/flags/af/za.png'), require('..//assets/countries_background/af/za.png')],
        zm: [require('..//assets/flags/af/zm.png'), require('..//assets/countries_background/af/zm.png')],
        zw: [require('..//assets/flags/af/zw.png'), require('..//assets/countries_background/af/zw.png')],
        so: [require('..//assets/flags/af/so.png'), require('..//assets/countries_background/af/so.png')],
        km: [require('..//assets/flags/af/km.png'), require('..//assets/countries_background/af/km.png')],
        st: [require('..//assets/flags/af/st.png'), require('..//assets/countries_background/af/st.png')],
        yt: [require('..//assets/flags/af/yt.png'), require('..//assets/countries_background/af/yt.png')],
    }
}

export { countryImages };