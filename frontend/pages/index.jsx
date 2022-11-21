import React, { useRef, useState } from 'react'
import Head from "next/head";

// MUI
import { Box } from '@mui/material'

import HomeTab from '../components/Home/HomeTab'
import Tabs from '../components/Home'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [refIndex, setRefIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const refs = useRef([]);

    const handleWheel = (e) => {
        if (!isScrolling) {
            setIsScrolling(curr => curr = true);

            const dir = (e.deltaY > 0) ? "DOWN" : "UP";
            scrollTab(dir);

            setTimeout(() => {
                setIsScrolling(curr => curr = false);
            }, 500)
        }
    }

    const handleTouch = (e) => {
        let posY = e.changedTouches[e.changedTouches.length - 1].screenY;

        if (posY > touchStart) {
            scrollTab("UP");
        } else if (posY < touchStart) {
            scrollTab("DOWN");
        }
    }

    const scrollTab = dir => {
        let i = refIndex;

        switch (dir) {
            case "UP":
                i--;
                break;
            case "DOWN":
                i++;
                break;
            default:
                return;
        }

        setRefIndex(i % Tabs.length);
    };



    return (
        <Box
            className={styles.scrollAnim}
            sx={{ transform: `translateY(-${refIndex * 100}vh)` }}
            onTouchStart={(e) => setTouchStart(e.touches[e.touches.length - 1].screenY)}
            onTouchEnd={handleTouch}
            onWheel={handleWheel}
        >
            <Head>
                <title>Mon Portfolio</title>
            </Head>
            {Tabs.map((tab, i) => (
                <HomeTab
                    key={`Home Tab ${i}`}
                    index={i}
                    display={tab}
                    ref={el => refs.current[i] = el}
                />
            ))}
        </Box>
    )
}