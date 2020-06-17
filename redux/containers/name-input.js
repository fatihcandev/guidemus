import { changeName } from '../actions'
import { connect } from 'react-redux'
import Input from '../../components/input'
import Form from '../../components/form'

const mapStateToProps = (state) => ({
  name: state.signUpReducer.name
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (name) => dispatch(changeName(name))
})

export const NameInput = connect(mapStateToProps, mapDispatchToProps)(Input)
