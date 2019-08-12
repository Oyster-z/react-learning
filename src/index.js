/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 00:49:10
 * @LastEditTime: 2019-08-12 23:33:18
 * @LastEditors: Please set LastEditors
 */
import React, {
    Component, Fragment
} from 'react'

import {render} from 'react-dom'

import './index.css'

import classNames from 'classnames'

import styled from 'styled-components'

import App2 from './App'

// class App extends Component {
//     render (){
//         const style = {color: 'red'};
//         return(
//             <div>
//                 {/* 第一种使用css的方式，采用js的方式 */}
//                 <h1 style={style}>元素中的样式</h1>
//             </div>
//         )
//     }
// }

// 利用styled 插件
const Title = styled.h1`
    color: purple
`

class App extends Component {
    render (){
        const style = {color: 'red'};
        return(
            <Fragment>
                <Title>元素中的样式</Title>
                <ol>
                    <li style={style}>使用style内联创建</li>
                    <li className="has-text-red">使用class的方式，但是在react 里面 class要写成className</li>
                    <li className={classNames('a', {'b': true, 'c': false})}>
                        动态添加不同的className 就可以使用第三方的包叫做 classnames,比如这个li标签上就只有a b 没有 c</li>
                
                </ol>
            </Fragment>
        )
    }
}

render(
    <App2/>,
    document.querySelector("#root")
)