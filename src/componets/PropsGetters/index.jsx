import { Input, Title, Submit, Description } from './components'
import './index.scss'

const Form = ({ children }) => {
  return <form className='wrapper'>{children}</form>
}

Form.Input = Input
Form.Title = Title
Form.Submit = Submit
Form.Description = Description

export default Form
export { default as useForm } from './useForm'
