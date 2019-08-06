import React from 'react'

import ReactDOM from 'react-dom'

// 这种方式可以理解为创建了一个简单的react库
// const app = <h1>Welcome to React</h1>

// const createApp = (props) => {
//     return (
//         <div>
//             {/* 只要在jsx里要插入js代码，就加一层胡括号即可，注释也是js，所以这里的注释就嫁了一层花括号 */}
//             <h1>Welcome to React {props.title}</h1>
//             <p>优秀的{props.title}</p>
//         </div>
//     ) 
// }

// const app = createApp({
//     title: 'React 16.8'
// })

// 创建组件的第一种方式：使用箭头函数，但是这个名字首字母要大写，上面是它的原理
const App = (props) => {
    return (
            <div>
                {/* 只要在jsx里要插入js代码，就加一层胡括号即可，注释也是js，所以这里的注释就嫁了一层花括号 */}
                <h1>Welcome to React {props.title}</h1>
                <p>优秀的{props.title}</p>
            </div>
    ) 
}

ReactDOM.render(
    <App title = "1901"/>,
    document.querySelector("#root")
)