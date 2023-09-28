import { useContext } from '../../useContext'

const Submit = ({ text = 'submit' }) => {
  const { onSubmit } = useContext()

  return (
    <button type='submit' onClick={onSubmit}>
      {text}
    </button>
  )
}

export default Submit
