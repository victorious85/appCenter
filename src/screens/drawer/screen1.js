import React from 'react';
import {Text} from 'react-native';

import {styles} from '../../styles/styles.js';
import {Container} from './screen1.styled';

const Screen1 = () => (
  <Container>
    <Text style={styles.title}>Contacts</Text>
  </Container>
);

export default Screen1;
