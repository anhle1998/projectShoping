import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configStore';
import SearchWeather from './components/Search';
import InfoWeather from './components/Weather';


const { store } = configureStore();



const AppWeather = () => {
    return(
        <Provider store={ store }>
            <SearchWeather/>
            <InfoWeather/>
        </Provider>
        
    )
}
export default React.memo(AppWeather);
