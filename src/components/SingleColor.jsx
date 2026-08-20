import { toast } from "react-toastify";

const SingleColor = ({ hex,index,rgb,weight }) => {
  // console.log('hex', hex);
  // const str = rgb.join(',')
  const backgroundColor = `rgb(${rgb.join(',')})`;
  async function copyToClipBoard() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard')
      } catch (error) {
        toast.error('Failed to copy color:', error)
      }
    } else {
      toast.error('Clipboard access not available')
    }
  }
  return (
    <div className={index>10?"color color-light":"color"} style={{backgroundColor:backgroundColor}} onClick={copyToClipBoard}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </div>
  )
}

export default SingleColor