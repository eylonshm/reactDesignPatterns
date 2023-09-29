const Submit = ({ text = 'submit', onSubmit }) => (
  <button type='submit' onClick={onSubmit}>
    {text}
  </button>
)

export default Submit
