import React, {Component} from 'react';
import Svg, {Pattern, Path, Defs, Image} from 'react-native-svg';
import { countrySvgs } from './countrySvgs';
import { countryImages } from './countryImages';

class CountryComponent extends Component {
    render = () => {
        const isCompleted = this.props.isCompleted;
        const continentID = this.props.continentID;
        const countryID = this.props.countryID;

        return (
            <Svg width='70%' height='70%' viewBox={countrySvgs[continentID][countryID].viewBox}>
                <Defs>
                    <Pattern id='pattern' preserveAspectRatio='xMidYMid slice' width='100%' height='100%' viewBox='0 0 500 300'>
                        <Image width='500' height='300' href={countryImages[continentID][countryID][0]}/>
                    </Pattern>
                </Defs>
                <Path d={countrySvgs[continentID][countryID].d} transform={countrySvgs[continentID][countryID].transform} fill={isCompleted == 1 ? 'url(#pattern)' : '#f2f2f2'}/>
            </Svg>
        );
    }
}

export default CountryComponent;