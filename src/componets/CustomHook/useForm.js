import { useState } from 'react'

const useForm = (initialPassword = '', initialEmail = '') => {
  const [password, setPassword] = useState(initialPassword)
  const [email, setEmail] = useState(initialEmail)

  return { password, email, setPassword, setEmail }
}

export default useForm
