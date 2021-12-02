import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Chadwick Culver <a href="https://culver.services/">Portfolio</a> and{' '}
      <a href="https://github.com/Culver-Services?tab=repositories">Github</a> &middot;{' '}
      <a href="https://github.com/Culver-Services/new-main-portfolio">Source</a>
    </div>
  </Container>
)

export default Footer
