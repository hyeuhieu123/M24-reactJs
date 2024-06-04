import Exercises012 from './components/Exercises01'
import Exercises03 from './components/Exercises03'
import ProductContainer from './components/ProductContainer'
import ParentComp from './components/ParentComp'
import UserContainer from './components/UserContainer'
import ListPost from './components/ListPost'
import ListProduct from './components/ListProduct'
import { useState } from 'react'
import './App.css'
export default function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('english');
  const toggleTheme = () =>{
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  const toggleLanguage = () =>{
    setLanguage(prevLanguage => prevLanguage === 'english' ? 'vietnamese' : 'english');
  }
  return (
    <>
      <div className={theme}>
        <h1>Bài 1-2</h1>
        <Exercises012></Exercises012>
        <h1>Bài 3</h1>
        <Exercises03></Exercises03>
        <h1>Bài 4</h1>
        <ParentComp></ParentComp>
        <h1>Bài 5-6</h1>
        <ProductContainer></ProductContainer>
        <UserContainer></UserContainer>
        <h1>Bài 7</h1>
        <ListPost></ListPost>
        <h1>Bài 8</h1>
        <ListProduct></ListProduct>
        <h1>Bài 9</h1>
        <p>{language === 'english' ? 'Current Theme:' : 'Chủ Đề Hiện Tại:'} {theme}</p>
        <button onClick={toggleTheme}>
        {theme === 'light' ? (language === 'english' ? 'Switch to Dark Theme' : 'Chuyển Sang Chủ Đề Tối') : (language === 'english' ? 'Switch to Light Theme' : 'Chuyển Sang Chủ Đề Sáng')}
        </button>
        <p>{language === 'english' ? 'Current Language:' : 'Ngôn Ngữ Hiện Tại:'} {language}</p>
        <button onClick={toggleLanguage}>
        {language === 'english' ? 'Switch to Vietnamese' : 'Chuyển Sang Tiếng Anh'}
        </button>
      </div>
    </>
  )
}
