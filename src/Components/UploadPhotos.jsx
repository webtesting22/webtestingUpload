import { Row, Col } from "antd";
import React from "react";
import img1 from "./Images/1-min.jpg"
import img2 from "./Images/2-min.jpg"
import img3 from "./Images/3-min.jpg"
import img4 from "./Images/4-min.jpg"
import img5 from "./Images/5-min.jpg"
import img6 from "./Images/6-min.jpg"
import img7 from "./Images/7-min.jpg"
import img8 from "./Images/8-min.jpg"
import img9 from "./Images/9-min.jpg"
import img10 from "./Images/10-min.jpg"
import img11 from "./Images/11-min.jpg"
import Angles1 from "./Images/MittalGroup/Angles1.jpeg"
import Channels1 from "./Images/MittalGroup/Channels1.jpeg"
import ChannelsBar1 from "./Images/MittalGroup/ChannelsBar1.jpeg"
import FlatBars1 from "./Images/MittalGroup/FlatBars1.jpeg"
import RoundBars1 from "./Images/MittalGroup/RoundBars1.jpeg"
const UploadPhotos = () => {

    const UploadPhotoData = [
        {
            img:RoundBars1
        },
        {
            img:FlatBars1
        },
        {
            img:ChannelsBar1
        },
        {
            img:Channels1
        },
        {
            img: Angles1
        },
        {
            img: img1,
        },
        {
            img: img2,
        },
        {
            img: img3,
        },
        {
            img: img4,
        },
        {
            img: img5,
        },
        {
            img: img6,
        },

        {
            img: img7,
        },
        {
            img: img8,
        },
        {
            img: img9,
        },
        {
            img: img10,
        },
        {
            img: img11,
        },

    ]

    return (
        <>
            <section>
                <Row>
                    {UploadPhotoData.map((item, index) => (
                        <Col lg={6} md={8} key={index}>
                            <div className="imageContainer">
                                <img src={item.img} alt="" />
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>
        </>
    )
}
export default UploadPhotos