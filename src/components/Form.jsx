import { useState } from "react"

const Form = ({changeColor}) => {
  const [tempColor, setTempColor] = useState('#e66465');
  function handleSubmit(e) {
    e.preventDefault();
    changeColor(tempColor);
  }
  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <input type="color" value={tempColor} onChange={(e)=>setTempColor(e.target.value)} />
      <input type="text" placeholder={tempColor} value={tempColor} onChange={(e)=>setTempColor(e.target.value)} />
      <button type="submit" className="btn" style={{backgroundColor: tempColor}}>Submit</button>
    </form>
  )
}

export default Form