import { changePass } from '../actions'
import { connect } from 'react-redux'
import Input from '../../components/input'
import SignUpForm from '../../components/sign-up-form'

const mapStateToProps = (state) => ({
  pass: state.signUp.pass
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (pass) => dispatch(changePass(pass))
})

export const PasswordInput = connect(mapStateToProps, mapDispatchToProps)(Input)
