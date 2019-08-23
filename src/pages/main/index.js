import React, { Component } from "react";
import api from "../../services/api";

export default class Main extends Component {
  componentDidMount() {
    this.loadConcursos();
  }

  loadConcursos = async () => {
    const response = await api.get("2180");
    console.log(response);
  };

  render() {
    return <h1>Main</h1>;
  }
}
