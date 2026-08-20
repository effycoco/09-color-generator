import { useEffect, useState } from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const [colors, setColors] = useState(new Values('#e66465').all(10));

  function changeColor(str) {
    try {
     const list = new Values(str).all(10)
     setColors(list);
    } catch (error) {
      toast.error(error.message);
    }    
  }
  return (
    <main>
      <section className="container">
        <h1>Color Generator</h1>
        <Form changeColor={changeColor} />
      </section>
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  )
};
export default App;
