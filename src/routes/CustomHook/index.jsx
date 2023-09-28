import { CustomHook as Form, useForm } from '../../componets'
import { Helmet } from 'react-helmet'

function CompoundComponent() {
  const { password, email, setPassword, setEmail } = useForm()

  const setEmailAndDoSomethingElseMeanwhile = (value) => {
    console.log(value)
    setEmail(value)
  }

  const onSubmit = async (email, password) => {
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
      <Helmet title='Custom Hook' />
      <Form
        onSubmit={onSubmit}
        password={password}
        email={email}
        setPassword={setPassword}
        setEmail={setEmailAndDoSomethingElseMeanwhile}
      >
        <Form.Title title='Custom Hook' />
        <Form.Description text='Fill the form, click the button, wait 3 seconds for the promise to resolve, and 💥' />
        <Form.Input type='email' />
        <Form.Input type='password' />
        <Form.Submit text='Fill Form' />
      </Form>
    </div>
  )
}

export default CompoundComponent
