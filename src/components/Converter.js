import React from 'react';
import styled from 'styled-components';

function Converter() {

    function getCurrencyApi() {
        return fetch('http://data.fixer.io/api/latest?access_key=c8c80d5379b181d30ff3fdea2f81a08c', {
            method: 'GET'
        }).then(response => response.json())
        .then(response => console.log(response))
    }

    getCurrencyApi();

    return (
        <ConverterPage>
            <Header>Калькулятор валюты</Header>
            <Currency>
                <Option selected>USD</Option>
                <Option>EUR</Option>
                <Option>BYN</Option>
                <Option>RUB</Option>
            </Currency>
            <CurrencyValue type="number" value="0"></CurrencyValue>

            <Currency>
                <Option>USD</Option>
                <Option selected>EUR</Option>
                <Option>BYN</Option>
                <Option>RUB</Option>
            </Currency>
            <CurrencyValue type="number" value="0"></CurrencyValue>
        </ConverterPage>
    )
}

export default Converter

const ConverterPage = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.h2`
    margin-bottom: 30px;
`;

const Currency = styled.select`
    margin-bottom: 5px;
`;

const Option = styled.option``;

const CurrencyValue = styled.input`
    margin-bottom: 20px;
`;