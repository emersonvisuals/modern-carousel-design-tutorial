"use client";
import React, { useState } from "react";
import styles from "./carousel.module.scss";
import Image from "next/image";
import imageOne from "../../../../public/images/image-one.png";
import imageTwo from "../../../../public/images/image-two.png";
import imageThree from "../../../../public/images/image-three.png";
import previousDisabled from "../../../../public/images/previous-disabled.svg";
import previousEnabled from "../../../../public/images/previous-enabled.svg";
import nextDisabled from "../../../../public/images/next-disabled.svg";
import nextEnabled from "../../../../public/images/next-enabled.svg";
import { motion } from "framer-motion";

const Carousel = () => {
    // image index state
    const [activeIndex, setActiveIndex] = useState(0);

    // transition direction state
    const [transitionDirection, setTransitionDirection] = useState("next");

    // function to handle next button click
    const handleNext = () => {
        setTransitionDirection("next");
        setActiveIndex((prevIndex) =>
            prevIndex === 2 ? prevIndex : prevIndex + 1
        );
    };

    // function to handle previous button click
    const handlePrevious = () => {
        setTransitionDirection("previous");
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? prevIndex : prevIndex - 1
        );
    };

    // array for titles and descriptions
    const texts = [
        {
            title: "Immersive gaming experience",
            description:
                "adipisicing elit. Iure doloremque aut ratione eos! Laudantium ipsum velit, modi quae repudiandae, in quidem iste cupiditate sequi expedita placeat quam rerum, optio facilis. Officia iure quo illo eligendi. Perspiciatis voluptatibus itaque natus maiores alias vitae, reprehenderit distinctio cupiditate libero fugiat aut architecto ratione?",
        },
        {
            title: "On demand support when you need it",
            description:
                "doloremque aut ratione eos! Laudantium ipsum velit, modi quae repudiandae, in quidem iste cupiditate sequi expedita placeat quam rerum, optio facilis. Officia iure quo illo eligendi. Perspiciatis voluptatibus itaque natus maiores alias vitae, reprehenderit distinctio cupiditate libero fugiat aut architecto ratione?",
        },
        {
            title: "Accessible and inclusive to all",
            description:
                "Laudantium ipsum velit, modi quae repudiandae, in quidem iste cupiditate sequi expedita placeat quam rerum, optio facilis. Officia iure quo illo eligendi. Perspiciatis voluptatibus itaque natus maiores alias vitae, reprehenderit distinctio cupiditate libero fugiat aut architecto ratione?",
        },
    ];

    // defining text animation
    const textVariants = {
        hidden: {
            opacity: 0,
            x: transitionDirection === "next" ? 100 : -100,
            transition: { duration: 0.5, ease: "easeInOut" },
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    };

    // defining stagger text effect
    const textContainerVariant = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 },
        },
    };

    return (
        <div className={styles.carouselContainer}>
            <motion.div
                className={styles.contentContainer}
                key={activeIndex}
                variants={textContainerVariant}
                initial="hidden"
                animate="visible"
            >
                <div className={styles.titleContainer}>
                    <motion.h1 variants={textVariants}>
                        {texts[activeIndex].title}
                    </motion.h1>
                </div>
                <div className={styles.descriptionContainer}>
                    <motion.p variants={textVariants}>
                        {texts[activeIndex].description}
                    </motion.p>
                </div>
                <div className={styles.buttonContainer}>
                    <button>learn more</button>
                </div>
            </motion.div>
            <div className={styles.imagesContainer}>
                <motion.div
                    className={styles.firstContainer}
                    animate={{
                        opacity:
                            activeIndex === 0 ? 1 : activeIndex === 1 ? 0 : 0,
                        x:
                            activeIndex === 0
                                ? "0"
                                : activeIndex === 1
                                ? "96px"
                                : "96px",
                        scale:
                            activeIndex === 0
                                ? 1
                                : activeIndex === 1
                                ? 1.2
                                : 1.2,
                    }}
                    transition={{
                        duration: 0.5, // Animation duration in seconds
                        delay: 0, // Delay before the animation starts in seconds
                        ease: "easeInOut", // Easing function for the animation
                    }}
                >
                    <Image
                        className={styles.first}
                        alt="first image"
                        src={imageOne}
                    ></Image>
                </motion.div>
                <motion.div
                    className={styles.secondContainer}
                    animate={{
                        opacity:
                            activeIndex === 0
                                ? 0.66
                                : activeIndex === 1
                                ? 1
                                : 0,
                        x:
                            activeIndex === 0
                                ? "-96px"
                                : activeIndex === 1
                                ? "0"
                                : "96px",
                        scale:
                            activeIndex === 0
                                ? 0.8
                                : activeIndex === 1
                                ? 1
                                : 1.2,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        className={styles.second}
                        alt="second image"
                        src={imageTwo}
                    ></Image>
                </motion.div>
                <motion.div
                    className={styles.thirdContainer}
                    animate={{
                        opacity:
                            activeIndex === 0
                                ? 0.33
                                : activeIndex === 1
                                ? 0.66
                                : 1,
                        x:
                            activeIndex === 0
                                ? "-192px"
                                : activeIndex === 1
                                ? "-96px"
                                : "0",
                        scale:
                            activeIndex === 0
                                ? 0.6
                                : activeIndex === 1
                                ? 0.8
                                : 1,
                    }}
                    transition={{
                        duration: 0.5, // Animation duration in seconds
                        delay: 0, // Delay before the animation starts in seconds
                        ease: "easeInOut", // Easing function for the animation
                    }}
                >
                    <Image
                        className={styles.third}
                        alt="third image"
                        src={imageThree}
                    ></Image>
                </motion.div>
                <div className={styles.controls}>
                    <button
                        className={
                            activeIndex !== 0
                                ? `${styles.previousContainer}`
                                : `${styles.disabled}`
                        }
                        onClick={handlePrevious}
                    >
                        <Image
                            src={
                                activeIndex !== 0
                                    ? previousEnabled
                                    : previousDisabled
                            }
                            alt="previous icon"
                            className={styles.previous}
                        ></Image>
                    </button>
                    <button
                        className={
                            activeIndex !== 2
                                ? `${styles.nextContainer}`
                                : `${styles.disabled}`
                        }
                        onClick={handleNext}
                    >
                        <Image
                            src={activeIndex !== 2 ? nextEnabled : nextDisabled}
                            alt="next icon"
                            className={styles.next}
                        ></Image>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
