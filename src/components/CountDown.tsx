"use client"


import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2024-09-11");

const CountDown = () => {
  return (
    <div>
      <Countdown className="font-bold text-5xl text-yellow-500" date={endingDate}/>
    </div>
  )
}

export default CountDown
