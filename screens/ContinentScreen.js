import React, { useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, ImageBackground, BackHandler } from 'react-native';
import localStorage from 'react-native-sync-localstorage'
import CountryComponent from '../src/CountryComponent';
import { continentDefs } from '../src/continentDefs';
import { countryDefs } from '../src/countryDefs';

function ContinentScreen({ route, navigation }) {

    useEffect(() => {
        const backAction = () => {
            route.params.refresh();
        }
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);

    var continentID = route.params.continentID;
    var savedStatus = JSON.parse(localStorage.getItem('savedStatus'));

    var countrySvgs = [];
    for (let i = 0; i < countryDefs[continentID].length; i++) {
        countrySvgs.push(
            <TouchableOpacity key={countryDefs[continentID][i][0]} onPress={() => navigation.navigate('Country', {countryID: countryDefs[continentID][i][0], countryTitle: countryDefs[continentID][i][1], continentID: continentID, isCompleted:savedStatus[continentID][countryDefs[continentID][i][0]]})} activeOpacity={1} style={{ flex: 1, justifyContent: 'center', alignItems:'center', height: 250, width: 250, marginLeft: 50, borderColor: '#E3E340', borderRadius: 36, borderWidth: 10, backgroundColor: '#006994', marginRight:(i == countryDefs[continentID].length - 1) ? 50 : 0}}>
                <CountryComponent isCompleted={savedStatus[continentID][countryDefs[continentID][i][0]]} countryID={countryDefs[continentID][i][0]} continentID={continentID}></CountryComponent>
                <Text style={{position: 'absolute', bottom:10, color: '#E3E340', fontWeight: 'bold', padding: 5, borderRadius: 5}}>{countryDefs[continentID][i][1]}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{height: '100%', backgroundColor: '#0FBEBE'}}>
            <ImageBackground source={continentDefs[continentID].img} style={{height: '100%', width:'100%', backgroundColor:"#0FBEBE"}} imageStyle={{ width:'100%', height:'100%', opacity:0.3, resizeMode:"contain", alignSelf: "flex-end", overflow : 'visible', backfaceVisibility: 'visible', flex : 2}}>
                <View style={{height: '10%'}}>
                    <Text style={{position: 'absolute', right: 0, textAlign: 'right', fontWeight: 'bold', color: '#E3E340', paddingRight: 50, paddingTop: 30}}>{savedStatus[continentID].completedCountries}/{continentDefs[continentID].total}</Text>
                    <Image style={{position: 'absolute', right: 0, height: 30, width: 30, marginRight: 20, marginTop: 25}} source={require('../assets/earth.png')}/>
                </View>
                <View style={{height:'90%', flex: 1, justifyContent: 'center'}}>
                    <View>
                        <FlatList initialNumToRender={2} horizontal={true} showsHorizontalScrollIndicator={false} data={countrySvgs} renderItem={({ item }) => item}/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default ContinentScreen;