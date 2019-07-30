import React from 'react'
import Button_header from '../button/Button_header'
import Explore from './Explore'
import '../../assets/sass/Home.scss'

export default props => {
    return (
      <div class="home">
          <div class="illustration"></div>
          <div class="window"></div>
          <div class="circle"></div>
          <div class="btn">
            <div class="btn-work"><Button_header label="Trabalhos" /></div>
            <div class="btn-about-me"><Button_header label="Sobre mim" /></div>
            <div class="btn-my-blog"><Button_header label="Artigos" /></div>
            <div class="btn-contact"><Button_header label="Contato" /></div>
          </div>
          <div class="header-h3"><h3>Olá, meu nome é...</h3></div>
          <div class="header-h1"><h1>Sérgio Novais!</h1></div>
          <div class="header-h4"><h4>Seja bem-vindo ao meu Portifólio.</h4></div>
          <div class="btn-explore"><Explore label="Explore"/></div>
      </div>
    );
}