import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Here we provide the facility of free Coctails which is really awesome and the big deal with that is you can have whichsoever flavour you want.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "We do have a Hiking site too where you can do all the Hiking Kinda stuff and also fountains where you can do all the swimming kinda stuff.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "We have a great facality of free shuttle vans which is for all the tourists who are staying in our Resort all over inside the Resort Area ",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "We do have a mini Beer Bar where you can enjoy your beer of almost every brand and also have disco club inside that place.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
