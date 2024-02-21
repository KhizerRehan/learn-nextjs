'use client'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment } from "@/store/slices/counter/counter";

export default function Home() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center mb-12">
        Count is {counter}
      </div>

      <div className="flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  console.log("Incrementing")
                  dispatch(increment())
                }}>
          Increment
        </button>
        <button className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  console.log("Decrementing")
                  dispatch(decrement())
                }}>
          Decrement
        </button>
      </div>
    </main>
  )
}
