import { Row,Col } from "antd";
import React from "react";

const UploadPhotos = () => {

    const UploadPhotoData = [
        {
            img: ""
        },
        {
            img: ""
        }
    ]

    return (
        <>
            <section>
                <Row>
                    {UploadPhotoData.map((item, index) => (
                        <Col lg={6} md={8} key={index}>
                            <img src={item.img} alt="" />
                        </Col>
                    ))}
                </Row>
            </section>
        </>
    )
}
export default UploadPhotos