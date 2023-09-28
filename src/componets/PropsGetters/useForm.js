import { useState } from 'react'
import { callFnsInSequence } from '../../utils'

const useForm = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    setEmail('')
    setPassword('')
  }

  const getFormProps = ({ ...otherProps } = {}) => ({ ...otherProps })

  const getInputProps = ({ onChange, type = 'email', ...otherProps } = {}) => {
    const functionToTrigger = type === 'email' ? setEmail : setPassword
    const varToPass = type === 'email' ? email : password
    return {
      onChange: callFnsInSequence(functionToTrigger, onChange),
      value: varToPass,
      ...otherProps,
    }
  }

  const getSubmitProps = ({ onSubmit: onSubmitProp, ...otherProps } = {}) => ({
    onSubmit: callFnsInSequence(onSubmit, onSubmitProp),
    ...otherProps,
  })

  return {
    getFormProps,
    getInputProps,
    getSubmitProps,
  }
}

export default useForm
