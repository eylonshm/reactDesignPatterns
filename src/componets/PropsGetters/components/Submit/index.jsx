const Submit = ({ text = 'submit', onSubmit }) => {
  return (
    <button type='submit' onClick={onSubmit}>
      {text}
    </button>
  )
}

export default Submit
