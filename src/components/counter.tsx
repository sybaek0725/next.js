'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p>Count: {count}</p>
      <button style={{background: '#fff', padding: '0 10px', color: '#000'}} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{background: '#000', padding: '0 10px', color: '#fff'}} onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  )
}