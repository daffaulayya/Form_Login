import React from 'react'
import "antd/dist/antd.css";
import { Carousel } from 'antd';
import './body.css'

const IniBody = () => {
    return (
        <div className='slider' >
            <>
                <Carousel autoplay>
                    <div>
                        <h3>
                        <img src='/images/1.jpg' style={{ width: "1000px", height: "450px" }}/>
                        </h3>
                    </div>
                    <div>
                    <h3>
                        <img src='/images/2.jpg' style={{ width: "1000px", height: "450px" }}/>
                        </h3>
                    </div>
                    <div>
                    <h3>
                        <img src='/images/3.jpg' style={{ width: "1000px", height: "450px" }}/>
                        </h3>
                    </div>
                    <div>
                    <h3>
                        <img src='/images/4.jpg' style={{ width: "1000px", height: "450px" }}/>
                        </h3>
                    </div>
                    <div>
                    <h3>
                        <img src='/images/5.jpg' style={{ width: "1000px", height: "450px" }}/>
                        </h3>
                    </div>
                </Carousel>
            </>
        </div>
    );
}

export default IniBody;