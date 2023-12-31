import { CompoundComponent as Form } from '../../componets'
import { Helmet } from 'react-helmet'

function CompoundComponent() {
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
      <Helmet title='Compound Component' />
      <Form onSubmit={onSubmit}>
        <Form.Title title='Compound Component' />
        <Form.Description text='Fill the form, click the button, wait 3 seconds for the promise to resolve, and 💥' />
        <Form.Input type='email' />
        <Form.Input type='password' />
        <Form.Submit text='Fill Form' />
      </Form>
    </div>
  )
}

export default CompoundComponent
