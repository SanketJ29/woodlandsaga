import React from 'react';
import {Link} from 'react-router-dom'
import welcomeimg from '../assets/trees-3822149_640 (2).jpg'

const Welcome = () => {
    return (
        <section class="text-gray-400 bg-gray-900 body-font min-h-screen">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img class="object-cover object-center rounded" alt="hero" src={welcomeimg}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-4xl mb-10 font-medium text-green-400">WOODLAND SAGA
        <br class="hidden lg:inline-block"/>
      </h1>
      <p class="mb-8 leading-relaxed font-mono text-green-400 text-2xl">Application of Image Analytics for Tree enumeration for diversion of Forest Land. Our project automates tree enumeration for forest land diversion through advanced image analytics. We use computer vision to detect and categorize trees in satellite and aerial images, ensuring accuracy and scalability. Our system integrates seamlessly, respecting ethical and environmental standards, empowering informed land development decisions.</p>
      <div class="flex justify-center">
       <Link to="/predict" ><button class="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-xl font-bold">PREDICT</button> </Link>
        <Link to="/explore"><button class="ml-4 inline-flex text-green-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-xl font-bold">EXPLORE</button></Link>
      </div>
    </div>
  </div>
</section>
    );
};

export default Welcome;
