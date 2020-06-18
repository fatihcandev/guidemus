import { auth, db } from './config'

export const signUp = async (name, email, pass) => {
  try {
    if (email === '' || pass === '') {
      return 'Email and password is required'
    } else {
      const response = await auth.createUserWithEmailAndPassword(email, pass)
      const user = response.user
      if (user) {
        await verifyEmail(user)
      }
    }
  } catch (e) {
    return e.message
  }
}

const addToFirestore = async (uid, name, email, pass) => {
  try {
    return await db.collection('users').doc(uid).set({
      uid: uid,
      name: name,
      email: email,
      password: pass
    })
  } catch (e) {
    return e.message
  }
}

const verifyEmail = async (user) => {
  try {
    await user.sendEmailVerification()
  } catch (e) {
    return e.message
  }
}
