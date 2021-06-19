// Step 1: Import your component
import * as React from "react";
import Layout from "../components/layout";
import Video from '../components/video'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About page">
      <p>Hi i'm from about page so far so.</p>
      <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
