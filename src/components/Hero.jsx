import React from "react";
import ShinyEffect from "./ShinyEffect";
import HeroBanner from "./HeroBanner";

const Hero = () => {
    return (
        <>
            <HeroBanner />
            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1200} />
            </div>
        </>
    );
};

export default Hero;
