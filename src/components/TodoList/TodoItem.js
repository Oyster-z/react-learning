/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 23:17:41
 * @LastEditTime: 2019-08-21 00:44:53
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        console.log(this.props)
        return (

            <li>
                {this.props.desc}{this.props.iscompleted ? "true":"false"}
            </li>
        )
    }
}
