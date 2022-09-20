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
            Check out <span className="purple">#NEWSONGTITLE </span>
            off our newest album <span className="purple"> #ALBUMNAMEHERE</span>
            <br />Example text here. Example text here. Example text here. Example
            text here. Example text here. Example text here. Example text here.
            <br />
            <br />
            <span className="purple"> #NEWSONGTITLE </span> released on all streaming platforms now!
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Meow meow mew meow meow meow"{" "}
          </p>
          <footer className="blockquote-footer">#QUOTE</footer>
          <br />
 
          <iframe className="about-video" src="https://www.youtube.com/embed/AuNd7BJ8IXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h1 className="body-title">#ALBUM</h1>

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
          </ul>

        </blockquote>
        <br /><br />
      </Card.Body>
      <Techstack />
    </Card>
  );
}

export default AboutCard;
