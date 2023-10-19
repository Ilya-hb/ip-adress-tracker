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

      <section className="w-full h-[300px] bg-[url('./assets/images/pattern-bg-desktop.png')] bg-no-repeat bg-cover flex justify-center items-center">
        <div className="flex justify-center items-center w-full px-2 flex-col space-y-9">
          <h1 className="text-white text-3xl font-semibold">
            IP Address Tracker
          </h1>
          <Input />
          <IpInfo />
        </div>
      </section>
    </div>
  )
}

export default App
