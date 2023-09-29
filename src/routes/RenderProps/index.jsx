import { RenderProps as Form } from '../../componets'
import { Helmet } from 'react-helmet'

function CompoundComponent() {
  return (
    <div>
      <Helmet title='Render Props' />
      <Form
        render={({
          password,
          email,
          onEmailChange,
          onPasswordChange,
          onSubmit,
        }) => (
          <>
            <Form.Title title='Render Props' />
            <Form.Description text='Fill the form, click the button, wait 3 seconds for the promise to resolve, and 💥' />
            <Form.Input
              type='email'
              email={email}
              onEmailChange={onEmailChange}
            />
            <Form.Input
              type='password'
              password={password}
              onPasswordChange={onPasswordChange}
            />
            <Form.Submit text='Fill Form' onSubmit={onSubmit} />
          </>
        )}
      ></Form>
    </div>
  )
}

export default CompoundComponent
