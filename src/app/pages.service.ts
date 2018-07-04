import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private slides: Array<Object> = [{
    id: 0,
    name: 'Photo & Video',
    url: '/photo-video',
    caption: 'Produzimos e editamos vídeos institucionais e fotos editoriais para órgãos públicos e privados, vídeos para promoção de eventos, documentários, videoclipes musicais, campanhas políticas, comerciais e educativas. Também dispomos de Set de Filmagem (estúdio chroma) próprio para gravações.',
    photo: '../assets/images/02.jpg'
  }, {
    id: 1,
    name: 'Web-Design',
    url: '/web-design',
    caption: 'Contamos com serviço de criação, Email-Marketing, Cards, Social Posts, desenvolvimento e hospedagem de websites, blogs pessoais e corporativos e sistemas de E-commerce (Lojas Virtuais), seguindo as melhores interfaces da atualidade para criação de sites. Além do uso estratégico de ferramentas para gerenciamento de conteúdo, analisando e gerenciando acessos, com relatórios estatísticos.',
    photo: '../assets/images/01.jpg'
  }, {
    id: 2,
    name: 'Audio',
    url: '/audio',
    caption: 'Fazemos gravações para chamadas comerciais e informativas, divulgação de festas e eventos, spots e vinhetas, jingles comerciais e políticos, horários eleitorais radiofônicos, e gravações diversas para rádio e teatro, carro de som, internet e outras mídias sociais, além de produção musical em Estúdio profissional.',
    photo: '../assets/images/03.jpg'
  }, {
    id: 3,
    name: 'Design',
    url: '/design',
    caption: 'texto',
    photo: '../assets/images/04.jpg'
  }, {
    id: 4,
    name: 'Comunicação Visual',
    url: '/com-visual',
    caption: 'texto',
    photo: '../assets/images/05.jpg'
  },
   {
    id: 5,
    name: '3d',
    url: '/3d',
    caption: 'texto',
    photo: '../assets/images/05.jpg'
  }]
  constructor() {

  }
  public getSlides(): Array<Object> {
    return this.slides;
  }
  public getSlideItem(i){
    return this.slides[i];
  }
}
