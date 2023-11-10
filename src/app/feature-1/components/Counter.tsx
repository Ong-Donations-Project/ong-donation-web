import { useCounter } from "../services/useCounter"
import style from '../scss/counter.module.scss'

interface CounterProps {
  initialValue?: number
}

export default function Counter({ initialValue }: CounterProps) {
  const { counter, incrementCounter } = useCounter(initialValue)

  return (
    <div className={style.counterContainer}>
      <h1 className={style.title}>Counter: <span>{ counter }</span></h1>
      <div className={style.btnContainer}>
        <button className={style.btn} onClick={() => incrementCounter(1)}>+1</button>
        <button className={style.btn} onClick={() => incrementCounter(5)}>+5</button>
      </div>
    </div>
  )
}
