import logo from './logo.svg';

import Navbar from './Navbar/Navbar';
import styles from './App.module.scss';

import MainLayout from './MainLayout/MainLayout';
import BackgroundDesign from './BackgroundDesign/BackgroundDesign';

function App() {
  return (
    <div className={styles.App}>
      <BackgroundDesign/>
    <Navbar />
  
    <MainLayout/>
  
    
    </div>
  );
}

export default App;
