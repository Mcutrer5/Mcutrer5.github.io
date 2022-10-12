import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImPlay, ImPlay2 } from "react-icons/im";
import Techstack from "./Techstack";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Check out <span className="purple">#h </span>
            off our newest <span className="purple"> #d</span>
            <br />Example text here. Example text here. Example text here. Example
            text here. Example text here. Example text here. Example text here.
            <br />
            <br />
            <span className="purple"> #NEWSONGTITLE </span> released on all streaming platforms now!
          </p>
          <br />
 
          <iframe className="about-video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I love femboys. There's just something about them, I always thought I was totally straight until I saw
            a pair of succulent femboy thighs. It's shocking that a guy could be so hot, like really. The first true femboy I saw was an
            Instagram personality by the name of 10kujo...
            He's so cute that I couldn't resist. My heterosexuality was stolen from me because I have an innate love for femininity,
            I wish femboys were more common. My life would be infinitely better if I could be with a powerbottom femboy. Anybody else get
            what I'm talking about??"{" "}
          </p>
          <footer className="blockquote-footer">me</footer>
          {/* <h1 className="body-title">#ALBUM</h1>

          <ul>
            <li className="about-activity">
              <ImPlay2 /> #SONG1
            </li>
            <li className="about-activity">
              <ImPlay2 /> #SONG2
            </li>
            <li className="about-activity">
              <ImPlay2 /> #SONG3
            </li>
            <li className="about-activity">
              <ImPlay2 /> #SONG4
            </li>
            <li className="about-activity">
              <ImPlay2 /> #SONG5
            </li>
            <li className="about-activity">
              <ImPlay2 /> #SONG6
            </li>
            <li className="about-activity">
              <ImPlay2 /> #SONG7
            </li>
          </ul> */}

        </blockquote>
        <br /><br />
      </Card.Body>
      <Techstack />
    </Card>
  );
}

export default AboutCard;
