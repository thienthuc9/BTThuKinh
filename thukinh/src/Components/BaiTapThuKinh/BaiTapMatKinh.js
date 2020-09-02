import React, { Component } from 'react'
import AnhThu from './AnhThu'
import MatKinh from './MatKinh'

export default class BaiTapMatKinh extends Component {
    state ={
        matKinh:[

        ]
    }
    thaydoiMatKinh = (Click)=>{
            this.setState({
                matKinh:Click
            })
    }
    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ];
    render() {
        return (
            <div className='body' style={{ backgroundImage: 'url(./glassesImage/apple-glass-tu-dieu-chinh-do-can-cho-nguoi-dung-tapchicongnghe.png)', backgroundSize: 'cover', height: '100vh', }}>
                <div style={{ height: '100vh', backgroundColor: 'rgba(0,0,0,.5)' }}>
                    <h1 style={{ color: 'white' }}>Try Glap App Online</h1>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4'></div>
                            <div className='col-4 chinh'>
                                <AnhThu thaydoi={this.state.matKinh}></AnhThu>

                            </div>

                            <div className='col-4'></div>

                        </div>

                    </div>
                    <div style={{ backgroundColor: 'white', height: '250px' }} className='container'>
                        <MatKinh sanpham={this.arrProduct} chonMatkinh={this.thaydoiMatKinh}></MatKinh>
                    </div>

                </div>

            </div>
        )
    }
}
