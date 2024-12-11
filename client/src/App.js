import './App.css';
import Header from './components/header';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import AddBlog from "./pages/add-blog";

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/add-blog' element={<AddBlog />} />
      </Routes>
    </div>
  );
}

export default App;
