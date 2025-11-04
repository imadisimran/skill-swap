import React from 'react';
import Navbar from '../components/Navbar';

const HowItWorks = () => {
    return (
        <>
        <Navbar></Navbar>
        <p className='w-11/12 mx-auto mt-5'>A skill-swap website operates as a modern-day barter market, but instead of trading chickens for shoes, users exchange their talents and knowledge. The core principle is beautifully simple: you trade what you know for what you want to learn, cutting money entirely out of the equation. It all begins with the user profile, which is the heart of the service. New members sign up and create a detailed profile listing two key categories: "Skills to Offer" (like advanced Excel, professional photography, or baking sourdough) and "Skills to Learn" (such as conversational French, guitar basics, or digital marketing). This profile effectively becomes their digital storefront and their personal wish list. The platform's real work is in the matchmaking. Users can search the database for people offering a skill they desire, often filtering by location for in-person swaps or keeping it global for remote, online learning. The system's true magic, however, lies in trying to solve the classic "double coincidence of wants"—finding that specific person who offers the French lessons you want *and* happens to need the Excel tutoring you offer. Because these perfect 1-to-1 matches can be rare, many platforms simplify this by using a "credit" or "time-banking" system. You might teach one hour of photography to Person A, earning one "SkillCredit," which you can then "spend" on an hour of French from Person B, who in turn might use that credit to learn baking from Person C. Once a match is found or a credit exchange is initiated, users connect via an internal messaging system to hammer out the logistics—scheduling, setting goals, and deciding whether to meet on a video call or at a local library. After the swap is complete, a reputation system, usually involving reviews and ratings, kicks in to build trust, ensuring participants are both reliable and reasonably skilled, keeping the entire community functional and fair.</p>
        </>
    );
};

export default HowItWorks;