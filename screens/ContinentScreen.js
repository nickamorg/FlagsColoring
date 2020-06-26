import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import localStorage from 'react-native-sync-localstorage'
import CountryComponent from '../src/CountryComponent';
import { countryDefs } from '../src/countryDefs';

function ContinentScreen({ route, navigation }) {
    var continentID = route.params.continentID;
    var countrySvgs = [];
    
    var savedStatus = JSON.parse(localStorage.getItem('savedStatus'));

    savedStatus[continentID][route.params.countryID] = 1;

    for (let i = 0; i < countryDefs[continentID].length; i++) {
        countrySvgs.push(
            <TouchableOpacity key={countryDefs[continentID][i][0]} onPress={() => navigation.navigate('Country', {countryID: countryDefs[continentID][i][0], countryTitle: countryDefs[continentID][i][1], continentID: continentID, isCompleted:savedStatus[continentID][countryDefs[continentID][i][0]]})} activeOpacity={1} style={{ flex: 1, justifyContent: 'center', alignItems:'center', height: 250, width: 250, marginLeft: 50, borderColor: '#E3E340', borderRadius: 36, borderWidth: 10, backgroundColor: '#006994', marginRight:(i == countryDefs[continentID].length - 1) ? 50 : 0}}>
                <CountryComponent isCompleted={savedStatus[continentID][countryDefs[continentID][i][0]]} countryID={countryDefs[continentID][i][0]} continentID={continentID}></CountryComponent>
                <Text style={{position: 'absolute', bottom:10, color: '#E3E340', fontWeight: 'bold', padding: 5, borderRadius: 5}}>{countryDefs[continentID][i][1]}</Text>
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

    function getContinentalIcon(continentID) {
        switch(continentID) {
            case 'EU':
                return require('../assets/continents/eu.png');
            case 'NA':
                return require('../assets/continents/na.png');
            case 'SA':
                return require('../assets/continents/sa.png');
            case 'AF':
                return require('../assets/continents/af.png');
            case 'OC':
                return require('../assets/continents/oc.png');
            case 'AS': 
                return require('../assets/continents/as.png');;
        }
    }

    return (
        <View style={{height: '100%', backgroundColor: '#0FBEBE'}}>
            <ImageBackground source={getContinentalIcon(continentID)} style={{height: '100%', width:'100%', backgroundColor:"#0FBEBE"}} imageStyle={{ width:'100%', height:'100%', opacity:0.3, resizeMode:"contain", alignSelf: "flex-end", overflow : 'visible', backfaceVisibility: 'visible', flex : 2}}>
                <View style={{height: '10%'}}>
                    <Text style={{position: 'absolute', right: 0, textAlign: 'right', fontWeight: 'bold', color: '#E3E340', paddingRight: 50, paddingTop: 30}}>{savedStatus[continentID].completedCountries}/{totalCountries[continentID]}</Text>
                    <Image style={{position: 'absolute', right: 0, height: 30, width: 30, marginRight: 20, marginTop: 25}} source={require('../assets/earth.png')}/>
                </View>
                <View style={{height:'90%', flex: 1, justifyContent: 'center'}}>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {countrySvgs}
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default ContinentScreen;