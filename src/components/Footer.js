import React, { Component } from 'react'
import { FaDumbbell } from "react-icons/fa"; 
export default class Footer extends Component {
  render() {
    return (
        <div className="Copyright">
        <marquee>Copyright @ 2022 GYM Management System <FaDumbbell className='dumbel'/></marquee>
    </div>
    )
  }
}
