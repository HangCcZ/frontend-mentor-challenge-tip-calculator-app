import Head from 'next/head'
import React, { useState, useRef } from 'react'
export default function Home() {
  const [bill, setBill] = useState('') // string field for the placeholder to work
  const [tipPercent, setTipPercent] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState('') // string field for the placeholder to work
  const [isTipPercentSelected, setIsTipPercentSelected] = useState(0)
  const [customTip, setCustomTip] = useState('') // handle custom button display

  const tipRate = [5, 10, 15, 25, 50]
  const customRef = useRef(null)

  const calculateTipAmount = () => {
    return Number(bill) == 0 || tipPercent == 0 || Number(numberOfPeople) == 0
      ? 0
      : (
          (Number(bill) * Number(tipPercent)) /
          100 /
          Number(numberOfPeople)
        ).toFixed(2)
  }

  const calculateTotalPerPerson = () => {
    return Number(bill) == 0 || tipPercent == 0 || Number(numberOfPeople) == 0
      ? 0
      : (
          (Number(bill) * (1 + tipPercent / 100)) /
          Number(numberOfPeople)
        ).toFixed(2)
  }

  const resetStates = () => {
    setBill('')
    setTipPercent(0)
    setNumberOfPeople('')
    setIsTipPercentSelected(0)
    setCustomTip('')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Tip Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col rounded-t-3xl bg-white px-8 py-6">
        <div>
          <h2 className="text-md mt-2 font-semibold text-dark-grayish-cyan">
            Bill
          </h2>
          <div className="mt-2 flex items-center justify-center rounded-lg bg-light-grayish-cyan2 p-2 focus-within:ring-2 focus-within:ring-strong-cyan">
            <img src="/icon-dollar.svg" />
            <input
              onChange={(e) => {
                setBill(e.target.value)
              }}
              value={bill}
              placeholder="0"
              type="number"
              onWheel={(e) => e.currentTarget.blur()}
              className="w-11/12 bg-light-grayish-cyan2 text-right text-2xl font-bold text-very-dark-cyan focus:outline-none "
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-md font-semibold text-dark-grayish-cyan">
            Select Tip %
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-4">
            {tipRate.map((tipPercent) => (
              <button
                key={tipPercent}
                onClick={() => {
                  setTipPercent(Number(tipPercent))
                  setIsTipPercentSelected(tipPercent)
                  setCustomTip('')
                }}
                className={`rounded-md ${
                  isTipPercentSelected == tipPercent
                    ? 'bg-strong-cyan'
                    : `bg-very-dark-cyan`
                } p-2 text-2xl font-semibold text-white`}
              >
                {tipPercent}
              </button>
            ))}

            <input
              ref={customRef}
              placeholder="CUSTOM"
              value={customTip}
              onClick={(e) => setIsTipPercentSelected(0)}
              onChange={(e) => {
                setCustomTip(e.target.value)
                // if any number is entered
                if (e.target.value != 'CUSTOM') {
                  setTipPercent(Number(e.target.value))
                }
              }}
              onWheel={(e) => e.currentTarget.blur()}
              type="number"
              className="rounded-md bg-light-grayish-cyan2 p-2 text-center text-2xl font-semibold text-dark-grayish-cyan focus-within:ring-2 focus-within:ring-strong-cyan focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-md font-semibold text-dark-grayish-cyan">
            Number of People
          </h2>
          <div className="mt-2 flex items-center justify-center rounded-lg bg-light-grayish-cyan2 p-2 focus-within:ring-2 focus-within:ring-strong-cyan">
            <img src="/icon-person.svg" />
            <input
              onChange={(e) => setNumberOfPeople(e.target.value)}
              placeholder="0"
              onWheel={(e) => e.currentTarget.blur()}
              value={numberOfPeople}
              type="number"
              className="w-11/12 bg-light-grayish-cyan2 text-right text-2xl font-bold text-very-dark-cyan focus:outline-none "
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col rounded-2xl bg-very-dark-cyan px-6 pt-10 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="font-semibold text-white">Tip Amount</h2>
              <p className="text-sm text-dark-grayish-cyan-2">/ person</p>
            </div>
            <div className="text-3xl font-bold text-strong-cyan">
              ${calculateTipAmount()}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="font-semibold text-white">Total</h2>
              <p className="text-sm text-dark-grayish-cyan-2">/ person</p>
            </div>
            <div className="text-3xl font-bold text-strong-cyan">
              ${calculateTotalPerPerson()}
            </div>
          </div>

          <div className="mt-8 rounded-md bg-strong-cyan p-2 text-center">
            <button
              className="w-full text-xl font-bold text-very-dark-cyan"
              onClick={() => {
                resetStates()
              }}
            >
              RESET
            </button>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  )
}
