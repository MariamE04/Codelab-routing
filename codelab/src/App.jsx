import './styles/App.css'
import { Outlet } from "react-router-dom";
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <Outlet />  
    </div>
  )
}

export default App


{/*Header vises altid og Outlet viser indhold fra den valgte route */}