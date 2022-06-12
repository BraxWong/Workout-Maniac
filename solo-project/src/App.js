import './App.css';
import Image from './Image';
import Introduction from './Introduction';
import Buttons from './Buttons';
import About from './About';
import Interests from './Interests';
function App() {
  return (
    <div className ="Image">
      <Image/>
      <Introduction/>
      <Buttons/>
      <About/>
      <Interests/>
    </div>
  );
}

export default App;
