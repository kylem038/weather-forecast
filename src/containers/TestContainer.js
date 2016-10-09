import { connect } from 'react-redux'
import { testAction } from '../actions/actions'
import Test from '../components/Test'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(testAction())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    text: testAction()
  }
}

export default connect(null, mapDispatchToProps)(Test)
