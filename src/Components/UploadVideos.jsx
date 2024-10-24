import React from "react";
import { Row, Col } from "antd";

import Delivery from "./Videos/Delivery Ads.mp4"
import Educational from "./Videos/Educational Niche.mp4"
const UploadVideos = () => {
    const UploadVideoData = [
        {
            video: Delivery
        },
        {
            video:Educational
        }
    ]
    return (
        <>
            <section>
                <Row>
                    {UploadVideoData.map((item, index) => (
                        <Col lg={6} md={8} key={index}>
                            <video
                                x
                                src={item.video}
                                loop={true}
                                autoPlay
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                            />
                        </Col>
                    ))}
                </Row>
            </section>
        </>
    )
}
export default UploadVideos