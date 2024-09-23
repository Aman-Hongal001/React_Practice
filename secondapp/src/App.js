// import logo from './logo.svg';
import logo from './images/img.png'
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      {/* images from direct web */}
      <p className='text-left'>Images used from local storage</p>
      <img width={100} src={logo} alt="Img from local storage" />
      <p className='text-left'>Images used from direct url from web</p>
      <img width={100} src='https://i.pinimg.com/736x/da/c7/58/dac758d7606690d057a9cbba5f259154.jpg' alt="Img from web" />
      <Header/>
      <h1 className='text-[40px] text-red-700 font-bold'>Welcome to the Second app</h1>
    </div>
  );
}

export default App;
