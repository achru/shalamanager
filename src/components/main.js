let React = require('react-native')
let {
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  ToolbarAndroid
} = React
import {connect} from 'react-redux/native'

let deviceWidth = Dimensions.get('window').width

import InteractionManager from 'InteractionManager'



class Main extends React.Component {
  constructor (props) {
    super(props)

    this.onActionSelected = this.onActionSelected.bind(this)
  }


  render () {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  toolbar: {
    backgroundColor: '#3a3f41',
    height: 50,
    color: '#fff'
  }
})

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired,
  playingSongId: PropTypes.number,
  playlist: PropTypes.string,
  playlists: PropTypes.object.isRequired,
}

export default Main