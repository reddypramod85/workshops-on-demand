import React from "react";
import { Box, Text, Heading, Button } from "grommet";

//========================================= Footer
const Hpedev = () => (
  <Box direction="column" flex>
    <Box direction="row" fill="horizontal" pad="small">
      <Box align="center" justify="between" direction="column" basis="1/3">
        <Text>Stay in the loop</Text>
        <Heading level="4" textAlign="center">
          Sign up for the HPE Developer Newsletter
        </Heading>
         
        <Button
          label="Subscribe Now"
          href="https://developer.hpe.com/newsletter-signup"
        />
      </Box>
      <Box align="center" justify="between" direction="column" basis="1/3">
        <Text>Build with us</Text>
        <Heading level="4" textAlign="center">
          Contribute to the HPE Developer blog
        </Heading>
         
        <Button label="Subscribe Now" href="https://developer.hpe.com/signup" />
      </Box>
      <Box align="center" justify="between" direction="column" basis="1/3">
        <Text>Connect and code</Text>
        <Heading level="4" textAlign="center">
          Join the HPE Developer Slack Community
        </Heading>
         
        <Button label="Join Now" href="https://slack.hpedev.io/" />
      </Box>
    </Box>
  </Box>
);

export default Hpedev;
