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
import AvoImage1 from "./Images/AvoCurations/1.jpeg"
import AvoImage2 from "./Images/AvoCurations/2.jpeg"
import AvoImage3 from "./Images/AvoCurations/3.jpeg"
import AvoImage4 from "./Images/AvoCurations/4.jpeg"
import AvoImage5 from "./Images/AvoCurations/5.jpeg"
import AvoImage6 from "./Images/AvoCurations/6.jpeg"
import AvoImage7 from "./Images/AvoCurations/7.jpeg"
import AvoImage8 from "./Images/AvoCurations/8.jpeg"
import Newlogo from "./Images/AvoCurations/Newlogo.png"
import AvoImage9 from "./Images/AvoCurations/AboutUsBanner.jpeg"
import AvoImage10 from "./Images/AvoCurations/AvoLogo.jpeg"
import AvoImage11 from "./Images/AvoCurations/Animated.gif"
import GalleryImage from "./Images/AvoCurations/GalleryImage.svg"
import GalleryImage2 from "./Images/AvoCurations/GalleryImage2.svg"
import PlantImage from "./Images/AvoCurations/PlantImage.png"
import AvoAccessoriesOverlay from "./Images/AvoCurations/AvoAccessoriesOverlay.png"
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
import GeminiFlatBar from "./Images/MittalGroup/gflatbar.jpeg"
import GeminiRoundBar from "./Images/MittalGroup/groundbar.jpeg"
import GeminiAngles from "./Images/MittalGroup/gangles.jpeg"
import GeminiChannels from "./Images/MittalGroup/gchannels.jpeg"
import GeminiChannels2 from "./Images/MittalGroup/gchannels2.jpeg"
import GeminiAngles2 from "./Images/MittalGroup/gangles2.jpeg"
import GeminiRoundBar2 from "./Images/MittalGroup/groundbar2.jpeg"
import GeminiRoundBar3 from "./Images/MittalGroup/groundbar3.jpeg"
import GeminiAngles3 from "./Images/MittalGroup/gangles3.webp"
import location from "./Images/MittalGroup/Location.jpg"
import capability from "./Images/MittalGroup/Capabilities.jpg"
import OST from "./Images/MittalGroup/On-Site Testing.jpg"
import MT from "./Images/MittalGroup/Mechanical Testing.jpg"
import CT from "./Images/MittalGroup/Chemical Testing.jpg"
import SA from "./Images/MittalGroup/Safety Assurance.jpg"
import standard from "./Images/MittalGroup/Standardization.jpg"
import consistency from "./Images/MittalGroup/Consistency.avif"
import CC from "./Images/MittalGroup/Customer Confidence.jpg"
import BIS from "./Images/MittalGroup/Bureau of Indian Standards (BIS).jpeg"
import marketCredibility from "./Images/MittalGroup/Market Credibility.jpg"
import CustomerTrust from "./Images/MittalGroup/Customer Trust.jpg"
import ISI from "./Images/MittalGroup/ISI Mark Certification.jpg"
import RA from "./Images/MittalGroup/Regulatory Assurance.jpg"
import BR from "./Images/MittalGroup/Brand Reputation.jpg"

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
import craousal1 from "./Images/GlosemImages/Craousal1.jpeg"
import craousal2 from "./Images/GlosemImages/Craousal2.jpeg"
import craousal3 from "./Images/GlosemImages/Craousal3.jpeg"
import craousal4 from "./Images/GlosemImages/Craousal4.jpeg"
import product1 from "./Images/GlosemImages/smt.webp"
import product2 from "./Images/GlosemImages/molding.webp"
import product3 from "./Images/GlosemImages/packaging.webp"
import product4 from "./Images/GlosemImages/rel.webp"
import Flipchip1 from "./Images/GlosemImages/FCBGA.webp"
import Flipchip2 from "./Images/GlosemImages/cuPillar.webp"
import Flipchip3 from "./Images/GlosemImages/FCFBGA_MUF.webp"
import Flipchip4 from "./Images/GlosemImages/FCFBGA_eMUF.webp"
import GiftIcon from "./Images/AvoCurations/GiftIcon.png"


const UploadPhotos = () => {

    const UploadPhotoData = [
        { img: GiftIcon },
        {
            img: GalleryImage2
        },
        {
            img: GalleryImage
        },
        {
            img: AvoAccessoriesOverlay
        },
        {
            img: PlantImage
        },
        {
            img: AvoImage1
        }, {
            img: AvoImage2
        }, {
            img: AvoImage3
        }, {
            img: AvoImage4
        }, {
            img: AvoImage5
        }, {
            img: AvoImage6
        }, {
            img: AvoImage7
        }, {
            img: AvoImage7
        },
        {
            img: AvoImage8
        },
        {
            img: AvoImage9

        },
        {
            img: AvoImage10

        },
        {
            img: AvoImage11
        },

        {
            img: Newlogo
        },
        { img: location },
        {
            img: capability
        },
        {
            img: OST
        },
        {
            img: MT
        },
        {
            img: CT
        },
        {
            img: SA
        },
        {
            img: standard
        },
        {
            img: consistency
        },
        {
            img: CC
        },
        {
            img: BIS
        },
        {
            img: marketCredibility
        },
        {
            img: CustomerTrust
        },
        {
            img: ISI
        },
        {
            img: RA
        },
        {
            img: BR
        },
        {
            img: RoundBars1
        },
        {
            img: FlatBars1
        },
        {
            img: ChannelsBar1
        },
        {
            img: Channels1
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
            img: FlatBars2
        },
        {
            img: FlatBars3
        },
        {
            img: FlatBars4
        },
        {
            img: FlatBars5
        },
        {
            img: FlatBars6
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
            img: Channels2
        },
        {
            img: Channels3
        },
        {
            img: Channels4
        },
        {
            img: Channels5
        },
        {
            img: GeminiFlatBar
        },
        {
            img: GeminiRoundBar
        },
        {
            img: GeminiAngles
        },
        {
            img: GeminiChannels
        },
        {
            img: GeminiChannels2
        },
        {
            img: GeminiAngles2
        },
        {
            img: GeminiRoundBar2
        },
        {
            img: GeminiRoundBar3
        },
        {
            img: GeminiAngles3
        },
        {
            img: craousal1
        },
        {
            img: craousal2
        },
        {
            img: craousal3
        },
        {
            img: craousal4
        },
        {
            img: product1
        },
        {
            img: product2
        },
        {
            img: product3
        },
        {
            img: product4
        },
        {
            img: Bhavikpatel,
        },
        {
            img: Home1,
        },
        {
            img: Home2,
        },
        {
            img: IOT,
        },
        {
            img: Automotive,
        },
        {
            img: Health,
        },
        {
            img: Robotics,
        },
        {
            img: Consumer,
        },
        {
            img: Communication,
        },
        {
            img: Flipchip1
        },
        {
            img: Flipchip2
        },
        {
            img: Flipchip3
        },
        {
            img: Flipchip4
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