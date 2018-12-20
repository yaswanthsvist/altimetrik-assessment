import React from 'react'
import { getData } from './../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLineData } from './../../selectors/index'
// import { LineChart } from 'react-easy-chart'

const mapStateToProps = state => ({
  data: getLineData(state),
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getData,
    },
    dispatch
  )
class dashboardPage extends React.Component {
  handleLike = () => {
    return this.props.actions.likePostById(pageId)
  }
  componentDidMount() {
    this.props.getData()
  }

  render() {
    if (this.props.data)
      return (
        <div>
          {this.props.data.data.data1d.map((price, index) => (
            <div>price:{price[1]}</div>
          ))}
        </div>
      )
    // <LineChart
    //   data={[
    //     [
    //       this.props.data.data.data1d.map((price, index) => ({
    //         x: index,
    //         y: price[1],
    //       })),
    //     ],
    //   ]}
    // />
    // )
    else return <div />
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(dashboardPage)
