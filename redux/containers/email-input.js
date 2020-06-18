import { changeEmail } from '../actions'
import { connect } from 'react-redux'
import Input from '../../components/input'
import SignUpForm from '../../components/sign-up-form'

const mapStateToProps = (state) => ({
  email: state.signUp.email
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (email) => dispatch(changeEmail(email))
})

export const EmailInput = connect(mapStateToProps, mapDispatchToProps)(Input)
