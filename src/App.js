import logo from './logo.svg';
import Background from './BackgroundDesign/BackgroundDesign';
import Navbar from './Navbar/Navbar';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
     <Navbar />
    <Background>
     
     </Background>
    </div>
  );
}

export default App;
