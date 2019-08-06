import React, {
    Component
} from 'react'

import {
    render
} from 'react-dom'

// const Header = () => <h1>类组件!!!</h1>
// 嵌套，这是JSX的语法， 但不是合法的js代码
// class App extends Component {
//     render(){
//         console.log(this.props.desc)
//         return  (
//         <div>
//             <Header />
//             <p>{this.props.desc}</p>
//         </div>
//         ) 

//     }
// }

// 虚拟DOM 的表示方式
// const appVDom = {
//     tag: 'div',
//     attrs: {
//         className: 'app',
//         id: 'aooRoot'
//     },
//     children: [{
//         tag: 'h1',
//         attrs: {
//             className: 'title'
//         },
//         children: [
//             'JSX原理'
//         ]
//     }, {
//         tag: 'p',
//         attrs: null,
//         children: [
//             '类组件是继承React.Component的'
//         ]
//     }]
// }

// 这里是使用类的形式创建的组件，所以react 在真正渲染的时候会把上面的代码编译为下面这个样子来运行，下面的代码就是合法的js代码
class App extends Component {
    render() {
        return (
            // React.createElement 是一个方法，用于创建元素，可以有很多的参数，但是前两个是固定的;
            // 第一个是 标签名
            // 第二个可以理解为 标签的属性
            // 剩下的，你就继续写更多的子元素吧
            // React.createElement(type, [props], [....children])
            React.createElement(
                'div',
                {
                    className:'app',
                    title:'appRoot'
                },
                React.createElement(
                    'h1',
                    {
                        className:'title'
                    },
                    'JSX原理'
                ),
                React.createElement(
                    'p',
                    null,
                    '类组件是继承React.Component的'
                )
            )
        )

    }
}

render( <
    App desc = "类组件是继承 React.Component的" / > ,
    document.querySelector("#root")
)