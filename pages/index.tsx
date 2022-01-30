import Head from 'next/head'

export default function Home() {
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
              type="number"
              className="w-11/12 bg-light-grayish-cyan2 text-right text-2xl font-bold text-very-dark-cyan focus:outline-none "
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-md font-semibold text-dark-grayish-cyan">
            Select Tip %
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <button className="rounded-md bg-very-dark-cyan p-2 text-2xl font-semibold text-white">
              5%
            </button>
            <button className="rounded-md bg-very-dark-cyan p-2 text-2xl font-semibold text-white">
              10%
            </button>
            <button className="rounded-md bg-very-dark-cyan p-2 text-2xl font-semibold text-white">
              15%
            </button>
            <button className="rounded-md bg-very-dark-cyan p-2 text-2xl font-semibold text-white">
              25%
            </button>
            <button className="rounded-md bg-very-dark-cyan p-2 text-2xl font-semibold text-white">
              50%
            </button>
            <button className="rounded-md bg-light-grayish-cyan2 p-2 text-2xl font-semibold text-dark-grayish-cyan">
              Custom
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-md font-semibold text-dark-grayish-cyan">
            Number of People
          </h2>
          <div className="mt-2 flex items-center justify-center rounded-lg bg-light-grayish-cyan2 p-2 focus-within:ring-2 focus-within:ring-strong-cyan">
            <img src="/icon-person.svg" />
            <input
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
            <div className="text-3xl font-bold text-strong-cyan">$4.27</div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="font-semibold text-white">Total</h2>
              <p className="text-sm text-dark-grayish-cyan-2">/ person</p>
            </div>
            <div className="text-3xl font-bold text-strong-cyan">$4.27</div>
          </div>

          <div className="mt-8 rounded-md bg-strong-cyan p-2 text-center">
            <button className="text-xl font-bold text-very-dark-cyan">
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
