import { connect } from 'react-redux'
import SignUpForm from '../../components/sign-up-form'

const mapStateToProps = (state) => ({
  name: state.signUp.name,
  email: state.signUp.email,
  pass: state.signUp.pass
})

export const SignUpFormContainer = connect(mapStateToProps, null)(SignUpForm)
