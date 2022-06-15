// Existem problemas na importação das bibliotecas. 
import {
  BrowserRouter, Routes
} from 'react-router-dom';
import Livros from './components/Livros/Livros';
import Cabecalho from './components/Cabecalho/Cabecalho';
import BooksProvider from './context/BooksProvider';
import './App.css';
import AlterarLivro from './components/AlterarLivro/FormAlterarLivro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cabecalho />
        <BooksProvider>
          <Routes>
            <Route path="/" element={<Livros />} />
            { /* Crie aqui a rota para o componente novo livro */}
            <Route path="/alterarlivro/:id" element={<AlterarLivro />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Não há nada aqui.</p>
                </main>
              }
            />
          </Routes>
        </BooksProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
