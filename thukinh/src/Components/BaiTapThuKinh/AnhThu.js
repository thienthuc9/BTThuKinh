import React, { Component } from 'react'
import '../css.css'

export default class AnhThu extends Component {
    render() {
        return (
            <div style={{ backgroundImage: 'url(./glassesImage/model.jpg)', height: '300px', width: '250px', backgroundSize: 'cover' }}>
                <img className='kinh' style={{ width: '54%',opacity:'0.75'}} src={this.props.thaydoi.url}></img>
                <div className='chitiet'>
                    <h3 style={{color:'SlateBlue'}}>{this.props.thaydoi.name}</h3>
                    {this.props.thaydoi.desc}</div>
            </div>
        )
    }
}
