import { useState } from 'react'
import { Input, Title, Submit, Description } from './components'
import { ContextProvider } from './useContext'
import './index.scss'

const onSubmitDefaultFunction = async (email, password) => {
  console.log(email, password)
}

const Form = ({
  children,
  onSubmit: onSubmitProp = onSubmitDefaultFunction,
  password: propsPassword,
  email: propsEmail,
  setEmail: propsSetEmail,
  setPassword: propsSetPassword,
}) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState('')

  const isControlled =
    propsPassword !== undefined &&
    propsEmail !== undefined &&
    typeof propsSetPassword === 'function' &&
    typeof propsSetEmail === 'function'

  const getPassword = () => (isControlled ? propsPassword : password)
  const getEmail = () => (isControlled ? propsEmail : email)

  const onSubmit = async (event) => {
    event?.preventDefault()
    await onSubmitProp(email, password)
    if (isControlled) {
      propsSetEmail('')
      propsSetPassword('')
    } else {
      setEmail('')
      setPassword('')
    }
  }

  const onEmailChange = (e) => {
    const newInput = e.target.value
    isControlled ? propsSetEmail(newInput) : setEmail(newInput)
  }

  const onPasswordChange = (e) => {
    const newInput = e.target.value
    isControlled ? propsSetPassword(newInput) : setPassword(newInput)
  }

  return (
    <ContextProvider
      value={{
        onSubmit,
        onEmailChange,
        onPasswordChange,
        getEmail,
        getPassword,
      }}
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
