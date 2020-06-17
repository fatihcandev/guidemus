import { changePass } from '../actions'
import { connect } from 'react-redux'
import Input from '../../components/input'
import Form from '../../components/form'

const mapStateToProps = (state) => ({
  pass: state.signUpReducer.pass
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (pass) => dispatch(changePass(pass))
})

export const PasswordInput = connect(mapStateToProps, mapDispatchToProps)(Input)
connect(mapStateToProps, null)(Form)
