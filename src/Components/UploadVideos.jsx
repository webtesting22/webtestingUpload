import React from "react";
import { Row, Col } from "antd";

import Delivery from "./Videos/Delivery Ads.mp4"
import Educational from "./Videos/Educational Niche.mp4"
import Portfolio from "./Videos/Portfolio  show reel.mp4"
import sample6 from "./Videos/sample6.mp4"
import sample9 from "./Videos/sample9.mp4"
import sample10 from "./Videos/sample10.mp4"
import ShortForm from "./Videos/Short Form.mp4"
import Video1 from "./Videos/Video1.mp4"
import Video2 from "./Videos/Video2.mp4"
import Video3 from "./Videos/Video3.mp4"
import GlosemBackImage from "./Videos/GlosemBackImage.mp4"
import BackGround from "./Videos/AgiluxSolutions/BackGround.mp4"
import Mobilescreen from "./Videos/AgiluxSolutions/Mobilescreen.mp4"
import MittalVideo from "./Videos/AB Mittal Video.mp4"
import MittalHomePageVideo from "./Videos/MSL HomePage Video.mp4"
import MittalHomePageCompressedVideo from './Videos/MSL HomePage Video Compressed.mp4'
import AVOVideo from "./Videos/AVOVideo.mp4"
import GiftVideo from "./Videos/GiftVideo.mp4"
import GiftVideo2 from "./Videos/GiftVideo2.mp4"
import GiftVideo3 from "./Videos/GiftVideo3.mp4"
import GiftVideo4 from "./Videos/GiftVideo4.mov"
import GiftVideo5 from "./Videos/GiftVideo5.mp4"
const UploadVideos = () => {
    const UploadVideoData = [
        {
            video: GiftVideo
        },
        {
            video: GiftVideo2
        },
        {
            video: GiftVideo3
        },
        {
            video: GiftVideo4
        },
        {
            video: GiftVideo5
        },
        {
            video: AVOVideo
        },
        {
            video: Mobilescreen
        },
        {
            video: BackGround
        },
        {
            video: GlosemBackImage
        },
        {
            video: Delivery
        },
        {
            video: Educational
        },
        {
            video: Portfolio
        },
        {
            video: sample6
        },
        {
            video: sample9
        },
        {
            video: sample10
        },
        {
            video: ShortForm
        },
        {
            video: Video1
        },
        {
            video: Video2
        },
        {
            video: Video3
        },
        {
            video: MittalVideo,
        },
        {
            video: MittalHomePageVideo,
        },
        {
            video:MittalHomePageCompressedVideo,
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