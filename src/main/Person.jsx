import React, { Component } from 'react'
import Home from '../components/home/Home'
import Work from '../components/work/Work'
import './Person.css'

export default class Person extends Component {
  render() {
    return (
      <div class="main">
        <Home />
        <Work />
      </div>
    )
  }
}
