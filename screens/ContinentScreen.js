import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import CountryComponent from '../src/CountryComponent';
import localStorage from 'react-native-sync-localstorage'

function ContinentScreen({ route, navigation }) {
    var continentID = route.params.continentID;
    var countrySvgs = [];
    var countryIDs = {
        EU: [ 
            ['ad', 'Andorra'], ['al', 'Albania'], ['at', 'Austria'],
            ['ba', 'Bosnia and Herzegovina'], ['be', 'Belgium'], ['bg', 'Bulgaria'],
            ['by', 'Belarus'], ['ch', 'Switzerland'], ['cz', 'Czech Republic'],
            ['cy', 'Cyprus'], ['de', 'Germany'], ['dk', 'Denmark'],
            ['ee', 'Estonia'], ['es', 'Spain'], ['fi', 'Finland'],
            ['fr', 'France'], ['hr', 'Croatia'], ['hu', 'Hungary'],
            ['gb', 'United Kingdom'], ['gr', 'Greece'], ['ie', 'Ireland'],
            ['is', 'Iceland'], ['it', 'Italia'], ['li', 'Liechtenstein'],
            ['lt', 'Lithuania'], ['lv', 'Latvia'], ['me', 'Montenegro'],
            ['mk', 'North Macedonia'], ['mt', 'Malta'], ['nl', 'Netherlands'],
            ['no', 'Norway'], ['pl', 'Poland'], ['pt', 'Portugal'],
            ['ro', 'Romania'], ['rs', 'Serbia'], ['va', 'Vatican City'],
            ['si', 'Slovenia'], ['se', 'Sweden'], ['sk', 'Slovakia'],
            ['md', 'Moldova'], ['ua', 'Ukraine'], ['fo', 'Faroe Islands']  
        ],
        NA: [ ['us', 'United States'], ['ca', 'Canada'], ['mx', 'Mexico'] ],
        SA: [ 
            ['aw', 'Aruba'], ['ar', 'Argentina'], ['bo', 'Bolivia'], 
            ['br', 'Brazilia'], ['cl', 'Chile'], ['co', 'Colombia'], 
            ['cw', 'Curaco'], ['ec', 'Ecuador'], ['gy', 'Guyana'],
			['py', 'Paraguay'], ['sr', 'Suriname'], ['fk', 'Falkland Islands'],
			['ve', 'Venezuela'], ['gf', 'French Guiana'], ['pe', 'Perou'],
			['gd', 'Grenada'], ['tt', 'Trinidad and Tobago'], ['uy', 'Uruguay']
        ],
        OC: [
            ['au', 'Australia'], ['fj', 'Fiji'], ['nc', 'New Caledonia'],
            ['nz', 'New Zealand'], ['pg', 'Papua New Guinea'], ['sb', 'Solomon Islands'],
            ['vu', 'Vanuatu']
        ],
        AS: [
            ['ae', 'United Arab Emirates'], ['af', 'Afghanistan'], ['am', 'Armenia'],
            ['az', 'Azerbaijan'], ['bd', 'Bangladesh'], ['bn', 'Brunei'],
            ['bt', 'Bhutan'], ['id', 'Indonesia'], ['in', 'India'],
            ['ir', 'Iran'], ['iq', 'Iraq'], ['il', 'Israel'],
            ['jo', 'Jordan'], ['kz', 'Kazakhstan'], ['kg', 'Kyrgyzstan'],
            ['kh', 'Cambodia'], ['kr', 'Korea'], ['kw', 'Kuwait'],
            ['la', 'Laos'], ['lb', 'Lebanon'], ['lk', 'Sri Lanka'],
            ['mm', 'Myanmar'], ['mn', 'Mongolia'], ['mv', 'Maldives'],
            ['my', 'Malaysia'], ['np', 'Nepal'], ['om', 'Oman'],
            ['ph', 'Philippines'], ['pk', 'Pakistan'], ['qa', 'Qatar'],
            ['sa', 'Saudi Arabia'], ['sy', 'Syria'], ['th', 'Thailand'],
            ['tj', 'Tajikistan'], ['tm', 'Turkmenistan'], ['tl', 'Timor-Leste'],
            ['tr', 'Turkey'], ['tw', 'Taiwan'], ['uz', 'Uzbekistan'],
            ['vn', 'Vietnam'], ['ye', 'Yemen'], ['hk', 'Hong Kong'],
            ['jp', 'Japan'], ['ru', 'Russia'], ['cn', 'China'],
            ['cd', 'Democratic Republic of the Congo'], ['sg', 'Singapore']
        ],
        AF: [ ['eg', 'Egypt'], ['ao', 'Angola'], ['mg', 'Madagascar'] ]
    };

    var savedStatus = {
        EU: {
            ad: 1,
            al: 0,
            at: 1,
            ba: 0,
            be: 1,
            bg: 1,
            by: 1,
            ch: 0,
            cz: 1,
            cy: 1,
            de: 0,
            dk: 0,
            ee: 0,
            es: 0,
            fi: 1,
            fo: 1,
            fr: 1,
            hr: 0,
            hu: 0,
            gb: 0,
            gr: 1,
            ie: 1,
            is: 1,
            it: 0,
            li: 0,
            lt: 0,
            lu: 0,
            lv: 0,
            md: 0,
            me: 1,
            mk: 1,
            mt: 1,
            nl: 1,
            no: 0,
            pl: 0,
            pt: 0,
            ro: 1,
            va: 0,
            si: 0,
            se: 1,
            sk: 0,
            ua: 1,
            completedCountries: 20,
            totalCountries: 46
        },
        
        NA: {
            us: 0,
            ca: 1,
            mx: 1,
            completedCountries: 2,
            totalCountries: 3
        },

        SA: {
            aw: 1,
            ar: 1,
            bo: 0,
            br: 0,
            cl: 1,
            pe: 1,
            co: 0,
            cw: 1,
            ec: 0,
            fk: 1,
            gd: 0,
            gy: 0,
            py: 1,
            sr: 1,
            tt: 0,
            uy: 1,
            ve: 1,
            gf: 1,            
            completedCountries: 11,
            totalCountries: 18
        },

        OC: {
            au: 0,
            fj: 1,
            nc: 1,
            nz: 1,
            pg: 1,
            sb: 0,
            vu: 0,
            completedCountries: 4,
            totalCountries: 7
        },

        AS: {
            af: 1,
            ae: 1,
            am: 0,
            az: 1,
            bd: 0,
            bn: 0,
            bt: 0,
            id: 1,
            in: 1,
            ir: 0,
            iq: 1,
            il: 1,
            jo: 1,
            kz: 1,
            kg: 0,
            kh: 0,
            kr: 1,
            kw: 0,
            la: 0,
            lb: 0,
            lk: 1,
            mm: 0,
            mn: 1,
            mv: 1,
            jp: 1,
            ru: 1,
            cn: 1,
            completedCountries: 16,
            totalCountries: 27
        },

        AF:  {
            eg: 0,
            ao: 1,
            mg: 1,
            completedCountries: 2,
            totalCountries: 3
        },
        
        completedCountries: 3,
        totalCountries: 198
    }

    localStorage.setItem('savedStatus', JSON.stringify(savedStatus));
    savedStatus = JSON.parse(localStorage.getItem('savedStatus'));

    for (let i = 0; i < countryIDs[continentID].length; i++) {
        countrySvgs.push(
            <TouchableOpacity key={countryIDs[continentID][i][0]} onPress={() => navigation.navigate('Country', {countryID: countryIDs[continentID][i][0], countryTitle: countryIDs[continentID][i][1], continentID: continentID})} activeOpacity={1} style={{ flex: 1, justifyContent: 'center', alignItems:'center', height: 250, width: 250, marginLeft: 50, borderColor: '#E3E340', borderRadius: 36, borderWidth: 10, backgroundColor: '#006994', marginRight:(i == countryIDs[continentID].length - 1) ? 50 : 0}}>        
                <CountryComponent isCompleted={savedStatus[continentID][countryIDs[continentID][i][0]]} countryID={countryIDs[continentID][i][0]} continentID={continentID}></CountryComponent>
                <Text style={{position: 'absolute', bottom:10, color: '#E3E340', fontWeight: 'bold', padding: 5, borderRadius: 5}}>{countryIDs[continentID][i][1]}</Text>
            </TouchableOpacity>
        );
    }

    var totalCountries = {
        NA: 3,
        SA: 20,
        EU: 48,
        AF: 58,
        AS: 45,
        OC: 15,
        TOTAL: 146,
    }

    var continentId2Title = {
        NA: 'North America',
        SA: 'South America',
        EU: 'Europe',
        AF: 'Africa',
        AS: 'Asia',
        OC: 'Oceania'
    }

    function getContinentalIcon(continentID) {
        switch(continentID) {
            case 'EU':
                return <Image style={{position: 'absolute', left: 0, height: 24, width: 25, marginLeft: 20, marginTop: 25}} source={require('../assets/continents/eu.png')}/>
            case 'NA':
                return <Image style={{position: 'absolute', left: 0, height: 24, width: 31, marginLeft: 15, marginTop: 27}} source={require('../assets/continents/na.png')}/>
            case 'SA':
                return <Image style={{position: 'absolute', left: 0, height: 25, width: 15, marginLeft: 25, marginTop: 29}} source={require('../assets/continents/sa.png')}/>
            case 'AF':
                return <Image style={{position: 'absolute', left: 0, height: 25, width: 21, marginLeft: 20, marginTop: 25}} source={require('../assets/continents/af.png')}/>
            case 'OC':
                return <Image style={{position: 'absolute', left: 0, height: 20, width: 25, marginLeft: 22, marginTop: 30}} source={require('../assets/continents/oc.png')}/>
            case 'AS': 
                return <Image style={{position: 'absolute', left: 0, height: 20, width: 28, marginLeft: 15, marginTop: 30}} source={require('../assets/continents/as.png')}/>;
        }
    }

    return (
        <View style={{height: '100%', backgroundColor: '#0FBEBE'}}>
            <View style={{height: '10%'}}>
                <Text style={{position: 'absolute', left: 0, textAlign: 'left', fontWeight: 'bold', color: '#E3E340', paddingLeft: 50, paddingTop: 30}}>{continentId2Title[continentID]}</Text>
                {getContinentalIcon(continentID)}
                <Text style={{position: 'absolute', right: 0, textAlign: 'right', fontWeight: 'bold', color: '#E3E340', paddingRight: 50, paddingTop: 30}}>{savedStatus[continentID].completedCountries}/{totalCountries[continentID]}</Text>
                <Image style={{position: 'absolute', right: 0, height: 30, width: 30, marginRight: 20, marginTop: 25}} source={require('../assets/world.png')}/>
            </View>
            
            <View style={{height:'90%', flex: 1, justifyContent: 'center'}}>
                <View>
                    <FlatList initialNumToRender={2} horizontal={true} showsHorizontalScrollIndicator={false} data={countrySvgs} renderItem={({ item }) => item}/>
                </View>
            </View>
        </View>
    );
}

export default ContinentScreen;