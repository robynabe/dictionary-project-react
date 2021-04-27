import Search from './components/Search';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <h1>Dictionary</h1>
      </header>
      <main>
        <Search />
      </main>
      <footer>Designed and coded by <a href="https://github.com/robynabe">Robyn Abe</a></footer>
    </div>
  );
}

export default App;
