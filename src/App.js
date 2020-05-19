import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import { ReactComponent as ReactLogoSvg } from './logo.svg';
import Card from './components/Card';
import Footer from './components/Footer';

import 'normalize.css';
import './App.css';

const wordsList = [
  {
      eng: 'between',
      rus: 'между'
  },
  {
      eng: 'high',
      rus: 'высокий'
  },
  {
      eng: 'really',
      rus: 'действительно'
  },
  {
      eng: 'something',
      rus: 'что-нибудь'
  },
  {
      eng: 'most',
      rus: 'большинство'
  },
  {
      eng: 'another',
      rus: 'другой'
  },
  {
      eng: 'much',
      rus: 'много'
  },
  {
      eng: 'family',
      rus: 'семья'
  },
  {
      eng: 'own',
      rus: 'личный'
  },
  {
      eng: 'out',
      rus: 'из/вне'
  },
  {
      eng: 'leave',
      rus: 'покидать'
  },
  {
    eng: 'marathon',
    rus: 'марафон'
  },
  {
    eng: 'react',
    rus: 'реагировать'
  },
  {
    eng: 'developer',
    rus: 'разработчик'
  },
  {
    eng: 'excellent',
    rus: 'отлично'
  },

];

const App = () => {
  return (
    <>
      <HeaderBlock>
        <Header>Учите слова онлайн</Header>
        <Paragraph>Используйте карточки для запоминания и пополняйте активный словарный запас.</Paragraph>
      </HeaderBlock>
      <div className='cardTable'>
        {
          wordsList.map(({ eng, rus }, index) => (
            <Card key={index} eng={eng} rus={rus}/>
          ))
        }
      </div>
      <HeaderBlock hideBackground>
      <Header>Вы это полюбите</Header>
      <Paragraph>Вам понадобиться всего 5 минут в день</Paragraph>
      <ReactLogoSvg className="App-logo" />
      </HeaderBlock>
      <Footer>
        <div>Developed by <a href="https://twitter.com/gennadiy_tw">ZGennaiy</a> with React App</div>
      </Footer>
    </>
  )
};

export default App;
