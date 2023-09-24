import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from "./header";

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트
 */
const PageBody = styled.div`
  display: flex;
  background-color: #E9E9E9;
`;

const SideDiv = styled.div`
  width: ${props => props.additionalWidth}px;
`;

const RealBody = styled.div`
  width: ${props => props.mainWidth}px;
`;
const Spacer = styled.div`
  height: 4rem;
`;

const Body = function({children}) {

    const [additionalWidth, setAdditionalWidth] = useState(0);
    const [mainWidth, setMainWidth] = useState(0);
    const [mainHeight, setMainHeight] = useState(0);

    useEffect(() => {
        // 화면 크기확인
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            console.log(screenWidth)
            if (screenWidth > 1440) {
                // 추가 너비를 설정
                setAdditionalWidth((screenWidth - 1440)/2);
                setMainWidth(1440);

            } else {
                // 1184px 이하일 경우 추가 너비를 0으로 설정
                setAdditionalWidth(0);
                setMainWidth(screenWidth);
            }
            setMainHeight(screenHeight);
        };

        // 초기 로드와 화면 크기 변경 시에도 적용
        handleResize();
        window.addEventListener('resize', handleResize);

        // 컴포넌트 언마운트 시 리스너 해제
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <>
        <Header />
        <Spacer />
        <PageBody>
            <SideDiv additionalWidth={additionalWidth}/>
            <RealBody mainWidth={mainWidth}>
                {children}
            </RealBody>
            <SideDiv additionalWidth={additionalWidth}/>
        </PageBody>
    </>
  );
};

export default Body;