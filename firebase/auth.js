import { auth } from './config'

export const signUp = async (email, pass) => {
  try {
    if (email === '' || pass === '') {
      return 'Email and password is required'
    } else {
      const response = await auth.signInWithEmailAndPassword(email, pass)
      return response.user
    }
  } catch (e) {
    return e.message
  }
}
