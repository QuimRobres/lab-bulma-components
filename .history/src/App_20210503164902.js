import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField'

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField labelTag="Name:" type="text" placeholder="e.g. Count Khimo" />
      <FormField labelTag="Direction:"
    </div>
    
  )
};

export default App;