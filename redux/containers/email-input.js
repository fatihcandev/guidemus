import { changeEmail } from '../actions'
import { connect } from 'react-redux'
import Input from '../../components/input'
import Form from '../../components/form'

const mapStateToProps = (state) => ({
  email: state.signUpReducer.email
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (email) => dispatch(changeEmail(email))
})

export const EmailInput = connect(mapStateToProps, mapDispatchToProps)(Input)
export const FormContainer = connect(mapStateToProps, null)(Form)
