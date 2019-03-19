
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

class CounterApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', width:200, height: 100 }} >
          <TouchableOpacity
            onPress={()=> this.props.counterIncrease()}
          >
            <Text style={{ fontSize: 25 }}> Increses </Text>
          </TouchableOpacity>
            <Text style={{ fontSize: 30 }} > {this.props.counter} </Text>
          <TouchableOpacity
            onPress={()=> this.props.counterDecrease()}
          >
            <Text style={{ fontSize: 25 }} > Decreses </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps (state){
    return{
        counter: state.counter
    }
}

function mapDispatchToProps (dispatch) {
    return{
        counterIncrease: ()=> dispatch({ type: 'INCREASE_COUNTER' }),
        counterDecrease: ()=> dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CounterApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
