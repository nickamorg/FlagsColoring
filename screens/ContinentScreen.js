import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
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
            ['bt', 'Bhutan'], ['id', 'Indonesia'], ['il', 'Israel'],
            ['in', 'India'], ['iq', 'Iraq'], ['ir', 'Iran'],
            ['jo', 'Jordan'], ['kg', 'Kyrgyzstan'], ['kh', 'Cambodia'],
            ['kr', 'Korea'], ['kw', 'Kuwait'], ['kz', 'Kazakhstan'],
            ['la', 'Laos'], ['lb', 'Lebanon'], ['lk', 'Sri Lanka'],
            ['mm', 'Myanmar'], ['mn', 'Mongolia'], ['mv', 'Maldives'],
            ['my', 'Malaysia'], ['np', 'Nepal'], ['om', 'Oman'],
            ['ph', 'Philippines'], ['pk', 'Pakistan'], ['qa', 'Qatar'],
            ['sa', 'Saudi Arabia'], ['sy', 'Syria'], ['th', 'Thailand'],
            ['tj', 'Tajikistan'], ['tl', 'Timor-Leste'], ['tm', 'Turkmenistan'],
            ['tr', 'Turkey'], ['tw', 'Taiwan'], ['uz', 'Uzbekistan'],
            ['vn', 'Vietnam'], ['ye', 'Yemen'], ['hk', 'Hong Kong'],
            ['jp', 'Japan'], ['ru', 'Russia'], ['cn', 'China'],
            ['cd', 'Democratic Republic of the Congo'], ['sg', 'Singapore']
        ],
        AF: [ ['eg', 'Egypt'], ['ao', 'Angola'], ['mg', 'Madagascar'] ]
    };
    
    var savedStatus = JSON.parse(localStorage.getItem('savedStatus'));

    savedStatus[continentID][route.params.countryID] = 1;

    for (let i = 0; i < countryIDs[continentID].length; i++) {
        countrySvgs.push(
            <TouchableOpacity key={countryIDs[continentID][i][0]} onPress={() => navigation.navigate('Country', {countryID: countryIDs[continentID][i][0], countryTitle: countryIDs[continentID][i][1], continentID: continentID, isCompleted:savedStatus[continentID][countryIDs[continentID][i][0]]})} activeOpacity={1} style={{ flex: 1, justifyContent: 'center', alignItems:'center', height: 250, width: 250, marginLeft: 50, borderColor: '#E3E340', borderRadius: 36, borderWidth: 10, backgroundColor: '#006994', marginRight:(i == countryIDs[continentID].length - 1) ? 50 : 0}}>        
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
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {countrySvgs}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

export default ContinentScreen;