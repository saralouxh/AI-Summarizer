import React from 'react'

import Hero from './components/Hero';
import Demo from './components/Demo';

import './App.css';

const App = () => {
  return (
    <main className='bg-gradient-to-t from-slate-300 to-slate-50 bg-opacity-10 min-h-screen'>
        <div className='app'>
            <Hero />
            <Demo />
        </div>
    </main>
  )
}

export default App