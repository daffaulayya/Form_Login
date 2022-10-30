import React from 'react'
import "antd/dist/antd.css";
import { Carousel } from 'antd';
import './body.css'

const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
  };

const IniBody = () => {
    return (
        <div className='slider' >
            <>
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>
                        <img src='/images/mandiri_banner_1.png' style={{ width: "1000px", height: "450px" }}/>
                        </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                        <img src='/images/mandiri_banner_1.png' style={{ width: "1000px", height: "450px" }}/>
                        </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                        <img src='/images/mandiri_banner_1.png' style={{ width: "1000px", height: "450px" }}/>
                        </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                        <img src='/images/mandiri_banner_1.png' style={{ width: "1000px", height: "450px" }}/>
                        </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                        <img src='/images/mandiri_banner_1.png' style={{ width: "1000px", height: "450px" }}/>
                        </h3>
                    </div>
                </Carousel>
            </>
        </div>
    );
}

export default IniBody;