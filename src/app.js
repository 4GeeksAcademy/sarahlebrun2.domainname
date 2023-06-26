/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let domain = "";

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let l = 0; l < adj.length; l++) {
      for (let a = 0; a < noun.length; a++) {
        console.log(pronoun[i] + adj[l] + noun[a]);
        domain += `<li>${pronoun[i]}${adj[l]}${noun[a]}</li>`;
      }
    }
  }

  document.getElementById("domain-list").innerHTML = domain;
};
