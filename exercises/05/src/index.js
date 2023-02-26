import div from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Bt from './components/ClickBt';
import MenuBox from './components/Box';

const menus = {
  menu1: {
    type: "อาหารคาว",
    name: "กะเพราเนื้อ",
    described: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at feugiat lectus, non aliquam purus. Nunc sagittis erat ut lacus mollis, a fermentum neque tincidunt. Mauris aliquet erat eget malesuada rutrum. Etiam non massa purus. Nunc lacinia iaculis mi nec malesuada. Etiam dignissim malesuada efficitur.",
    imgsrc: "https://s359.kapook.com/pagebuilder/57f5b7bb-59b1-40be-b644-5037a9d47f7b.jpg",
  },
  menu2: {
    type: "อาหารหวาน",
    name: "บัวลอย",
    described: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at feugiat lectus, non aliquam purus. Nunc sagittis erat ut lacus mollis, a fermentum neque tincidunt. Mauris aliquet erat eget malesuada rutrum. Etiam non massa purus. Nunc lacinia iaculis mi nec malesuada. Etiam dignissim malesuada efficitur.",
    imgsrc: "https://img.kapook.com/u/2017/wanwanat/93_bualoy/loy4_1.jpg"
  },
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class="main-container">
    <h1>โหวตอาหาร</h1>
    <MenuBox
      foodType={menus.menu1.type}
      menuName={menus.menu1.name}
      describtion={menus.menu1.described}
      src={menus.menu1.imgsrc} />
      
    <MenuBox
      foodType={menus.menu2.type}
      menuName={menus.menu2.name}
      describtion={menus.menu2.described}
      src={menus.menu2.imgsrc} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
