import React from "react";
import "./About.css";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src="https://images-media.currency.com/6e89780f/1959/5495/93cc/37aa5e222ba9/on_page/shutterstock-367050494.jpg"></img>
        <p className="bold">The strongest currency in the world today</p>
        Generally speaking,{" "}
        <span className="bold">
          the US dollar is regarded as the strongest currency in the world
        </span>{" "}
        on multiple fronts. It’s also the most powerful currency.
        <p>
          Several factors, and a lot of history, are behind this. By and large,
          the US offers plenty of stability when it comes to economic policies
          and political climate. A sizeable proportion of foreign bank reserves
          have been denominated in dollars.
        </p>
        <p>
          Bonds from the US Treasury – a form of government debt – are seen as
          trustworthy because the country has a reputation for paying them back
          in full and on time. The dollar is also relied upon as a means of
          exchange around the world, including in parts Europe and Latin
          America.
        </p>
      </div>
    );
  }
}

export default About;
