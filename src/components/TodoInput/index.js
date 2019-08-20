/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 23:10:45
 * @LastEditTime: 2019-08-20 23:30:50
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class TodoInput extends Component {
    static defaultProps = {
        btnName: "内部"
    }

    static propTypes = {
        btnText: PropTypes.number
    }

    state = {
        title: "todoinput 的title"
    }

    render() {
        return (
            <div>
                <input type="text"/><button>{this.props.btnName}</button>
            </div>
        )
    }
}
