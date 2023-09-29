import { useState } from 'react'
import { Input, Title, Submit, Description } from './components'
import './index.scss'

const Form = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    console.log('Wait 3 seconds')
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(email, password)
        resolve(email, password)
        setEmail('')
        setPassword('')
      }, 3000)
    })
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <form className='wrapper'>
      {props.render({
        password,
        email,
        onEmailChange,
        onPasswordChange,
        onSubmit,
      })}
    </form>
  )
}

Form.Input = Input
Form.Title = Title
Form.Submit = Submit
Form.Description = Description

export default Form
