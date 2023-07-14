/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const palos = ["heart", "spade", "club", "diamond"];
  const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const paloIndex = Math.floor(Math.random() * 4);
  const valorIndex = Math.floor(Math.random() * 13);

  const topElement = document.querySelector(".top");
  const midElement = document.querySelector(".mid");
  const botElement = document.querySelector(".bot");

  topElement.classList.remove("heart", "spade", "club", "diamond");
  botElement.classList.remove("heart", "spade", "club", "diamond");

  topElement.classList.add(palos[paloIndex]);
  botElement.classList.add(palos[paloIndex]);

  midElement.textContent = valores[valorIndex];
};
