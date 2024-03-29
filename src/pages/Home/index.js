import React from 'react';

import dadosIniciais from '../../data/dados_iniciais.json';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[3].videos[2].titulo}
        videoDescription='Tá ai uma boa descição'
        url={dadosIniciais.categorias[3].videos[2].url} 
      />

      <Carousel 
        category={dadosIniciais.categorias[3]}
      />

      <Carousel 
        category={dadosIniciais.categorias[2]}
      />

      <Carousel 
        category={dadosIniciais.categorias[1]}
      />

      <Footer />
    </div>
  );
}

export default Home;