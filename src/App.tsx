// import logo from "./logo.svg"
// import { Counter } from "./features/counter/Counter"
import "./App.css"
import Input from "./components/Input"
import IpInfo from "./components/IpInfo"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer
          >
            React Redux
          </a>
        </span>
      </header> */}

      <section
        className="w-full h-[50vh] md:h-[300px] relative bg-[url('./assets/images/pattern-bg-desktop.png')] 
      bg-no-repeat bg-cover flex items-center flex-col pt-10"
      >
        <div className="flex justify-center items-center w-full px-2 flex-col space-y-9">
          <h1 className="text-white text-3xl font-medium">
            IP Address Tracker
          </h1>
          <Input />
        </div>
        <div
          className="absolute -bottom-0 translate-y-2/4 bg-white p-8 grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 rounded-3xl
         w-11/12 max-w-7xl shadow-lg text-center md:text-left break-words"
        >
          <div className="md:border-r border-gray-500">
            <IpInfo />
          </div>
          <div className="md:border-r border-gray-500">
            <IpInfo />
          </div>
          <div className="md:border-r border-gray-500">
            <IpInfo />
          </div>
          <IpInfo />
        </div>
      </section>
      <section></section>
    </div>
  )
}

export default App
