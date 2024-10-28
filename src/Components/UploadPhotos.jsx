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
import FlatBars2 from "./Images/MittalGroup/flatbar2.jpg"
import FlatBars3 from "./Images/MittalGroup/flatbar3.jpg"
import FlatBars4 from "./Images/MittalGroup/flatbar4.jpg"
import FlatBars5 from "./Images/MittalGroup/flatbar5.jpg"
import FlatBars6 from "./Images/MittalGroup/flatbar6.jpg"
import Angles2 from "./Images/MittalGroup/angles2.jpg"
import Angles3 from "./Images/MittalGroup/angles3.jpg"
import Angles4 from "./Images/MittalGroup/angles4.jpg"
import Angles5 from "./Images/MittalGroup/angles5.jpg"
import Channels2 from "./Images/MittalGroup/channels2.jpg"
import Channels3 from "./Images/MittalGroup/channels3.jpg"
import Channels4 from "./Images/MittalGroup/channels4.jpg"
import Channels5 from "./Images/MittalGroup/channels5.jpg"

// ----------------GlosemImages-------------------
import Bhavikpatel from "./Images/GlosemImages/BhavikPatel.jpeg"
import Home1 from "./Images/GlosemImages/factorImage.jpeg"
import Home2 from "./Images/GlosemImages/GlosemHomeBack.jpg"
import IOT from "./Images/GlosemImages/IOT.jpeg"
import Automotive from "./Images/GlosemImages/Automotive.jpeg"
import Health from "./Images/GlosemImages/healthcare.jpeg"
import Robotics from "./Images/GlosemImages/robotics.jpeg"
import Consumer from "./Images/GlosemImages/consumer.jpeg"
import Communication from "./Images/GlosemImages/communication.jpeg"



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
        {
            img:Bhavikpatel,
        },
        {
            img:Home1,
        },
        {
            img:Home2,
        },
        {
            img:IOT,
        },
        {
            img:Automotive,
        },
        {
            img:Health,
        },
        {
            img:Robotics,
        },
        {
            img:Consumer,
        },
        {
            img:Communication,
        },
        {
            img:FlatBars2
        },
        {
            img:FlatBars3
        },
        {
            img:FlatBars4
        },
        {
            img:FlatBars5
        },
        {
            img:FlatBars6
        },
        {
            img: Angles2
        },
        {
            img: Angles3
        },
        {
            img: Angles4
        },
        {
            img: Angles5
        },
        {
            img:Channels2
        },
        {
            img:Channels3
        },
        {
            img:Channels4
        },
        {
            img:Channels5
        }

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