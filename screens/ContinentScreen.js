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
            ['si', 'Slovenia'], ['se', 'Sweden'], ['sk', 'Slovakia']   
        ],
        NA: [ ['us', 'United States'], ['ca', 'Canada'], ['mx', 'Mexico'] ],
        SA: [ ['br', 'Brazilia'], ['ar', 'Argentina'], ['pe', 'Perou'] ],
        OC: [ ['au', 'Australia'], ['nz', 'New Zealand'], ['pg', 'Papua New Guinea']],
        AS: [ ['jp', 'Japan'], ['ru', 'Russia'], ['cn', 'China'] ],
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
            lv: 0,
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
            completedCountries: 18,
            totalCountries: 44
        },
        
        NA: {
            us: 0,
            ca: 1,
            mx: 1,
            completedCountries: 2,
            totalCountries: 3
        },

        SA: {
            br: 0,
            ar: 1,
            pe: 1,
            completedCountries: 2,
            totalCountries: 3
        },

        OC: {
            au: 0,
            nz: 1,
            pg: 1,
            completedCountries: 3,
            totalCountries: 4
        },

        AS: {
            jp: 1,
            ru: 1,
            cn: 1,
            completedCountries: 3,
            totalCountries: 4
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
            <TouchableOpacity key={countryIDs[continentID][i][0]} onPress={() => navigation.navigate('Country', {countryID: countryIDs[continentID][i][0], countryTitle: countryIDs[continentID][i][1]})} activeOpacity={1} style={{ flex: 1, justifyContent: 'center', alignItems:'center', height: 250, width: 250, marginLeft: 50, borderColor: '#E3E340', borderRadius: 36, borderWidth: 10, backgroundColor: '#006994', marginRight:(i == countryIDs[continentID].length - 1) ? 50 : 0}}>        
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
                return <Image style={{position: 'absolute', left: 0, height: 24, width: 25, marginLeft: 20, marginTop: 25}} source={require('../assets/conrinents/eu.png')}/>
            case 'NA':
                return <Image style={{position: 'absolute', left: 0, height: 24, width: 31, marginLeft: 15, marginTop: 27}} source={require('../assets/conrinents/na.png')}/>
            case 'SA':
                return <Image style={{position: 'absolute', left: 0, height: 25, width: 15, marginLeft: 25, marginTop: 29}} source={require('../assets/conrinents/sa.png')}/>
            case 'AF':
                return <Image style={{position: 'absolute', left: 0, height: 25, width: 21, marginLeft: 20, marginTop: 25}} source={require('../assets/conrinents/af.png')}/>
            case 'OC':
                return <Image style={{position: 'absolute', left: 0, height: 20, width: 25, marginLeft: 22, marginTop: 30}} source={require('../assets/conrinents/oc.png')}/>
            case 'AS': 
                return <Image style={{position: 'absolute', left: 0, height: 20, width: 28, marginLeft: 15, marginTop: 30}} source={require('../assets/conrinents/as.png')}/>;
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