import React, { Component } from 'react'
import DsMatKinh from './DsMatKinh'

export default class MatKinh extends Component {
    rendermatkinh=()=>{
        return this.props.sanpham.map((sp,index) =>{
            return <div key={index}>
            <DsMatKinh matkinh={sp} Chon ={this.props.chonMatkinh} ></DsMatKinh>

            </div>
        })
    }
    render() {
        return (
            <div>
                <div className='row'>
                 {this.rendermatkinh()}

                    
                </div>
            </div>
        )
    }
}
