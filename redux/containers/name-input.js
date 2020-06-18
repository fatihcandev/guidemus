import { changeName } from '../actions'
import { connect } from 'react-redux'
import Input from '../../components/input'
import SignUpForm from '../../components/sign-up-form'

const mapStateToProps = (state) => ({
  name: state.signUp.name
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (name) => dispatch(changeName(name))
})

export const NameInput = connect(mapStateToProps, mapDispatchToProps)(Input)
