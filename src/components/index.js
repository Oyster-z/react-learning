/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 23:11:26
 * @LastEditTime: 2019-08-12 23:27:56
 * @LastEditors: Please set LastEditors
 */

// 第一种写法，优点是在 import 之后，可以做一些统一的处理

// import TodoHeader from './TodoHeader'
// import TodoInput from './TodoInput'
// import TodoList from './TodoList'

// export {
//     TodoHeader,
//     TodoInput,
//     TodoList
// }

// 第二种写法
export { default as TodoHeader } from './TodoHeader'
export { default as TodoInput } from './TodoInput'
export { default as TodoList } from './TodoList'