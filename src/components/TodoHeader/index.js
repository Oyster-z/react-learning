/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 22:16:09
 * @LastEditTime: 2019-08-21 00:52:39
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
    return (
        <>
            <h1>
                {props.title}    
            </h1>
            <h4>{props.children}</h4>
            <i>1 + 2 ={props.x + props.y}</i>
            <div dangerouslySetInnerHTML={{__html:props.article}}></div>
        </>
    )
}

// 如果没有定义的title 属性，则设置默认 参数
TodoHeader.defaultProps= {
    title: "你好鸭"
}

// prop-types 以下是对 title x y 的检测是否分别属于 string number 类型
TodoHeader.propTypes = {
    title: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
}
