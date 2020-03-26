import React, { Children } from 'react'
  import { Grommet, Box, Layer, Text, Form, FormField, TextInput, Select, Calendar, Button, Heading } from 'grommet'
  import { Book, Hpe, Validate, StatusCritical } from 'grommet-icons'
  
const RouterContext = React.createContext({})

const Router = ({ children }) => {
  const [path, setPath] = React.useState("/register")

  React.useEffect(() => {
    const onPopState = () => setPath(document.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const push = nextPath => {
    if (nextPath !== path) {
      window.history.pushState(undefined, undefined, nextPath)
      setPath(nextPath)
      window.scrollTo(0, 0)
    }
  }

  return (
    <RouterContext.Provider value={{ path, push }}>
      {children}
    </RouterContext.Provider>
  )
}

const Routes = ({ children }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  let found
  Children.forEach(children, child => {
    if (!found && contextPath === child.props.path) found = child
  })
  return found
}

const Route = ({ Component, path }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  return contextPath === path ? <Component /> : null
}

  const theme = {
  "name": "HPE 1",
  "rounding": 4,
  "spacing": 24,
  "defaultMode": "dark",
  "global": {
    "colors": {
      "brand": "green!",
      "background": {
        "dark": "#1A1F2B",
        "light": "#FFFFFF"
      },
      "background-back": {
        "dark": "#1A1F2B",
        "light": "#EFEFEF"
      },
      "background-front": {
        "dark": "#222938",
        "light": "#FFFFFF"
      },
      "background-contrast": {
        "dark": "#FFFFFF08",
        "light": "#11111108"
      },
      "text": {
        "dark": "#EEEEEE",
        "light": "#333333"
      },
      "text-strong": {
        "dark": "#FFFFFF",
        "light": "#000000"
      },
      "text-weak": {
        "dark": "#CCCCCC",
        "light": "#444444"
      },
      "text-xweak": {
        "dark": "#999999",
        "light": "#666666"
      },
      "border": {
        "light": "#CCCCCC",
        "dark": "#444444"
      },
      "control": "brand",
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      "blue": {
        "dark": "#0E5265",
        "light": "#00C8FF"
      },
      "blue!": "#00739D",
      "green": {
        "dark": "#007A5E",
        "light": "#6FFFB0"
      },
      "green!": "#00C781",
      "teal": {
        "dark": "#007366",
        "light": "#82FFF2"
      },
      "teal!": "#00E8CF",
      "purple": {
        "dark": "#371177",
        "light": "#F740FF"
      },
      "purple!": "#7630EA",
      "red": {
        "dark": "#4B1916",
        "light": "#FF4F4F"
      },
      "red!": "#ff0000",
      "orange": {
        "dark": "#CC4B00",
        "light": "#FFB024"
      },
      "orange!": "#FF8300",
      "yellow": {
        "dark": "#D78F00",
        "light": "#FFEB59"
      },
      "yellow!": "#FEC901",
      "graph-0": "orange",
      "graph-1": "blue",
      "graph-2": "purple"
    },
    "font": {
      "family": "'Metric'",
      "face": "@font-face {\n  font-family: \"Metric\";\n  src: url(\"https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff\") format('woff');\n}\n\n@font-face {\n  font-family: \"Metric\";\n  src: url(\"https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Bold.woff\") format('woff');\n  font-weight: 700;\n}\n\n@font-face {\n  font-family: \"Metric\";\n  src: url(\"https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Semibold.woff\") format('woff');\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: \"Metric\";\n  src: url(\"https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff\") format('woff');\n  font-weight: 100;\n}",
      "size": "18px",
      "height": "24px",
      "maxWidth": "432px"
    },
    "active": {
      "background": "active-background",
      "color": "active-text"
    },
    "hover": {
      "background": "active-background",
      "color": "active-text"
    },
    "selected": {
      "background": "selected-background",
      "color": "selected-text"
    },
    "borderSize": {
      "xsmall": "1px",
      "small": "2px",
      "medium": "4px",
      "large": "12px",
      "xlarge": "24px"
    },
    "breakpoints": {
      "small": {
        "value": 768,
        "borderSize": {
          "xsmall": "1px",
          "small": "2px",
          "medium": "4px",
          "large": "6px",
          "xlarge": "12px"
        },
        "edgeSize": {
          "none": "0px",
          "hair": "1px",
          "xxsmall": "2px",
          "xsmall": "3px",
          "small": "6px",
          "medium": "12px",
          "large": "24px",
          "xlarge": "48px"
        },
        "size": {
          "xxsmall": "24px",
          "xsmall": "48px",
          "small": "96px",
          "medium": "192px",
          "large": "384px",
          "xlarge": "768px",
          "full": "100%"
        }
      },
      "medium": {
        "value": 1536
      },
      "large": {}
    },
    "edgeSize": {
      "none": "0px",
      "hair": "1px",
      "xxsmall": "3px",
      "xsmall": "6px",
      "small": "12px",
      "medium": "24px",
      "large": "48px",
      "xlarge": "96px",
      "responsiveBreakpoint": "small"
    },
    "input": {
      "padding": "12px",
      "weight": 600
    },
    "spacing": "24px",
    "size": {
      "xxsmall": "48px",
      "xsmall": "96px",
      "small": "192px",
      "medium": "384px",
      "large": "768px",
      "xlarge": "1152px",
      "xxlarge": "1536px",
      "full": "100%"
    },
    "control": {
      "border": {
        "radius": "4px"
      }
    },
    "drop": {
      "border": {
        "radius": "4px"
      }
    }
  },
  "chart": {},
  "diagram": {
    "line": {}
  },
  "meter": {},
  "layer": {
    "background": {
      "dark": "#111111",
      "light": "#FFFFFF"
    }
  },
  "heading": {
    "level": {
      "1": {
        "small": {
          "size": "36px",
          "height": "42px",
          "maxWidth": "854px"
        },
        "medium": {
          "size": "53px",
          "height": "59px",
          "maxWidth": "1277px"
        },
        "large": {
          "size": "88px",
          "height": "94px",
          "maxWidth": "2122px"
        },
        "xlarge": {
          "size": "124px",
          "height": "130px",
          "maxWidth": "2966px"
        }
      },
      "2": {
        "small": {
          "size": "31px",
          "height": "37px",
          "maxWidth": "749px"
        },
        "medium": {
          "size": "44px",
          "height": "50px",
          "maxWidth": "1066px"
        },
        "large": {
          "size": "58px",
          "height": "64px",
          "maxWidth": "1382px"
        },
        "xlarge": {
          "size": "71px",
          "height": "77px",
          "maxWidth": "1699px"
        }
      },
      "3": {
        "small": {
          "size": "27px",
          "height": "33px",
          "maxWidth": "643px"
        },
        "medium": {
          "size": "36px",
          "height": "42px",
          "maxWidth": "854px"
        },
        "large": {
          "size": "44px",
          "height": "50px",
          "maxWidth": "1066px"
        },
        "xlarge": {
          "size": "53px",
          "height": "59px",
          "maxWidth": "1277px"
        }
      },
      "4": {
        "small": {
          "size": "22px",
          "height": "28px",
          "maxWidth": "538px"
        },
        "medium": {
          "size": "27px",
          "height": "33px",
          "maxWidth": "643px"
        },
        "large": {
          "size": "31px",
          "height": "37px",
          "maxWidth": "749px"
        },
        "xlarge": {
          "size": "36px",
          "height": "42px",
          "maxWidth": "854px"
        }
      },
      "5": {
        "small": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "379px"
        },
        "medium": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "379px"
        },
        "large": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "379px"
        },
        "xlarge": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "379px"
        }
      },
      "6": {
        "small": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "326px"
        },
        "medium": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "326px"
        },
        "large": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "326px"
        },
        "xlarge": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "326px"
        }
      }
    }
  },
  "email": "eric.soderberg@hpe.com",
  "date": "2020-03-25T04:15:31.000Z",
  "scale": 1.1,
  "button": {
    "border": {
      "width": "2px",
      "radius": "4px"
    },
    "padding": {
      "vertical": "4px",
      "horizontal": "22px"
    }
  },
  "calendar": {
    "small": {
      "fontSize": "13.6px",
      "lineHeight": 1.375,
      "daySize": "27.43px"
    },
    "medium": {
      "fontSize": "18px",
      "lineHeight": 1.45,
      "daySize": "54.86px"
    },
    "large": {
      "fontSize": "31.200000000000003px",
      "lineHeight": 1.11,
      "daySize": "109.71px"
    }
  },
  "checkBox": {
    "size": "24px",
    "toggle": {
      "radius": "4px",
      "size": "48px"
    },
    "check": {
      "radius": "4px"
    }
  },
  "clock": {
    "analog": {
      "hour": {
        "width": "8px",
        "size": "24px"
      },
      "minute": {
        "width": "4px",
        "size": "12px"
      },
      "second": {
        "width": "3px",
        "size": "9px"
      },
      "size": {
        "small": "72px",
        "medium": "96px",
        "large": "144px",
        "xlarge": "216px",
        "huge": "288px"
      }
    },
    "digital": {
      "text": {
        "xsmall": {
          "size": "9.2px",
          "height": 1.5
        },
        "small": {
          "size": "13.6px",
          "height": 1.43
        },
        "medium": {
          "size": "18px",
          "height": 1.375
        },
        "large": {
          "size": "22.4px",
          "height": 1.167
        },
        "xlarge": {
          "size": "26.8px",
          "height": 1.1875
        },
        "xxlarge": {
          "size": "35.6px",
          "height": 1.125
        }
      }
    }
  },
  "paragraph": {
    "small": {
      "size": "16px",
      "height": "22px",
      "maxWidth": "379px"
    },
    "medium": {
      "size": "18px",
      "height": "24px",
      "maxWidth": "432px"
    },
    "large": {
      "size": "22px",
      "height": "28px",
      "maxWidth": "538px"
    },
    "xlarge": {
      "size": "27px",
      "height": "33px",
      "maxWidth": "643px"
    },
    "xxlarge": {
      "size": "36px",
      "height": "42px",
      "maxWidth": "854px"
    }
  },
  "radioButton": {
    "size": "24px",
    "check": {
      "radius": "4px"
    }
  },
  "text": {
    "xsmall": {
      "size": "14px",
      "height": "20px",
      "maxWidth": "326px"
    },
    "small": {
      "size": "16px",
      "height": "22px",
      "maxWidth": "379px"
    },
    "medium": {
      "size": "18px",
      "height": "24px",
      "maxWidth": "432px"
    },
    "large": {
      "size": "22px",
      "height": "28px",
      "maxWidth": "538px"
    },
    "xlarge": {
      "size": "27px",
      "height": "33px",
      "maxWidth": "643px"
    },
    "xxlarge": {
      "size": "36px",
      "height": "42px",
      "maxWidth": "854px"
    }
  },
  "formField": {
    "border": {
      "color": "border",
      "error": {
        "color": {
          "dark": "white",
          "light": "status-critical"
        }
      },
      "position": "inner",
      "side": "all"
    },
    "content": {
      "pad": "small"
    },
    "error": {
      "color": "status-critical",
      "margin": {
        "vertical": "xsmall",
        "horizontal": "small"
      },
      "background": {
        "color": "status-critical",
        "opacity": "weak"
      }
    },
    "help": {
      "color": "text-xweak",
      "margin": {
        "start": "small"
      }
    },
    "label": {
      "margin": {
        "vertical": "xsmall",
        "horizontal": "small"
      }
    },
    "margin": {
      "bottom": "small"
    },
    "round": "4px",
    "disabled": {
      "background": {
        "color": "status-disabled",
        "opacity": "medium"
      }
    }
  }
}
  const Register1 = () => {
    const { push } = React.useContext(RouterContext)
  const [layer, setLayer] = React.useState()
    return (
      <Box align="stretch" justify="start" direction="row" background={{"image":"url('')"}} fill={true}>
      <Layer animate={true} modal={false} plain={true} position="center" responsive={true}>
        <Box align="stretch" justify="start" direction="column" background={{"color":"background-front"}} fill="vertical" wrap={false} gap="xlarge" overflow="auto">
          <Box align="stretch" justify="start" background={{"image":"url('')"}} direction="row-responsive" gap="small">
            <Box align="center" justify="center" background={{"image":"url('https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/5a/0a/97/5a0a972d-da49-e06f-e715-dbea53daf491/AppIcon-1x_U007emarketing-85-220-0-6.png/246x0w.png')"}} pad="medium" />
            <Text size="xxlarge" weight="bold" margin={{"top":"xsmall"}} textAlign="center">
              Register For Notebooks
            </Text>
          </Box>
          <Box align="stretch" justify="center" fill="horizontal" direction="column" flex={true}>
            <Form>
              <FormField label="Name">
                <TextInput size="large" type="text" value="Pramod Sareddy" />
              </FormField>
              <FormField label="Company">
                <TextInput type="text" value="HPE" />
              </FormField>
              <FormField label="Email">
                <TextInput type="text" value="pramod-reddy.sareddy@hpe.com" />
              </FormField>
              <FormField label="Notebook">
                <Select options={["Grommet","Nimble","Simplivity","RedFish"]} placeholder="select a notebook" icon={<Book />} closeOnChange={false} multiple={true} />
              </FormField>
              <FormField label="Duration">
                <Calendar daysOfWeek={true} range={true} size="small" animate={false} />
              </FormField>
            </Form>
            <Button label="Submit" hoverIndicator={true} primary={true} />
          </Box>
        </Box>
      </Layer>
    </Box>
    )
  }

const Register = () => {
    const { push } = React.useContext(RouterContext)
  
    return (
      <Box fill="vertical" overflow="auto" align="center" flex={true}>
      <Box align="center" justify="center" direction="row-responsive" pad="small" fill="horizontal" gap="medium">
        <Hpe color="brand" size="large" />
        <Text size="xlarge" weight="bold">
          HPE Jupyter Notebook On Demand
        </Text>
      </Box>
      <Box align="start" justify="start" direction="column" background={{"color":"background-front"}} wrap={false} overflow="auto" fill={true} pad={{"top":"medium","bottom":"small","left":"xlarge","right":"xlarge"}}>
        <Box align="stretch" justify="start" fill="horizontal" direction="column" flex={true} pad="xsmall">
          <Form>
            <FormField label="Name">
              <TextInput size="large" type="text" value="Pramod Sareddy" />
            </FormField>
            <FormField label="Company">
              <TextInput type="text" value="HPE" />
            </FormField>
            <FormField label="Email">
              <TextInput type="text" value="pramod-reddy.sareddy@hpe.com" />
            </FormField>
            <FormField label="Notebook">
              <Select options={["Grommet","Nimble","Simplivity","RedFish"]} placeholder="select a notebook" icon={<Book />} closeOnChange={false} multiple={true} />
            </FormField>
            <FormField label="Duration">
              <Calendar daysOfWeek={true} range={true} size="small" animate={false} />
            </FormField>
            <Box align="center" justify="center" direction="row" gap="medium">
              <Button label="Submit" hoverIndicator={true} primary={true} reverse={false} active={false} onClick={() => push("/success")} />
            </Box>
          </Form>
        </Box>
      </Box>
    </Box>
    )
  }

const Success = () => {
    const { push } = React.useContext(RouterContext)
  
    return (
      <Box align="stretch" justify="start" direction="column" background={{"image":"url('')"}} fill={true}>
      <Box align="center" justify="center" direction="row-responsive" pad="small" fill="horizontal" gap="medium">
        <Hpe color="brand" size="large" />
        <Text size="xlarge" weight="bold">
          HPE Jupyter Notebook On Demand
        </Text>
      </Box>
      <Box align="stretch" justify="start" direction="column" round="medium" background={{"color":"background-front"}} pad="xsmall" fill={false}>
        <Box align="center" justify="center" direction="row" margin={{"top":"large"}} gap="small">
          <Validate color="brand" size="medium" />
          <Heading level="4" size="large" margin="none">
            Your Registration was Successfull !!
          </Heading>
        </Box>
      </Box>
      <Box align="center" justify="center" gap="small" pad="medium">
        <Button label="Register More" primary={true} onClick={() => push("/register")} />
      </Box>
    </Box>
    )
  }

const Failure = () => {
    const { push } = React.useContext(RouterContext)
  
    return (
      <Box align="stretch" justify="start" direction="column" background={{"image":"url('')"}} fill={true}>
      <Box align="center" justify="center" direction="row-responsive" pad="small" fill="horizontal" gap="medium">
        <Hpe color="brand" size="large" />
        <Text size="xlarge" weight="bold">
          HPE Jupyter Notebook On Demand
        </Text>
      </Box>
      <Box align="stretch" justify="start" direction="column" round="medium" background={{"color":"background-front"}} pad="xsmall" fill={false}>
        <Box align="center" justify="center" direction="row" margin={{"top":"large"}} gap="small">
          <StatusCritical color="status-critical" size="medium" />
          <Heading level="4" size="large" margin="none">
            Your Registration was UnSuccessfull !!
          </Heading>
        </Box>
      </Box>
      <Box align="center" justify="center" gap="small" pad="medium">
        <Button label="Go Back" primary={true} onClick={() => push("/register")} />
      </Box>
    </Box>
    )
  }
  
  export default () => (
    <Grommet full theme={theme}>
      <Router>
        <Routes>
          <Route path="/register1" Component={Register1} />
        <Route path="/register" Component={Register} />
        <Route path="/success" Component={Success} />
        <Route path="/failure" Component={Failure} />
        </Routes>
      </Router>
    </Grommet>
  )
  