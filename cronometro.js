# AppCronometro
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {valor: 0, nome: "COMEÇAR"}
    this.timer = null;

    this.comecar = this.comecar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  comecar(){
    let s = this.state;

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;

      s.nome = "CONTINUAR";
      this.setState(s);
    }else{
      this.timer = setInterval(() => {
        
        s.valor += 0.1;
        s.nome = "PARAR";

        this.setState(s);
      }, 100);
    }
  }

  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    let s = this.state;

    s.valor = 0;
    s.nome = "INICIAR";

    this.setState(s);
  }

  render(){ 
    return(
      <View style={estilo.body} >
        <Text style={estilo.texto}> {this.state.valor.toFixed(1)} </Text>
        <View style={estilo.areaBtn}>

          <TouchableOpacity style={estilo.btn} onPress={this.comecar}>
            <Text style={estilo.textBtn}> {this.state.nome} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilo.btn} onPress={this.limpar}>
            <Text style={estilo.textBtn}>LIMPAR</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  body:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c1f30'
  },
  areaBtn:{
    flexDirection: 'row',
    marginTop: 170
  },
  textBtn:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  btn:{
    width: 160,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  texto:{
    fontSize: 90,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
})
