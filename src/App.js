/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 22:09:03
 * @LastEditTime: 2019-08-21 00:53:00
 * @LastEditors: Please set LastEditors
 */

//  class 式组件
import React, { Component } from 'react'

import {
    TodoInput,
    TodoHeader,
    TodoList
} from './components'

export default class App extends Component {
    // state = {
    //     title: "这是我定义的title"
    // }

    constructor(){
        super() 
        this.state ={
            title: "使用构造器定义的title",
            article: "<div><h2>这是标题</h2> <p>内容</p></div>",
            todo: [
                {
                    id: 1,
                    desc: "吃饭",
                    iscompleted: true
                },
                {
                    id: 2,
                    desc: "睡觉",
                    iscompleted: false                    
                }
            ]
        }
    }
    render() {
        return (
            <div className='abc'>
                <TodoHeader x="1" y={2} article={this.state.article}>
                    {this.state.title}
                </TodoHeader>
                <TodoInput  btnText="123">

                </TodoInput>
                <TodoList todos={this.state.todo}/>
            </div>
        )
    }
}


//  函数式组件
// import React from 'react'

// export default function App() {    //export default () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

