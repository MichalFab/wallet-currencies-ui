import React, {Component} from 'react';

class Currencies extends Component {
    constructor(props) {
        super(props);
        this.state = {currencies: []};
    }

    componentDidMount() {
        fetch('http://localhost:8080/currencies', {headers: {"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU2MTEwNTA0MH0.9PF5R4DA6rZQhoOLBn1l48VW4sgGmYjca8abazExtYxhCh9I5oV2z1_Ywalu46xioKph0Zo7OEXIb96WeNoALw"}})
            .then((response) => response.json())
            .then((responseData) => {
                console.log("dane")
                console.log(responseData)
                this.setState({
                    currencies: responseData
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        const tableRows = this.state.currencies.map((currency, index) =>
            <tr key={index}>
                <td>{currency.name}</td>
                <td>{currency.code}</td>
                <td>{currency.amount}</td>
                <td>{currency.rate}</td>
            </tr>
        );
        return (
        <div className="App">
            <table>
                <tbody>{tableRows}</tbody>
            </table>
        </div>
    );
    }
}

export default Currencies;
