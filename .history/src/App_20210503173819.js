import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import "bulma/css/bulma.css";

const App = () => {
  return (
    <div>
      <Navbar />
      
      <FormField labelTag="Direction:" type="text" placeholder=" e.g. Castle of Thunder and Lightning nº666" />
    </div>
    
  )
};

export default App;