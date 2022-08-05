import React from "react";
import { Link,NavLink } from "react-router-dom";
import cinima from "../assets/undraw_home_cinema_l7yl.svg";


import LoginButton from "../components/LoginButton";

import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId=process.env.REACT_APP_CLIENT_KEY


const Landing = () => {

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    }
    gapi.load('client:auth2',start);
  });
  

  return (
    <section className="landingPage">
      <section className="landingPage__container">
        <h1 className="landingPage__container--title">Thikkiiana City</h1>
        <section className="landingPage__container__main">
          <section className="landingPage__container__main__desc">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              culpa placeat repellat sequi atque debitis mollitia magnam labore.
              Natus id mollitia soluta cumque officiis suscipit recusandae ut
              enim nisi at atque esse, ea eligendi, unde earum quam adipisci.
              Maiores assumenda tempora molestiae quibusdam modi, qui eveniet
              dolore nihil earum repudiandae?
            </p>
          </section>
          <section className="landingPage__container__main__image">
            <img src={cinima} alt="" />
          </section>
        </section>
        <section className="landingPage__container__button">
        <NavLink
        className="landingPage__container__button--element"
         to="/home"
         activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
         >
          Go To Home {" "}&gt;
        </NavLink>

        </section>
        <section>
        <LoginButton/>
        </section>
      </section>
    </section>
  );
};

export default Landing;
