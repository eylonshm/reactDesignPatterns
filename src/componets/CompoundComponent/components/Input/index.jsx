import { useContext } from '../../useContext'
import './index.scss'

const Input = ({ type }) => {
  const { onEmailChange, onPasswordChange, email, password } = useContext()

  return (
    <input
      className='inputWrapper'
      value={type === 'email' ? email : password}
      onChange={type === 'email' ? onEmailChange : onPasswordChange}
    ></input>
  )
}
export default Input
