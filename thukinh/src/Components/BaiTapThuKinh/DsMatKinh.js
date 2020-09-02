import React, { Component } from 'react'
import MatKinh from './MatKinh'

export default class DsMatKinh extends Component {
    render() {
        return (
            <div>
                  <button onClick={()=>{
                      this.props.Chon(this.props.matkinh)
                  }}>
                        <img style={{height:'50px'}} src={this.props.matkinh.url}></img>
                    </button>
            </div>
        )
    }
}
