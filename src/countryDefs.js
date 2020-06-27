const countryDefs = {
    EU: [ ['ad', 'Andorra'], 
    ['al', 'Albania'], 
    ['at', 'Austria'], 
    ['ba', 'Bosnia and Herzegovina'], 
    ['be', 'Belgium'], 
    ['bg', 'Bulgaria'], 
    ['by', 'Belarus'], 
    ['ch', 'Switzerland'], 
    ['cz', 'Czech Republic'], 
    ['cy', 'Cyprus'], 
    ['de', 'Germany'], 
    ['dk', 'Denmark'], 
    ['ee', 'Estonia'], 
    ['es', 'Spain'], 
    ['fi', 'Finland'], 
    ['fr', 'France'], 
    ['hr', 'Croatia'], 
    ['hu', 'Hungary'], 
    ['gb', 'United Kingdom'], 
    ['gr', 'Greece'], 
    ['ie', 'Ireland'], 
    ['is', 'Iceland'], 
    ['it', 'Italia'], 
    ['li', 'Liechtenstein'], 
    ['lt', 'Lithuania'], 
    ['lv', 'Latvia'], 
    ['me', 'Montenegro'], 
    ['mk', 'North Macedonia'], 
    ['mt', 'Malta'], 
    ['nl', 'Netherlands'], 
    ['no', 'Norway'], 
    ['pl', 'Poland'], 
    ['pt', 'Portugal'], 
    ['ro', 'Romania'], 
    ['rs', 'Serbia'], 
    ['va', 'Vatican City'], 
    ['si', 'Slovenia'], 
    ['se', 'Sweden'], 
    ['sk', 'Slovakia'], 
    ['md', 'Moldova'], 
    ['ua', 'Ukraine'], 
    ['fo', 'Faroe Islands'] ],
    NA: [ ['us', 'United States'], 
    ['ca', 'Canada'], 
    ['mx', 'Mexico'] ],
    SA: [ ['aw', 'Aruba'], 
    ['ar', 'Argentina'], 
    ['bo', 'Bolivia'], 
    ['br', 'Brazilia'], 
    ['cl', 'Chile'], 
    ['co', 'Colombia'], 
    ['cw', 'Curaco'], 
    ['ec', 'Ecuador'], 
    ['gy', 'Guyana'],['py', 'Paraguay'], 
    ['sr', 'Suriname'], 
    ['fk', 'Falkland Islands'],['ve', 'Venezuela'], 
    ['gf', 'French Guiana'], 
    ['pe', 'Perou'],['gd', 'Grenada'], 
    ['tt', 'Trinidad and Tobago'], 
    ['uy', 'Uruguay'] ],
    OC: [ ['au', 'Australia'], 
    ['fj', 'Fiji'], 
    ['nc', 'New Caledonia'], 
    ['nz', 'New Zealand'], 
    ['pg', 'Papua New Guinea'], 
    ['sb', 'Solomon Islands'], 
    ['vu', 'Vanuatu'] ],
    AS: [ ['ae', 'United Arab Emirates'], 
    ['af', 'Afghanistan'], 
    ['am', 'Armenia'], 
    ['az', 'Azerbaijan'], 
    ['bd', 'Bangladesh'], 
    ['bn', 'Brunei'], 
    ['bt', 'Bhutan'], 
    ['id', 'Indonesia'], 
    ['il', 'Israel'], 
    ['in', 'India'], 
    ['iq', 'Iraq'], 
    ['ir', 'Iran'], 
    ['jo', 'Jordan'], 
    ['kg', 'Kyrgyzstan'], 
    ['kh', 'Cambodia'], 
    ['kr', 'Korea'], 
    ['kw', 'Kuwait'], 
    ['kz', 'Kazakhstan'], 
    ['la', 'Laos'], 
    ['lb', 'Lebanon'], 
    ['lk', 'Sri Lanka'], 
    ['mm', 'Myanmar'], 
    ['mn', 'Mongolia'], 
    ['mv', 'Maldives'], 
    ['my', 'Malaysia'], 
    ['np', 'Nepal'], 
    ['om', 'Oman'], 
    ['ph', 'Philippines'], 
    ['pk', 'Pakistan'], 
    ['qa', 'Qatar'], 
    ['sa', 'Saudi Arabia'], 
    ['sy', 'Syria'], 
    ['th', 'Thailand'], 
    ['tj', 'Tajikistan'], 
    ['tl', 'Timor-Leste'], 
    ['tm', 'Turkmenistan'], 
    ['tr', 'Turkey'], 
    ['tw', 'Taiwan'], 
    ['uz', 'Uzbekistan'], 
    ['vn', 'Vietnam'], 
    ['ye', 'Yemen'], 
    ['hk', 'Hong Kong'], 
    ['jp', 'Japan'], 
    ['ru', 'Russia'], 
    ['cn', 'China'], 
    ['sg', 'Singapore'] ],
    AF: [ ['eg', 'Egypt'], 
    ['ao', 'Angola'], 
    ['mg', 'Madagascar'], 
    ['cd', 'Democratic Republic of the Congo'], 
    ['bi', 'Burundi'], 
    ['bj', 'Benin'], 
    ['bf', 'Burkina Faso'], 
    ['bw', 'Botswana'], 
    ['cf', 'Central African Republic'], 
    ['ci', 'Ivory Coast'], 
    ['cm', 'Cameroon'], 
    ['cg', 'Congo'], 
    ['dj', 'Djibouti'], 
    ['dz', 'Algeria'], 
    ['er', 'Eritrea'], 
    ['et', 'Ethiopia'], 
    ['ga', 'Gabon'], 
    ['gh', 'Ghana'], 
    ['gn', 'Guinea'], 
    ['gm', 'Gambia'], 
    ['gw', 'Guinea-Bissau'], 
    ['gq', 'Equatorial Guinea'], 
    ['ke', 'Kenya'], 
    ['lr', 'Liberia'], 
    ['ly', 'Libya'], 
    ['ls', 'Lesotho'], 
    ['ma', 'Morocco'], 
    ['ml', 'Mali'], 
    ['mz', 'Mozambique'], 
    ['mr', 'Mauritania'], 
    ['mw', 'Malawi'], 
    ['na', 'Namibia'], 
    ['ne', 'Niger'], 
    ['ng', 'Nigeria'], 
    ['rw', 'Rwanda'], 
    ['eh', 'Western Sahara'], 
    ['ss', 'South Sudan'], 
    ['sn', 'Senegal'], 
    ['sl', 'Sierra Leone'], 
    ['sz', 'Swaziland'], 
    ['td', 'Chad'], 
    ['tg', 'Togo'], 
    ['tn', 'Tunisia'], 
    ['tz', 'Tanzania'], 
    ['ug', 'Uganda'], 
    ['za', 'South Africa'], 
    ['zm', 'Zambia'], 
    ['zw', 'Zimbabwe'], 
    ['so', 'Somalia'], 
    ['km', 'Comoros'], 
    ['st', 'Sao Tome and Principe'], 
    ['yt', 'Mayotte']]
};

export { countryDefs };
