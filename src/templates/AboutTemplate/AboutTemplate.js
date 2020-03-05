import React from 'react';
import { Link } from 'gatsby';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';

const AboutTemplate = () => {
  return (
    <div id="about">
      <Container>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>

        <p>Some paragraph</p>
        <Link to="/another-page">Another page</Link>
        <Button secondary>Button test</Button>
      </Container>
    </div>
  );
};

export default AboutTemplate;
