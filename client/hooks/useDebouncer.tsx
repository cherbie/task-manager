import React, { useState, useEffect } from "react"

export default (func: any, delay: number) => {
  const [timer, setTimer] = useState(null)

  const debounce = (param) => {
    clearTimeout(timer)
    setTimer(setTimeout(() => func(param), delay))
  }

  return debounce
}