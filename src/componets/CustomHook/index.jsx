import { Input, Title, Submit, Description } from './components'
import { ContextProvider } from './useContext'
import './index.scss'

const onSubmitDefaultFunction = async (email, password) => {
  console.log(email, password)
}

const Form = ({
  children,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit: onSubmitProp = onSubmitDefaultFunction,
}) => {
  const onSubmit = async (event) => {
    event?.preventDefault()
    await onSubmitProp(email, password)
    setEmail('')
    setPassword('')
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <ContextProvider
      value={{ onSubmit, onEmailChange, onPasswordChange, email, password }}
    >
      <form className='wrapper'>{children}</form>
    </ContextProvider>
  )
}

Form.Input = Input
Form.Title = Title
Form.Submit = Submit
Form.Description = Description

export default Form
export { default as useForm } from './useForm'
