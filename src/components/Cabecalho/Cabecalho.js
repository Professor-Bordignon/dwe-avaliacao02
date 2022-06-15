import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cabecalho.css';

const Cabecalho = () => {
  return (
    <header className="Cabecalho">
      <nav>
        <ul>
          { /* complete o componente NavLink com a rota correta para cada opção */}
          <li><NavLink >Home</NavLink></li>
          <li><NavLink >Novo Livro</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Cabecalho;