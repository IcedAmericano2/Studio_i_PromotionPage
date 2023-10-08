import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const boxVariant = {
    visible: { opacity: 1, scale: 1.5, transition : {duration : 1, delay: 0.3} },
    hidden: { opacity: 0, scale: 1},
}

const Title = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 300px;
    /* background-color: gray; */
    margin-top: 100px;
    color: blue;
    font-size: 2rem;
    font-weight: 600;
    
`;


export default function AboutTitle({title}) {
    const control = useAnimation();
    const [ref, inView] = useInView();


    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <Title
            ref = {ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            {title}
        </Title>
    )
};