// src/App.tsx
import React from 'react';
import Counter from './features/counter/Counter';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Counter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
