import { useState } from 'react'
import { ControlProps as Form } from '../../componets'
import { Helmet } from 'react-helmet'

function CompoundComponent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async () => {
    console.log('Wait 3 seconds')
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(email, password)
        resolve(email, password)
      }, 3000)
    })
  }

  return (
    <div>
      <Helmet title='Compound Component' />
      <Form
        onSubmit={onSubmit}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      >
        <Form.Title title='CompounedForm' />
        <Form.Description text='Fill the form, click the button, wait 3 seconds for the promise to resolve, and 💥' />
        <Form.Description text='This pattern is almost the same like Compound Component, but here you can set the functionality and states from the outside' />
        <Form.Input type='email' />
        <Form.Input type='password' />
        <Form.Submit text='Fill Form' />
      </Form>
    </div>
  )
}

export default CompoundComponent
