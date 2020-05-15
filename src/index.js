import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import HeaderBlock from './components/HeaderBlock/indexA.js';

// const AppList = () => {
//   const items = ['item1', 'item2', 'another item', 'and another one'];
//   const firstItem = <li>first item</li>;

//   const isAuth = false;

//   return (
//     <ul>
//       { isAuth ? firstItem : null }
//       { items.map(item => <li>{item}</li>) }
//       <li>{ items[0] }</li>
//       <li>{ items[1] }</li>
//     </ul>
//   )
// };

// const AppHeader = () => {
//   return (
//     <h1 className='header'>Header</h1>
//   )
// };

// const AppInput = () => {
//   const placeHolder = 'Type: text';
//   return (
//     <label htmlFor='search'>
//       <input id='search' placeholder={ placeHolder }/>
//     </label>
//   )
// };

const App = () => {
  return (
    <>
      <HeaderBlock />
      {/* <AppHeader />
      <AppInput />
      <AppList />
      <AppHeader />
      <AppList /> */}
    </>
  )
};


ReactDom.render(<App />, document.getElementById('root'));