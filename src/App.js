import React from 'react';
import Review from './Review';
import { FaGithubSquare } from 'react-icons/fa';

function App() {
  return (
    <main>
      <section className="container">
      <div className="title">
        <h3>Our reviews</h3>
      </div>
      <Review />
      </section>
    </main>
  )
}

export default App;
