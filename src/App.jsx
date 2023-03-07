import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello REACT!</h1>

      <Button className="btn" text={'Click'} number={'1'} />
      <Button className="btn" text={'Hello'} number={'2'} />
      <Button className="btn" text={'REACT'} number={'3'} />
    </div>
  );
}

export default App;
