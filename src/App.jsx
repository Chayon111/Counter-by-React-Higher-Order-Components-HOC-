import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
import InputKeyCounter from './HOC/InputKeyCounter';
import './App.css'

function App() {

  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
      <InputKeyCounter />
    </div>
  )
}

export default App
