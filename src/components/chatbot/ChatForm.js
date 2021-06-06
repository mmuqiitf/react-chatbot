import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

// all available theme props
const theme = {
  background: "#f5f8fb",
  fontFamily: "Titillium Web",
  headerBgColor: "#1AAFB3",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#1AAFB3",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

// let question_list = [
// 	'How to make cheese cake oreo?',
// 	'What is the ingredients?',
// 	'What is the equipment?',
// 	'How to make it?',
// 	'Show me more information about it'
// ]

class Question extends Component {
  componentWillMount() {
    const { previousStep } = this.props;
    const { metadata = {} } = previousStep;
    let trigger = "q1";
    if (
      previousStep.value === "How to make cheese cake oreo?" ||
      previousStep.value === "How to make cheesecake oreo?"
    ) {
      trigger = "q1";
    } else if (previousStep.value === "What is the ingredients?") {
      trigger = "q2";
    } else if (
      previousStep.value === "What is the equipment?" ||
      previousStep.value === "What is the tools?"
    ) {
      trigger = "q3";
    } else if (
      previousStep.value === "How to make it?" ||
      previousStep.value === "Show me how to make it"
    ) {
      trigger = "q4";
    } else if (
      previousStep.value ===
        "Where can I find more information about how to make cheesecake oreo?" ||
      previousStep.value === "Show me more information about it"
    ) {
      trigger = "q5";
    } else {
      trigger = metadata.triggerNext;
    }
    this.props.triggerNextStep({ value: metadata.triggerNext, trigger });
  }

  render() {
    return null;
  }
}

class Question1 extends Component {
  componentDidMount() {
    const { previousStep } = this.props;
    this.props.triggerNextStep({ trigger: previousStep.id });
  }
  render() {
    return (
      <div>The first thing you need toknow is the ingredients itself.</div>
    );
  }
}

class Question2 extends Component {
  componentDidMount() {
    const { previousStep } = this.props;
    this.props.triggerNextStep({ trigger: previousStep.id });
  }
  render() {
    return (
      <div>
        The ingredients are oreo vanilla, grated cheese, dancow milk, powdered
        sugar, water and cornstarch.
      </div>
    );
  }
}

class Question3 extends Component {
  componentDidMount() {
    const { previousStep } = this.props;
    this.props.triggerNextStep({ trigger: previousStep.id });
  }
  render() {
    return <div>The equipment are pan, spoon and bowl.</div>;
  }
}

class Question4 extends Component {
  componentDidMount() {
    const { previousStep } = this.props;
    this.props.triggerNextStep({ trigger: previousStep.id });
  }
  render() {
    return (
      <div>
        The first, destroy oreo. The second setaside oreo in a pan. The third
        add water, cheese, flour and sugar in a pan. The fourth cook in small
        flames. The last step is input the cracks.
      </div>
    );
  }
}
class Question5 extends Component {
  componentDidMount() {
    const { previousStep } = this.props;
    this.props.triggerNextStep({ trigger: previousStep.id });
  }
  render() {
    return (
      <div>
        For more information you can check in{" "}
        <a
          href="https://cookpad.com/id/resep/3281629-cheesecake-lumer-oreo-simple-%F0%9F%98%8D"
          target="_blank"
        >
          here
        </a>
        .
      </div>
    );
  }
}

// all available config props
const config = {
  width: "500px",
  height: "550px",
  floating: true,
  placeholder: "Type your response.",
  headerTitle: "Cheesecake Oreo",
};
let steps = [
  {
    id: "welcome",
    message:
      "Hello! Welcome to Cheesecake Oreo Bot. You can ask a question about cheesecake oreo.",
    trigger: "q-intro",
  },

  {
    id: "q-intro",
    message: "What is your question?",
    trigger: "intro",
  },
  {
    id: "intro",
    user: true,
    trigger: "real-question",
    metadata: {
      triggerNext: "q-submit",
    },
  },
  {
    id: "real-question",
    replace: true,
    component: <Question />,
    delay: 3,
    waitAction: true,
  },
  {
    id: "q1",
    component: <Question1 />,
    asMessage: true,
    waitAction: true,
  },
  {
    id: "q2",
    component: <Question2 />,
    asMessage: true,
    waitAction: true,
  },
  {
    id: "q3",
    component: <Question3 />,
    asMessage: true,
    waitAction: true,
  },
  {
    id: "q4",
    component: <Question4 />,
    asMessage: true,
    waitAction: true,
  },
  {
    id: "q5",
    component: <Question5 />,
    asMessage: true,
    waitAction: true,
  },
  {
    id: "q-submit",
    message: `Sorry i do'nt understand. Do you wish to end this chat?`,
    trigger: "submit",
  },
  {
    id: "submit",
    options: [
      { value: "y", label: "Yes", trigger: "end-message" },
      { value: "n", label: "No", trigger: "no-submit" },
    ],
  },
  {
    id: "no-submit",
    message: "Reloading.",
    trigger: "resubmit",
  },
  {
    id: "resubmit",
    options: [
      { value: "reload", label: "Back to the question", trigger: "q-intro" },
    ],
  },
  {
    id: "end-message",
    message: "Chat ended.",
    end: true,
  },
];
class ChatForm extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} {...config} />
        </ThemeProvider>
      </div>
    );
  }
}

export default ChatForm;
