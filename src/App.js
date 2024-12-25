import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Services from './components/Services';
import TabSection from './components/TabSection';
import Footer from './components/Footer'; // Исправлен путь
import './reset.css';
import './style.css';

function App() {
  return (
    <div>
      <Header />
      <main id="main" className="main">
        <Welcome />
        <About />
        <Services />
        <TabSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
