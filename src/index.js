import React, {Component} from 'react'

import { render } from 'react-dom' 

// 定义组件的第二种方式，使用类
class App extends Component {
    render(){
        console.log(this.props.desc)
        return  (
        <div>
            <h1>类组件</h1>
            <p>{this.props.desc}</p>
        </div>
        ) 

    }
}


// 原理
// const app = new App({
//     desc:"类组件是继承 React.Component的"
// }).render()

// <App desc="类组件是继承 React.Component的"/> 可以换成 app

// 在react 16以前，使用这个方式来创建一个类组件
// React.createClass({
//     render(){
//         return <h1>ZXXXX</h1>
//     }
// })

// render 是react dom 提供的一个方法，这个方法通常只会用一次
render(
    <App desc="类组件是继承 React.Component的"/>,
    document.querySelector("#root")
)