import React, { useState, useEffect } from "react"

export default (func: any, delay: number) => {
  const [timer, setTimer] = useState(null) // state -- currently active timeout/time-bomb

  const debouncer = (param) => {
    clearTimeout(timer)
    setTimer(setTimeout(() => func(param), delay))
  }

  return debouncer
}