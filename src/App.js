/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 22:09:03
 * @LastEditTime: 2019-08-12 23:33:44
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
    render() {
        return (
            <div className='abc'>
                app
                <TodoHeader/>
                <TodoInput/>
                <TodoList/>
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

