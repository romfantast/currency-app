import React from "react";
import "./Calc.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      rate: props.rate,
    };
  }

  calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    console.log(elements);
    console.log(elements["count-currency"].value);
    console.log(elements["type-currency"].value);
    let countCurrency = elements["count-currency"].value;
    let typeCurrency = elements["type-currency"].value;
    this.setState({ result: countCurrency / this.state.rate[typeCurrency] });
  };

  render() {
    return (
      <div className="calculator">
        <h3>Calculator exchange</h3>
        <div className="block-calc">
          <div>I want to buy</div>
          <div>
            <form onSubmit={this.calcRate}>
              <input
                type="number"
                defaultValue="100"
                name="count-currency"
              ></input>
              <select id="" name="type-currency">
                {Object.keys(this.props.rate).map((keyName, i) => (
                  <option key={keyName} value={keyName}>
                    {keyName}
                  </option>
                ))}
              </select>
              <input type="submit" value="Calculate"></input>
            </form>
          </div>
          <div>
            <h3>Result:</h3>
            <ul className="calc-res">
              <li>
                You need to pay ---&gt; EUR {this.state.result.toFixed(2)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
