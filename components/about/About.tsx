import React from "react";
type Props = {
  header: string;
  paragraph: string;
};
const About = (props: Props) => {
  const { header, paragraph } = props;
  return (
    <div className="about-text">
      <h1 className="about-header">{header}</h1>
      <p className="about-p">{paragraph}</p>
    </div>
  );
};

export default About;
