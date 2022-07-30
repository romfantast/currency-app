import React from "react";
import "./Rate.css";
import Calc from "../Calc/Calc";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      currencyRate: {},
    };
    this.currency = ["USD", "UAH", "MAD", "LKR"];
    this.getRate();
  }

  getRate = () => {
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=ccaaa2e77b77f205e59b990dbda43a1f"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ date: data.date });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        console.log(result);
        this.setState({ currencyRate: result });
      });
  };

  render() {
    return (
      <div className="rate">
        <h3>Current value on {this.state.date}</h3>
        <div className="flex-container ">
          {Object.keys(this.state.currencyRate).map((keyName, i) => (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">
                {this.state.currencyRate[keyName].toFixed(2)}
              </div>
              {/* <div className="currency-out">1200 Kr</div> */}
              <p>* You can buy by 1 EUR </p>
            </div>
          ))}
        </div>
        <Calc rate={this.state.currencyRate} />
      </div>
    );
  }
}

export default Rate;
