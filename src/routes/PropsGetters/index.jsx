import { PropsGetters as Form, usePropGettersForm } from '../../componets'
import { Helmet } from 'react-helmet'

function PropsGetters() {
  const { getFormProps, getInputProps, getSubmitProps } = usePropGettersForm()
  const onSubmit = async () => {
    console.log('Wait 3 seconds')
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('solved')
        resolve()
      }, 3000)
    })
  }
  return (
    <div>
      <Helmet title='Props Getters' />
      <Form {...getFormProps}>
        <Form.Title title='Props Getters' />
        <Form.Description text='Fill the form, click the button, wait 3 seconds for the promise to resolve, and 💥' />
        <Form.Input {...getInputProps({ email: 'email' })} />
        <Form.Input {...getInputProps({ type: 'password' })} />
        <Form.Submit text='Fill Form' {...getSubmitProps({ onSubmit })} />
      </Form>
    </div>
  )
}

export default PropsGetters
