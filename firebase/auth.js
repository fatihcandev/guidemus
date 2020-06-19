import { auth, db } from './config'

export const signUp = async (name, email, pass, setEmailVerificationSent) => {
  try {
    const response = await auth.createUserWithEmailAndPassword(email, pass)
    const user = response.user
    const uid = user.uid
    if (user) {
      await verifyEmail(user)
      setEmailVerificationSent(true)
      await addToFirestore(uid, name, email, pass)
    }
  } catch (error) {
    return error.message
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
  } catch (error) {
    return error.message
  }
}

const verifyEmail = async (user) => {
  try {
    await user.sendEmailVerification()
  } catch (error) {
    return error.message
  }
}
