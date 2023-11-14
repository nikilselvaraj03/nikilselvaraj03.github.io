import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/navbar/navBar';
import Home from './components/home/home';
import FooterComp from './components/footer/footer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  useEffect(()=>{
    document.title = 'NIKIL SELVARAJ'
  },[])
  const theme = useSelector(state => state.theme.currentTheme)
  return (
    <div className={theme +` app`}>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <FooterComp></FooterComp>
    </div>
  );
}

export default App;
