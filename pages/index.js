import React from "react";
import timeout from "p-timeout";
import { Card, Flex, Box, Link } from "rebass";
import Heading from "../components/Heading";
import Text from "../components/Text";
import { getGitHubRepoStars } from "../helpers/github-api";
import OSSProject from "../components/OpenSourceProjectCard";

const H2 = props => <Heading fontSize={5} mb={3} mt={4} as="h2" {...props} />;

class Homepage extends React.Component {
  render() {
    return (
      <Box py={5}>
        <Box mb={4}>
          <H2 mt={0}>Open Source</H2>
          <Flex flexWrap="wrap">
            <OSSProject
              light
              stars={4676}
              repo="withspectrum/spectrum"
              bg="linear-gradient(to top right, #7213FB, #4F16EE)"
            >
              <OSSProject.Title>Spectrum</OSSProject.Title>
              <OSSProject.Description>
                Simple, powerful online communities in a unified platform.
              </OSSProject.Description>
            </OSSProject>
            <OSSProject
              stars={19445}
              repo="styled-components/styled-components"
              light
              bg="linear-gradient(to top right, #DB7093, #DAA357)"
            >
              <OSSProject.Title>styled-components</OSSProject.Title>
              <OSSProject.Description>
                Visual primitives for the component age. Use the best bits of
                ES6 and CSS to style your apps without stress 💅
              </OSSProject.Description>
            </OSSProject>
            <OSSProject
              stars={19984}
              repo="react-boilerplate/react-boilerplate"
              light
              bg="linear-gradient(to bottom right, #6D6E72, #9EA0A6)"
            >
              <OSSProject.Title>react-boilerplate</OSSProject.Title>
              <OSSProject.Description>
                A highly scalable foundation with a focus on development
                experience, performance and best practices
              </OSSProject.Description>
            </OSSProject>
            <OSSProject stars={722} repo="micro-analytics/micro-analytics">
              <OSSProject.Title>micro-analytics</OSSProject.Title>
              <OSSProject.Description>
                Public analytics as a Node.js microservice, no sysadmin
                experience required
              </OSSProject.Description>
            </OSSProject>
            <OSSProject stars={1495} repo="mxstbr/login-flow">
              <OSSProject.Title>Login Flow</OSSProject.Title>
              <OSSProject.Description>
                A login/register flow built with React and Redux
              </OSSProject.Description>
            </OSSProject>
            <OSSProject stars={2101} repo="mxstbr/sharingbuttons.io">
              <OSSProject.Title>sharingbuttons.io</OSSProject.Title>
              <OSSProject.Description>
                Super fast and easy Social Media Sharing Buttons. No JavaScript.
                No tracking.
              </OSSProject.Description>
            </OSSProject>
          </Flex>
        </Box>
        <H2>Talks</H2>
        <H2>Recent Posts</H2>
      </Box>
    );
  }
}

export default Homepage;
