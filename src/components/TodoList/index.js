/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 23:16:45
 * @LastEditTime: 2019-08-21 00:43:50
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'

import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        console.log(this.props)
        return (
            <ul>
                {
                    this.props.todos.map(todo => {
                        return (
                            <TodoItem
                                // id ={todo.id}
                                // desc={todo.desc}
                                // iscompleted={todo.iscompleted}
                                {...todo}
                            />
                            // <TodoItem/>
                        )   
                    })
                }
            </ul>
        )
    }
}
