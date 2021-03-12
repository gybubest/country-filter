import React, { useState } from 'react';
import './App.css';
import CountryList from './Components/CountryList';
import Search from './Components/Search';
import {response} from './response';
import 'h8k-components';

const title = "Country Filter";
function App() {
    const [countries, setCountries] = useState(response);
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <section className="w-30 justify-content-center layout-column mt-30 mx-auto">
                <Search />
                <CountryList 
                    countries={countries}
                />
            </section>
        </div>
    );
}

export default App;
