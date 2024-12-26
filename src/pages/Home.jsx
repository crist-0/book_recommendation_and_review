import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero"
import Features from "../components/Features";
import Footer from "../components/Footer";
const Home = () => {
    return <div>
        <div className="bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a]">
        <Header></Header>
        <Hero></Hero>
        <Features />
        <Footer />
        </div>
        <div className="bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a]">hdh</div>
    </div>
}

export default Home;