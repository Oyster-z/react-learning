/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 23:16:45
 * @LastEditTime: 2019-08-12 23:19:00
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'

import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                <TodoItem />
            </ul>
        )
    }
}
