import React from "react";
import { motion } from "framer-motion";

const Home = () => {
    return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="page">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm an AI Developer passionate about building intelligent applications.</p>
    </motion.div>
    );
};

export default Home;