import React, { Component } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import Numeros from "./Numeros"

export default class Mega extends Component {
    state={
        qtdNum: this.props.qtdNum,
        numeros:[]

    }

    gerarExclusivos = (arr) => {
      const novo = parseInt(Math.random() * 60 )+1                   //gera aleatorio entre 0 e 60
      return arr.includes(novo) ? this.gerarExclusivos(arr) : novo //verifica se existe no arr, executa novamente ou retorna novo numero

    }

    gerarNumeros = () => {
      const numeros = Array(this.state.qtdNum) //gerando array com a quantidade solicitada
        .fill()                                  //preenche os indices com undefined
        .reduce(n => [...n, this.gerarExclusivos(n)], []) //chama criarExclusivo para cada index do array numeros
        .sort((a,b) => a-b)
      this.setState({numeros}) //altera o estado de numeros.

    }

    changeNum = (qtd) => {
      this.setState({qtdNum: +qtd})
    }

    exibirNumeros = () => {
      return this.state.numeros.map(num => {
        return <Numeros num={num}/>
      })
    }



    render () {
        return(
      <View>
        <Text style={{fontSize:30 }}>
          Gerador de Numeros Mega
          </Text>
        
        <TextInput
          style={{fontSize:25, textAlign:"center"}}
          placeholder="Qtd Numeros"
          value={this.state.qtdNum}
          onChangeText={this.changeNum}
          keyboardType={'numeric'}
        />

        <Button
        title="Gerar Numeros"
        onPress={this.gerarNumeros}/>


        <Text style={{fontSize:25, textAlign:'center', marginBottom:30}}>
          {this.state.numeros.join(',')}
          </Text>

        <View style={{flexDirection:"row", justifyContent:"center", flexWrap:"wrap"}}>

        {this.exibirNumeros()}
        </View>

        
        

        
      </View>
    );
        }
  }


   //UTILIZANDO FOR para gerar numeros
    // gerarNumeros = () => {
    //   const {qtdNum} = this.state
    //   const numeros = []

    //   for(let i = 0; i < qtdNum; i++){
    //     const n = this.gerarExclusivos(numeros)
    //     numeros.push(n)
    //   }

    //   numeros.sort((a,b) => a-b)
    //   this.setState({numeros})

    // }