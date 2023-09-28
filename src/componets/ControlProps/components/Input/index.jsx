import { useContext } from '../../useContext'
import './index.scss'

const Input = ({ type }) => {
  const { onEmailChange, onPasswordChange, getEmail, getPassword } =
    useContext()

  return (
    <input
      className='inputWrapper'
      value={type === 'email' ? getEmail() : getPassword()}
      onChange={type === 'email' ? onEmailChange : onPasswordChange}
    ></input>
  )
}
export default Input
