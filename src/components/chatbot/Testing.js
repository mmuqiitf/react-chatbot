import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

class Help extends Component {
  componentWillMount() {
    const { previousStep } = this.props;
    const { metadata = {} } = previousStep;
    const trigger = previousStep.value === 'help' ? 'help-message' : metadata.triggerNext;


    this.props.triggerNextStep({ value: metadata.triggerNext, trigger });
  }

  render() {
    return null;
  }
}

class HelpMessage extends Component {
  componentDidMount() {
    const { previousStep } = this.props;
    this.props.triggerNextStep({ trigger: previousStep.id });
  }
  render() {
    return (
      <div>
        Help Message
      </div>
    );
  }
}

const steps = [
  {
    id: '1',
    message: 'Some Question. Type "help" if you need help',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: 'help',
    metadata: {
      triggerNext: '3',
    },
  },
  {
    id: 'help',
    replace: true,
    component: <Help />,
    delay: 8,
    waitAction: true,
  },
  {
    id: 'help-message',
    component: <HelpMessage />,
    asMessage: true,
    waitAction: true,
  },
  {
    id: '3',
    message: 'End',
    end: true,
  },
];

const Testing = () => (
   <ChatBot steps={steps} />
);

export default Testing