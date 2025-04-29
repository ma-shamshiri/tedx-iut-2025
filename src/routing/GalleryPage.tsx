import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MyNavbar from "../components/MyNavbar";
import FooterSection from "../components/FooterSection";
import InfiniteCarousel from "../components/InfiniteCarousel";

const GalleryPage: React.FC = () => {

    const [boxLoaded, setBoxLoaded] = useState(false);

    const handleBoxLoad = () => {
        setBoxLoaded(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onAnimationComplete={handleBoxLoad}
            >
                <MyNavbar />
                <InfiniteCarousel />
            </motion.div>
        </>
    );
};
export default GalleryPage;
