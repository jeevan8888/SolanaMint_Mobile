import React from "react";

function App() {
  return (
    <>
      <div className="text-end p-10">
        <button className="bg-blue-500 text-white p-2 rounded">
          connect wallet
        </button>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold">[go back]</h1>
        <div className="max-w-lg">
          <form action="#" className="grid grid-cols-1">
            <div className="mb-5">
              <label htmlFor="name" className="text-blue-400">
                Name
              </label>
              <br />
              <input
                type="text"
                id="name"
                className="w-full border rounded-md h-10 text-white bg-white/5 px-2"
              />
            </div>

            <div className="mb-5">
              <label className="text-blue-400" htmlFor="ticker">
                ticker
              </label>
              <br />
              <input
                type="text"
                id="ticker"
                className="w-full border rounded-md h-10 text-white bg-white/5 px-2"
              />
            </div>

            <div className="mb-5">
              <label className="text-blue-400" htmlFor="description">
                description
              </label>
              <br />
              <textarea
                id="description"
                className="w-full border rounded-md h-10 text-white bg-white/5 px-2"
              ></textarea>
            </div>

            <div className="mb-5">
              <label className="text-blue-400" htmlFor="ImageOrVideo">
                Image or video
              </label>
              <br />
              <input
                type="file"
                id="ImageOrVideo"
                className="w-full border rounded-md h-32 placeholder:flex placeholder:flex-col placeholder:justify-center placeholder:items-center text-white bg-white/5 px-2"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded mb-"
            >
              Create coin
            </button>
            <p>
              When your coin completes its bonding curve you receive 0.5 SOL
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
