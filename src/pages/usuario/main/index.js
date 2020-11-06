import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Main () {

    const [endereco, setEndereco] = useState({
        logradouro:'',
        cep:''
    });

    useEffect (()=>{
        setEndereco({logradouro: 'Rua Nova Colina, 13', cep: '72456-550'});
    }, []);

    const changeAddres = () => {
        let logr = 'Rua Elvis Presley ' + Math.floor(Math.random() * 100)
        setEndereco({logradouro: logr, cep: '73456-800'})
    }

    return (
        <div>
            <p>Logradouro: {endereco.logradouro}</p>
            <p>Endereco: {endereco.cep}</p>
            <button onClick={changeAddres}>clique</button>
        </div>
    )
}

export default Main;
