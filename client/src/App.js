import React from "react";
import {
  Grommet,
  Box,
  Text,
  Form,
  FormField,
  TextInput,
  Select,
  Calendar,
  Button,
  Heading,
  Anchor,
  Image
} from "grommet";
import { Book, Hpe } from "grommet-icons";
import axios from "axios";

const theme = {
  name: "HPE 1",
  rounding: 4,
  spacing: 24,
  defaultMode: "dark",
  global: {
    colors: {
      brand: "green!",
      background: {
        dark: "#1A1F2B",
        light: "#FFFFFF"
      },
      "background-back": {
        dark: "#1A1F2B",
        light: "#EFEFEF"
      },
      "background-front": {
        dark: "#222938",
        light: "#FFFFFF"
      },
      "background-contrast": {
        dark: "#FFFFFF08",
        light: "#11111108"
      },
      text: {
        dark: "#EEEEEE",
        light: "#333333"
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "#000000"
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "#444444"
      },
      "text-xweak": {
        dark: "#999999",
        light: "#666666"
      },
      border: {
        light: "#CCCCCC",
        dark: "#444444"
      },
      control: "brand",
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      blue: {
        dark: "#0E5265",
        light: "#00C8FF"
      },
      "blue!": "#00739D",
      green: {
        dark: "#007A5E",
        light: "#6FFFB0"
      },
      "green!": "#00C781",
      teal: {
        dark: "#007366",
        light: "#82FFF2"
      },
      "teal!": "#00E8CF",
      purple: {
        dark: "#371177",
        light: "#F740FF"
      },
      "purple!": "#7630EA",
      red: {
        dark: "#4B1916",
        light: "#FF4F4F"
      },
      "red!": "#ff0000",
      orange: {
        dark: "#CC4B00",
        light: "#FFB024"
      },
      "orange!": "#FF8300",
      yellow: {
        dark: "#D78F00",
        light: "#FFEB59"
      },
      "yellow!": "#FEC901",
      "graph-0": "orange",
      "graph-1": "blue",
      "graph-2": "purple"
    },
    font: {
      family: "'Metric'",
      face:
        '@font-face {\n  font-family: "Metric";\n  src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff") format(\'woff\');\n}\n\n@font-face {\n  font-family: "Metric";\n  src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Bold.woff") format(\'woff\');\n  font-weight: 700;\n}\n\n@font-face {\n  font-family: "Metric";\n  src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Semibold.woff") format(\'woff\');\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: "Metric";\n  src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff") format(\'woff\');\n  font-weight: 100;\n}',
      size: "18px",
      height: "24px",
      maxWidth: "432px"
    },
    active: {
      background: "active-background",
      color: "active-text"
    },
    hover: {
      background: "active-background",
      color: "active-text"
    },
    selected: {
      background: "selected-background",
      color: "selected-text"
    },
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: "4px",
      large: "12px",
      xlarge: "24px"
    },
    breakpoints: {
      small: {
        value: 768,
        borderSize: {
          xsmall: "1px",
          small: "2px",
          medium: "4px",
          large: "6px",
          xlarge: "12px"
        },
        edgeSize: {
          none: "0px",
          hair: "1px",
          xxsmall: "2px",
          xsmall: "3px",
          small: "6px",
          medium: "12px",
          large: "24px",
          xlarge: "48px"
        },
        size: {
          xxsmall: "24px",
          xsmall: "48px",
          small: "96px",
          medium: "192px",
          large: "384px",
          xlarge: "768px",
          full: "100%"
        }
      },
      medium: {
        value: 1536
      },
      large: {}
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "3px",
      xsmall: "6px",
      small: "12px",
      medium: "24px",
      large: "48px",
      xlarge: "96px",
      responsiveBreakpoint: "small"
    },
    input: {
      padding: "12px",
      weight: 600
    },
    spacing: "24px",
    size: {
      xxsmall: "48px",
      xsmall: "96px",
      small: "192px",
      medium: "384px",
      large: "768px",
      xlarge: "1152px",
      xxlarge: "1536px",
      full: "100%"
    },
    control: {
      border: {
        radius: "4px"
      }
    },
    drop: {
      border: {
        radius: "4px"
      }
    }
  },
  chart: {},
  diagram: {
    line: {}
  },
  meter: {},
  layer: {
    background: {
      dark: "#111111",
      light: "#FFFFFF"
    }
  },
  heading: {
    level: {
      "1": {
        small: {
          size: "36px",
          height: "42px",
          maxWidth: "854px"
        },
        medium: {
          size: "53px",
          height: "59px",
          maxWidth: "1277px"
        },
        large: {
          size: "88px",
          height: "94px",
          maxWidth: "2122px"
        },
        xlarge: {
          size: "124px",
          height: "130px",
          maxWidth: "2966px"
        }
      },
      "2": {
        small: {
          size: "31px",
          height: "37px",
          maxWidth: "749px"
        },
        medium: {
          size: "44px",
          height: "50px",
          maxWidth: "1066px"
        },
        large: {
          size: "58px",
          height: "64px",
          maxWidth: "1382px"
        },
        xlarge: {
          size: "71px",
          height: "77px",
          maxWidth: "1699px"
        }
      },
      "3": {
        small: {
          size: "27px",
          height: "33px",
          maxWidth: "643px"
        },
        medium: {
          size: "36px",
          height: "42px",
          maxWidth: "854px"
        },
        large: {
          size: "44px",
          height: "50px",
          maxWidth: "1066px"
        },
        xlarge: {
          size: "53px",
          height: "59px",
          maxWidth: "1277px"
        }
      },
      "4": {
        small: {
          size: "22px",
          height: "28px",
          maxWidth: "538px"
        },
        medium: {
          size: "27px",
          height: "33px",
          maxWidth: "643px"
        },
        large: {
          size: "31px",
          height: "37px",
          maxWidth: "749px"
        },
        xlarge: {
          size: "36px",
          height: "42px",
          maxWidth: "854px"
        }
      },
      "5": {
        small: {
          size: "16px",
          height: "22px",
          maxWidth: "379px"
        },
        medium: {
          size: "16px",
          height: "22px",
          maxWidth: "379px"
        },
        large: {
          size: "16px",
          height: "22px",
          maxWidth: "379px"
        },
        xlarge: {
          size: "16px",
          height: "22px",
          maxWidth: "379px"
        }
      },
      "6": {
        small: {
          size: "14px",
          height: "20px",
          maxWidth: "326px"
        },
        medium: {
          size: "14px",
          height: "20px",
          maxWidth: "326px"
        },
        large: {
          size: "14px",
          height: "20px",
          maxWidth: "326px"
        },
        xlarge: {
          size: "14px",
          height: "20px",
          maxWidth: "326px"
        }
      }
    }
  },
  email: "eric.soderberg@hpe.com",
  date: "2020-03-25T04:15:31.000Z",
  scale: 1.1,
  button: {
    border: {
      width: "2px",
      radius: "4px"
    },
    padding: {
      vertical: "4px",
      horizontal: "22px"
    }
  },
  calendar: {
    small: {
      fontSize: "13.6px",
      lineHeight: 1.375,
      daySize: "27.43px"
    },
    medium: {
      fontSize: "18px",
      lineHeight: 1.45,
      daySize: "54.86px"
    },
    large: {
      fontSize: "31.200000000000003px",
      lineHeight: 1.11,
      daySize: "109.71px"
    }
  },
  checkBox: {
    size: "24px",
    toggle: {
      radius: "4px",
      size: "48px"
    },
    check: {
      radius: "4px"
    }
  },
  clock: {
    analog: {
      hour: {
        width: "8px",
        size: "24px"
      },
      minute: {
        width: "4px",
        size: "12px"
      },
      second: {
        width: "3px",
        size: "9px"
      },
      size: {
        small: "72px",
        medium: "96px",
        large: "144px",
        xlarge: "216px",
        huge: "288px"
      }
    },
    digital: {
      text: {
        xsmall: {
          size: "9.2px",
          height: 1.5
        },
        small: {
          size: "13.6px",
          height: 1.43
        },
        medium: {
          size: "18px",
          height: 1.375
        },
        large: {
          size: "22.4px",
          height: 1.167
        },
        xlarge: {
          size: "26.8px",
          height: 1.1875
        },
        xxlarge: {
          size: "35.6px",
          height: 1.125
        }
      }
    }
  },
  paragraph: {
    small: {
      size: "16px",
      height: "22px",
      maxWidth: "379px"
    },
    medium: {
      size: "18px",
      height: "24px",
      maxWidth: "432px"
    },
    large: {
      size: "22px",
      height: "28px",
      maxWidth: "538px"
    },
    xlarge: {
      size: "27px",
      height: "33px",
      maxWidth: "643px"
    },
    xxlarge: {
      size: "36px",
      height: "42px",
      maxWidth: "854px"
    }
  },
  radioButton: {
    size: "24px",
    check: {
      radius: "4px"
    }
  },
  text: {
    xsmall: {
      size: "14px",
      height: "20px",
      maxWidth: "326px"
    },
    small: {
      size: "16px",
      height: "22px",
      maxWidth: "379px"
    },
    medium: {
      size: "18px",
      height: "24px",
      maxWidth: "432px"
    },
    large: {
      size: "22px",
      height: "28px",
      maxWidth: "538px"
    },
    xlarge: {
      size: "27px",
      height: "33px",
      maxWidth: "643px"
    },
    xxlarge: {
      size: "36px",
      height: "42px",
      maxWidth: "854px"
    }
  },
  formField: {
    border: {
      color: "border",
      error: {
        color: {
          dark: "white",
          light: "status-critical"
        }
      },
      position: "inner",
      side: "all"
    },
    content: {
      pad: "small"
    },
    error: {
      color: "status-critical",
      margin: {
        vertical: "xsmall",
        horizontal: "small"
      },
      background: {
        color: "status-critical",
        opacity: "weak"
      }
    },
    help: {
      color: "text-xweak",
      margin: {
        start: "small"
      }
    },
    label: {
      margin: {
        vertical: "xsmall",
        horizontal: "small"
      }
    },
    margin: {
      bottom: "small"
    },
    round: "4px",
    disabled: {
      background: {
        color: "status-disabled",
        opacity: "medium"
      }
    }
  }
};

class App extends React.Component {
  state = {
    name: null,
    email: null,
    company: null,
    bookingPeriod: null,
    bookingPeriodDisable: null,
    notebookList: null,
    nameErr: null,
    emailErr: null,
    companyErr: null,
    notebookErr: null,
    bookingErr: null
  };

  componentDidMount() {
    var today = new Date(),
      todaysDate =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        (today.getDate() - 1);

    const bookingPeriodDisable = [];
    const startdate = ["2000-01-01"];
    startdate.push(todaysDate);
    bookingPeriodDisable.push(startdate);
    this.setState({ bookingPeriodDisable });
  }

  captureName = event => {
    this.setState({ name: event.target.value });
  };
  captureEmail = event => {
    this.setState({ email: event.target.value });
  };
  captureCompany = event => {
    this.setState({ company: event.target.value });
  };
  captureNotebook = event => {
    this.setState({ notebookList: event.value.toString() });
  };
  captureBookingPeriod = event => {
    this.setState({ bookingPeriod: event });
  };

  handleValidation = () => {
    let formIsValid = true;

    //Name - only letters
    if (typeof this.state.name !== "undefined") {
      if (!this.state.name.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        this.setState({ nameErr: "Only letters" });
      } else {
        this.setState({ nameErr: "" });
      }
    }

    //Company - only letters and spaces
    if (typeof this.state.company !== "undefined") {
      if (!this.state.company.match(/^[a-zA-Z\s]+$/)) {
        formIsValid = false;
        this.setState({ companyErr: "Only letters and space" });
      } else {
        this.setState({ companyErr: "" });
      }
    }

    //Email
    if (typeof this.state.email !== "undefined") {
      const email = this.state.email;
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        this.setState({ emailErr: "Email is not valid" });
      } else {
        this.setState({ emailErr: "" });
      }
    }

    //Notebooks List - required
    if (typeof this.state.notebookList !== "undefined") {
      if (this.state.notebookList === null || this.state.notebookList === "") {
        formIsValid = false;
        this.setState({ notebookErr: "Please fill out this field" });
      } else {
        this.setState({ notebookErr: "" });
      }
    }

    //Booking Period - required
    if (typeof this.state.bookingPeriod !== "undefined") {
      if (
        this.state.bookingPeriod === null ||
        this.state.bookingPeriod === ""
      ) {
        formIsValid = false;
        this.setState({ bookingErr: "Please select booking period" });
      } else {
        this.setState({ bookingErr: "" });
      }
    }

    return formIsValid;
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.handleValidation()) {
      axios({
        method: "POST",
        url: "http://localhost:3002/send",
        data: this.state
      }).then(response => {
        if (response.data.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.data.status === "fail") {
          alert("Message failed to send.");
        }
      });
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  };
  resetForm() {
    this.setState({
      name: "",
      email: "",
      company: "",
      bookingPeriod: "",
      notebookList: "",
      nameErr: "",
      emailErr: "",
      companyErr: "",
      notebookErr: ""
    });
  }

  render() {
    return (
      <Grommet theme={theme}>
        <Box
          fill="vertical"
          overflow="auto"
          align="center"
          flex={true}
          direction="column"
          justify="start"
        >
          <Box
            align="center"
            justify="center"
            direction="row-responsive"
            pad="small"
            fill="horizontal"
            gap="medium"
            flex={false}
          >
            <Hpe color="brand" size="large" />
            <Box align="end" justify="center" direction="column">
              <Text size="xlarge" weight="bold">
                Hack Shack Workshops On Demand
              </Text>
              <Text weight="bold">powered by HPEDEV</Text>
            </Box>
          </Box>
          <Box
            align="center"
            justify="between"
            direction="row-responsive"
            background={{ color: "background-front" }}
            wrap={false}
            overflow="auto"
            fill="horizontal"
            flex="grow"
            pad="large"
          >
            <Box
              align="stretch"
              justify="start"
              fill={true}
              direction="column"
              pad="xsmall"
              flex={true}
            >
              <Form onSubmit={this.handleSubmit}>
                <FormField label="Name" error={this.state.nameErr}>
                  <TextInput
                    size="large"
                    type="text"
                    required={true}
                    placeholder="enter your name"
                    value={this.state.name}
                    onChange={this.captureName}
                  />
                </FormField>
                <FormField label="Company" error={this.state.companyErr}>
                  <TextInput
                    type="text"
                    required={true}
                    placeholder="enter your company name"
                    value={this.state.company}
                    onChange={this.captureCompany}
                  />
                </FormField>
                <FormField label="Email" error={this.state.emailErr}>
                  <TextInput
                    type="text"
                    required={true}
                    placeholder="enter your company email"
                    value={this.state.email}
                    onChange={this.captureEmail}
                  />
                </FormField>
                <FormField label="Workshops" error={this.state.notebookErr}>
                  <Select
                    options={["Grommet", "Nimble", "Simplivity", "RedFish"]}
                    required={true}
                    placeholder="select a workshop(s)"
                    icon={<Book />}
                    closeOnChange={false}
                    multiple={true}
                    onChange={this.captureNotebook}
                    messages={{ multiple: this.state.notebookList }}
                  />
                </FormField>
                <FormField label="Booking period" error={this.state.bookingErr}>
                  <Calendar
                    daysOfWeek={true}
                    range={true}
                    size="small"
                    required={true}
                    disabled={this.state.bookingPeriodDisable}
                    animate={false}
                    value={this.state.bookingPeriod}
                    onSelect={this.captureBookingPeriod}
                  />
                </FormField>
                <Box
                  align="start"
                  justify="center"
                  direction="row-responsive"
                  gap="medium"
                  pad="small"
                >
                  <Button
                    label="Submit"
                    type="submit"
                    hoverIndicator={true}
                    primary={true}
                    reverse={false}
                    active={false}
                  />
                </Box>
              </Form>
            </Box>
            <Box
              align="center"
              justify="center"
              direction="column"
              fill={true}
              flex={true}
              round="medium"
            >
              <Image src="/img/gremlin-rockin.svg" />
            </Box>
          </Box>
          <Box
            align="stretch"
            justify="center"
            direction="column"
            alignSelf="center"
            wrap={false}
            flex={false}
          >
            <Box
              align="center"
              justify="center"
              direction="row"
              wrap={false}
              flex={true}
              fill="horizontal"
              pad="medium"
            >
              <Box
                align="center"
                justify="center"
                direction="column"
                wrap={true}
                flex={true}
                basis="1/3"
              >
                <Text>Stay in the loop</Text>
                <Heading
                  level="4"
                  textAlign="center"
                  size="small"
                  truncate={false}
                >
                  Sign up for the HPE Developer Newsletter
                </Heading>
                <Anchor
                  href="https://developer.hpe.com/newsletter-signup"
                  target="_blank"
                >
                   
                  <Button label="Subscribe Now" primary={true} />
                </Anchor>
              </Box>
              <Box
                align="center"
                justify="center"
                direction="column"
                overflow="auto"
                flex={true}
                basis="1/3"
              >
                <Text>Build with us</Text>
                <Heading
                  level="4"
                  size="small"
                  textAlign="center"
                  truncate={false}
                  margin="medium"
                >
                  Contribute to the HPE Developer blog
                </Heading>
                <Anchor href="https://developer.hpe.com/signup" target="_blank">
                   
                  <Button label="Contribute" primary={true} />
                </Anchor>
              </Box>
              <Box
                align="center"
                justify="center"
                direction="column"
                overflow="auto"
                flex={true}
                basis="1/3"
              >
                <Text>Connect and code</Text>
                <Heading
                  level="4"
                  size="small"
                  textAlign="center"
                  truncate={false}
                  margin="medium"
                >
                  Join the HPE Developer Slack Community
                </Heading>
                <Anchor href="https://slack.hpedev.io/" target="_blank">
                   
                  <Button label="Join Now" primary={true} />
                </Anchor>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}
export default App;
