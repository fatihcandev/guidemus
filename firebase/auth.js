import { auth, db } from './config'

export const signUp = async (name, email, pass, setEmailVerificationSent) => {
  try {
    if (email === '' || pass === '') {
      return 'Email and password is required'
    } else {
      const response = await auth.createUserWithEmailAndPassword(email, pass)
      const user = response.user
      const uid = user.uid
      if (user) {
        setEmailVerificationSent(true)
        await verifyEmail(user)
        await addToFirestore(uid, name, email, pass)
      }
    }
  } catch (e) {
    return e.message
  }
}

const addToFirestore = async (uid, name, email, pass) => {
  try {
    await db.collection('users').doc(uid).set({
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
