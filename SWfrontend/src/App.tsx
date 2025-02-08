import './App.css'
import React from "react";
import CardFrame from './components/CardFrame.tsx';
import PlanetGenerator from './logic/planetGenerator.ts';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return <>
      <CardFrame planetGenerator={new PlanetGenerator()}></CardFrame>
    </>
  }
}

