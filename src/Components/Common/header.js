import React, {useState} from 'react';
import styled from 'styled-components';
import Responsive from './responsive';
import { HiMenu,HiX } from "react-icons/hi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {motion} from "framer-motion";
import {Variants} from "framer-motion";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const AnimatedOffcanvas = styled(Offcanvas)` 
  height: 80vh;
  background-color: white;
`;

const OffcanvasBody = styled(Offcanvas.Body)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const CanvasDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  width: 100%;
  
  @media(max-width: 840px){
    padding: 0rem;
    }
`;

const CanvasSubDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  background-color: red;
  width: 100%;
  text-align: center;
  font-size: 5rem;
  font-weight: 500;
  margin: auto;

  @media(max-width: 870px){
    font-size: 2rem;
    }
  @media(max-width: 870px){
  font-size: 1.5rem;
  }
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  
  .logo {
    font-size: 2.25rem;
    font-weight: 600;
    letter-spacing: 2px;
    white-space: nowrap;
    
    @media(max-width: 390px){
    font-size: 1.625rem;
    }
  }
  .menu{
    margin-right: 5%;
  }
`;
const StyledHiX = styled(motion(HiX))`
  font-size: 2.25rem; 
`;
const StyledHiMenu = styled(motion(HiMenu))`
  font-size: 2.25rem; 
`;

const MenuButton = styled(motion.button)`
    width: 20%;
    font-size: 6rem;
    font-weight: 800;
    border:none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    
    @media(max-width: 670px){
    font-size: 2.875rem;
    }
    
    @media(max-width: 390px){
    font-size: 1.25rem;
    }
`;

const containerVariant: Variants = {
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    },
    hidden: {
        opacity: 0
    }
};

const letterVariant: Variants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 400
        }
    },
    hidden: {
        opacity: 0,
        y: 0,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 400
        }
    }
};

const Spacer = styled.div`
  height: 4rem;
`;
/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트
 */

const MenuButtons = ({ children }) => {
    const buttonVariants = {
        initial: { opacity: 0, x: 0, y: 0 },
        animate: { opacity: 1, x: 40, y: 0 },
        transition: {type: "spring", duration: 0.5, bounce: 0.5},
        hover: {scale: 1.2},
        tab: {scale: 0.9},
    };

    return (
        <MenuButton
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            transition="transition"
            whileHover="hover"
            whileTap="tab"
        >
            {children}
        </MenuButton>
    );
};
const StyledLetter = styled(motion.span)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 600;
  color: blue;
`;

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(!show);

    const text = "STUDIO I";
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <div className="logo">STUDIO I</div>
                    <div className="menu" onClick={handleShow}>
                        {show?<StyledHiX className="MenuIcon" onClick={handleShow} />:<StyledHiMenu className="MenuIcon" onClick={handleShow} />}
                    </div>
                    <AnimatedOffcanvas  show={show} onHide={handleClose} >
                        <Offcanvas.Header />
                        <OffcanvasBody>
                            <CanvasDiv>
                                <MenuButtons>ABOUT</MenuButtons>
                                <MenuButtons>InFo</MenuButtons>
                                <MenuButtons>ARTWORK</MenuButtons>
                                <MenuButtons>QnA</MenuButtons>
                            </CanvasDiv>
                            <motion.h1
                                whileInView="visible"
                                initial="hidden"
                                variants={containerVariant}
                            >
                                {Array.from(text).map((letter, index) => (
                                    <StyledLetter key={index} variants={letterVariant}>
                                        {letter === " " ? "\u00A0" : letter}
                                    </StyledLetter>
                                ))}
                            </motion.h1>
                        </OffcanvasBody>
                    </AnimatedOffcanvas >
                </Wrapper>

            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;