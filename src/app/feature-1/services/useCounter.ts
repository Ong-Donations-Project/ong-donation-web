import { useState } from "react"

interface IUseCounter {
  counter: number,
  incrementCounter (ammount: number): void,
}

export const useCounter = (initialValue?: number): IUseCounter => {
  const [counter, setCounter] = useState<number>(initialValue ?? 0);

  const incrementCounter = (ammount: number) => {
    setCounter(counter + ammount);
  }

  return {
    counter,
    incrementCounter
  }
}