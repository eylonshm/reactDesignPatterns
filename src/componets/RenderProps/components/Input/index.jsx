import './index.scss'

const Input = ({ type, onEmailChange, onPasswordChange, email, password }) => (
  <input
    className='inputWrapper'
    value={type === 'email' ? email : password}
    onChange={type === 'email' ? onEmailChange : onPasswordChange}
  ></input>
)
export default Input
