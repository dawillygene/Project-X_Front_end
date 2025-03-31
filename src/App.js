import React from 'react';
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
// import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return <div>Home Page</div>;
}

function App() {
  return (
    <>
  
    {/* <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8"> */}
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    {/* </div> */}
    </>
  );
}

export default App;
