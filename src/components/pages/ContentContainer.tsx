import React, { Component } from "react";
import { Container } from "react-bootstrap";

interface ContentContainerProps {
  title: string;
}

export default class ContentContainer extends Component<ContentContainerProps> {
  render() {
    return (
      <Container>
        <h3 className="text-left my-2">Accounts</h3>
        {this.props.children}
      </Container>
    );
  }
}
