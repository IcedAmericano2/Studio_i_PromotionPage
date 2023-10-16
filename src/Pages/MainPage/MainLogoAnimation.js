import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LetterAnimation from "../../Components/Common/LetterAnimation";
import Arrow from "../../assets/icon/Arrow2.png"


const AnimationContainer = styled(motion.div)`
    flex-direction: column;

`;
const LogoContainer = styled.div`
    /* width: 500px; */
`;
const ArrowImg = styled.img`
`;
const AboutContainer = styled(motion.div)`
    max-width : 600px;
    display: flex;
    flex-direction: row;
    margin-left: 400px;
    
`;
const SecondBox = styled.div`
    display: flex;
    flex-direction: column;
`
const Line = styled(motion.div)`
    background-color: red; /* 선의 색상 설정 */
    width: 20px;
    border-radius: 5px;

    /* height: 80vh; */
    /* transform: rotate(45deg); */
`;

const UnderlinedButton = styled(motion.button)`
    display: flex;
    margin-right: 35px;
    float: right;
    text-decoration: underline;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 13px;
    border: 2px solid black;
    border-radius: 90px;
    padding: 10px;
    width: 300px;
`;
const lineVariants = {
    hidden: {
      height : "0vh", 
    },
    visible: {
      height: "60vh", // 80vh 아래로 이동
      transition: {
        duration: 1.5, // 애니메이션 지속 시간
      },
    },
  };
  const line2Variants = {
    hidden: { 
        x: "calc((100vw - 30px) / 3)",
        width : 0

    }, // 초기 너비를 0으로 설정하여 숨깁니다.
    visible: { 
        x: 0,
        width: "100vw" ,
        transition: {
            duration: 2, // 애니메이션 지속 시간
          },
        } ,
}
// const ArrowIcon = styled(HiArrowLongRight)`
//     font-size: 50px;
//     color: red;
// `;
const Line2 = styled(motion.div)`
    height: 7px;
    background-color: red;
    width: 100vw;
    border-radius: 5px;

`;
const MainLogoAnimation = () => {
    //useAnimation 이용하여 위에서 아래로 떨어지는 애니메이션 적용
    const { ref, inView } = useInView();

      
    return (
        <AnimationContainer ref={ref}>
            <LogoContainer>
                <LetterAnimation mainlogo text="STUDIO i"/>
            </LogoContainer>
            <AboutContainer>
                <Line
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={lineVariants}
                ></Line>
                <SecondBox>
                    <LetterAnimation about customEase={[0.4, 0.1, 0.3, 0.9]} text="STUDIO i는 기획, 제작 및 편집을 통해 동영상 콘텐츠를 제작하는 
                        전문 기업입니다. 브랜드, 이벤트, 프로모션 등 다양한 분야에서 창의적이고 재미있는 영상을 제작합니다. "/>
                    <Link to = {'/about'}>
                        <UnderlinedButton
                        whileHover={{ scale : 1.1}}
                        transition={{type : "spring", stiffness: 400, damping: 10 }}>
                        <LetterAnimation more text="MORE ABOUT US"></LetterAnimation><ArrowImg src={Arrow}/>
                        </UnderlinedButton>
                    </Link>
                </SecondBox>
            
            </AboutContainer>
            <Line2
            initial = "hidden"
            animate={inView ? "visible" : "hidden"}
            variants={line2Variants}
            ></Line2>


        </AnimationContainer>
    )
}



export default MainLogoAnimation;