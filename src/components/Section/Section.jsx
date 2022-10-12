import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css'
import Container from '../Container/Container';

const Section = ({children, title}) => {
  return (
    <div className={s.container}>
      <Container styles={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{
          alignSelf: 'stretch',
          marginBottom: 20,
        }}>{title}</h2>
        {children}
      </Container>
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};


export default Section;