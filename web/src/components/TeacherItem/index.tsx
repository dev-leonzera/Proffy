import React from 'react';

import whatsappIcon from '../../assets/img/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/25047795?s=460&u=76a5f6ac344e485848c1f89cba2ccfc2887e6ed5&v=4" alt="Projeto React" />
        <div>
          <strong>Leonardo Andrade</strong>
          <span>Programação Web</span>
        </div>
      </header>

      <p>
        O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
            <br /><br />
            É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 95,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;