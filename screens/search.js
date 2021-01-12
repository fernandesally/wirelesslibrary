import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import db from "../config"
export default class Search extends React.Component{
  constructor(props){
    super(props)
    this.state={
      alltransaction:[]
    }
  }
  getdata=()=>{
    db.collection("transaction").get().then(
      data=>{
    data.docs.map((doc)=>{
      this.setState({
        alltransaction:[...this.state.alltransaction,doc.data()]
      })
    })
      }
    )
  }
  componentDidMount(){
    this.getdata()
  }
  render(){
return(
  <View>
  <TouchableOpacity 
         style={[styles.button,{backgroundColor:"orange"}]} >
          <Text style={styles.buttonText}>Search</Text>
       </TouchableOpacity>
       <FlatList
       data={this.state.alltransaction}
       renderItem={({item})=>(
         <View style={{borderBottomWidth:2}}>
           <Text>{item.bookid}</Text>
           <Text>{item.studentid}</Text>
           <Text>{item.transactiontype}</Text>
           </View>
       )}
       keyExtractor={(item,index)=>index.toString()}/>
       
 </View>
)


  }  
}
const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'black'
  }
})