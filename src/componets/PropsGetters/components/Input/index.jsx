import './index.scss'

const Input = ({ value, onChange: onChangeProp }) => {
  const onChange = (e) => {
    onChangeProp(e.target.value)
  }
  return (
    <input className='inputWrapper' value={value} onChange={onChange}></input>
  )
}
export default Input
