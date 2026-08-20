import SingleColor from "./SingleColor";

const ColorList = ({ colors }) => {  
  return (
    <section className="colors">
      {colors.map((color, index)=><SingleColor key={index} index={index} hex={color.hex} {...color} />)}
    </section>
  )
}

export default ColorList