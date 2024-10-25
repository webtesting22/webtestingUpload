import { Row, Col } from "antd";
import React from "react";
import img1 from "./Images/1-min.jpg"
import img2 from "./Images/2-min.jpg"
import img3 from "./Images/3-min.jpg"
import img4 from "./Images/4-min.jpg"
import img5 from "./Images/5-min.jpg"
import img6 from "./Images/6-min.jpg"
import img7 from "./Images/1-min.jpg"
import img8 from "./Images/1-min.jpg"
import img9 from "./Images/1-min.jpg"
import img10 from "./Images/1-min.jpg"
import img11 from "./Images/1-min.jpg"
// import img1 from "./Images/1-min.jpg"
const UploadPhotos = () => {

    const UploadPhotoData = [
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
        }, {
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