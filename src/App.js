import React from 'react';
import './App.css';
import logo from './logo.png'
import hanifah from './hanifah.jpeg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tv from "./container/tv/tv";
import Keranjang from "./container/tv/Keranjang";

function App() {
  return (
    <Router>
      <div>

        <ul className="menu">

          <li>
            <Link to="/"><span>Home</span></Link>
          </li>
          <li>
            <Link to="/list-product"><span>List Produk</span></Link>
          </li>
          <li>
            <Link to="/keranjang"><span>Keranjang</span></Link>
          </li>
          <li>
            <Link to="/about"><span>About</span></Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list-product">
            <Products />
          </Route>
          <Route path="/keranjang">
            <Keranjangs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <center><p id="title-1">Hanifah Elektronik Malang</p></center>
      {/* <img id="img-bg" src={logo} alt="Gambar" />s */}
      <center><p id="t-c-1">Dipercaya Oleh</p></center>
      <div id="company">
        <img src="https://i.pinimg.com/originals/dc/36/c1/dc36c1d02dfe2ec192b7ec6d2289cb2d.png" />
        <img id="lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/1024px-LG_logo_%282015%29.svg.png" />
        <img id="sony" src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/ca/20160422142554%21Sony_logo.svg/1280px-Sony_logo.svg.png" />
        <img src="https://toko361412219.files.wordpress.com/2017/12/logo-polytron.jpg" />
      </div>
    </div>
  );
}

const About = () => { //setless componen
  return (
    <div>
      <div className="About">
        {/* <center><h2>Biodata Diri</h2></center> */}
        <div id="bio">
          <p id="p1">Nur Hanifah</p>
          <p id="p2">Halo Nama Saya Nur Hanifah. Saya adalah Mahasiswa Politeknik Negeri Malang</p>
          <p id="p3">Jl. Raya Bamban Rt 05 Rw 05 Kec.Pakis Kab.Malang 6254</p>
          <p id="p4">083890769199</p>
          <p id="p5">hanifah110498@gmail.com</p>
        </div>
        <img src={hanifah} />
        <div id="bulat" />
      </div>
    </div>
  );
}

function Products() {
  return (
    <div>
      <Tv />
    </div>
  )
}

function Keranjangs() {
  return (
    <div>
      <Keranjang />
    </div>
  )
}

export default App;
