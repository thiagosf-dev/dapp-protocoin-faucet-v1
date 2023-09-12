import { useState } from 'react';
import { mint } from './Web3Service';

function App() {

  const [message, setMessage] = useState("");

  function onBtnClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setMessage("Requesting your tokens...wait...");
    mint()
      .then((tx) => setMessage("Your tokens were sent. Tx: " + tx))
      .catch(err => setMessage(err.message));
  }

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">ProtoCoin Faucet</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="/">Home</a>
            <a className="nav-link fw-bold py-1 px-0" href="/">About</a>
          </nav>
        </div>
      </header>

      <main className="px-3">
        <h1>Get your ProtoCoins</h1>
        <p className="lead">Once a day, earn 1.000 coins for free just connecting your MetaMask below.</p>
        <p className="lead">
          <a href="/" onClick={e => onBtnClick(e)} className="btn btn-lg btn-secondary fw-bold border-white bg-white">
            <img src="/assets/metamask.svg" alt="MetaMask logo" width="48" />
            Connect MetaMask
          </a>
        </p>
        <p className="lead">
          {message}
        </p>
      </main>

      <footer className="mt-auto text-white-50">
        <p>Built by <a href="https://www.luiztools.com.br" className="text-white">LuizTools</a>.</p>
      </footer>
    </div>
  );
}

export default App;
