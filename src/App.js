import React, {useState, useEffect} from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header';
import Man from './components/man';
import Woman from './components/woman';
import Unisex from './components/unisex';
import Main from './components/main';
import { Footer } from './components/footer';
import Modal from './components/modal'
import Customize from './components/customize';

const Category = ({no, setNo}) => {
  const [zIndex, setzIndex] = useState(no);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const changer = () => {
      setTimeout(() => {
        return setzIndex(no);
      }, 300);
    };
    changer();
  }, [no])
  return (
    <div>
      <div style={{position: 'absolute', width: '100%', height: '100%', opacity: no === 0 ? 1: 0, zIndex: zIndex === 0 ? 3 : 0, transition: 'all 300ms'}}>
        <Main no={no} setNo={setNo}/>
        <Footer />
      </div>
      <div style={{position: 'absolute', width: '100%', height: '100%', opacity: no === 1 ? 1: 0, zIndex: zIndex === 1 ? 3 : 0, transition: 'all 300ms'}}>
        <Man modal={modal} setModal={setModal} setOn={setNo} />
      </div>
      <div style={{position: 'absolute', width: '100%', height: '100%', opacity: no === 2 ? 1: 0, zIndex: zIndex === 2 ? 3 : 0, transition: 'all 300ms'}}>
        <Woman modal={modal} setModal={setModal} setOn={setNo} />
      </div>
      <div style={{position: 'absolute', width: '100%', height: '100%', opacity: no === 3 ? 1: 0, zIndex: zIndex === 3 ? 3 : 0, transition: 'all 300ms'}}>
        <Unisex modal={modal} setModal={setModal} setOn={setNo} />
      </div>
      <Modal modal={modal} setModal={setModal} />
    </div>
  )
}

const App = ({}) => {
  const [no, setNo] = useState(0);
  return (
    <>
      <GlobalStyles />
      <div style={{width: '100vw', height: '100vh', overflow: 'hidden', overflowY: 'scroll'}}>
        <Header />
        <div style={{paddingTop: 120}}>
          <Customize />
          <Category no={no} setNo={setNo} />
        </div>
      </div>
    </>
  );
}

export default App;
