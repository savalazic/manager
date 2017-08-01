import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label='Email'
            placeholder='email@gmail.com'
          />  
        </CardSection>
        <CardSection>
          <Input 
            secureTextEntry
            label='Password'
            placeholder='*********'
          />
        </CardSection>
        <CardSection>
          <Button>
            <Text>Login</Text>
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
