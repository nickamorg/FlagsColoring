import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import localStorage from 'react-native-sync-localstorage'
import CountryComponent from '../src/CountryComponent';
import { continentDefs } from '../src/continentDefs';
import { countryDefs } from '../src/countryDefs';

class ContinentScreen extends React.PureComponent {
    countrySvgs = [];
    continentID;
    savedStatus;

    constructor(props) {
        super(props);

        this.continentID = props.route.params.continentID;
        this.savedStatus = JSON.parse(localStorage.getItem('savedStatus'));

        if (props.route.params.countryID !== undefined) {
            this.savedStatus[this.continentID][props.route.params.countryID] = 1;
        }

        for (let i = 0; i < countryDefs[this.continentID].length; i++) {
            console.log(this.continentID + " " + countryDefs[this.continentID][i][0]);
            this.countrySvgs.push(
                <TouchableOpacity key={countryDefs[this.continentID][i][0]} onPress={() => props.navigation.navigate('Country', {countryID: countryDefs[this.continentID][i][0], countryTitle: countryDefs[this.continentID][i][1], continentID: this.continentID, isCompleted:this.savedStatus[this.continentID][countryDefs[this.continentID][i][0]]})} activeOpacity={1} style={{ flex: 1, justifyContent: 'center', alignItems:'center', height: 250, width: 250, marginLeft: 50, borderColor: '#E3E340', borderRadius: 36, borderWidth: 10, backgroundColor: '#006994', marginRight:(i == countryDefs[this.continentID].length - 1) ? 50 : 0}}>
                    <CountryComponent isCompleted={this.savedStatus[this.continentID][countryDefs[this.continentID][i][0]]} countryID={countryDefs[this.continentID][i][0]} continentID={this.continentID}></CountryComponent>
                    <Text style={{position: 'absolute', bottom:10, color: '#E3E340', fontWeight: 'bold', padding: 5, borderRadius: 5}}>{countryDefs[this.continentID][i][1]}</Text>
                </TouchableOpacity>
            );
        }

        console.log("RENDERED");
    }
    
    render() {
        return (
            <View style={{height: '100%', backgroundColor: '#0FBEBE'}}>
                <ImageBackground source={continentDefs[this.continentID].img} style={{height: '100%', width:'100%', backgroundColor:"#0FBEBE"}} imageStyle={{ width:'100%', height:'100%', opacity:0.3, resizeMode:"contain", alignSelf: "flex-end", overflow : 'visible', backfaceVisibility: 'visible', flex : 2}}>
                    <View style={{height: '10%'}}>
                        <Text style={{position: 'absolute', right: 0, textAlign: 'right', fontWeight: 'bold', color: '#E3E340', paddingRight: 50, paddingTop: 30}}>{this.savedStatus[this.continentID].completedCountries}/{continentDefs[this.continentID].total}</Text>
                        <Image style={{position: 'absolute', right: 0, height: 30, width: 30, marginRight: 20, marginTop: 25}} source={require('../assets/earth.png')}/>
                    </View>
                    <View style={{height:'90%', flex: 1, justifyContent: 'center'}}>
                        <View>
                        <FlatList initialNumToRender={2} horizontal={true} showsHorizontalScrollIndicator={false} data={this.countrySvgs} renderItem={({ item }) => item}/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default ContinentScreen;