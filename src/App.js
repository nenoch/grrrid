import React from "react";
import Container from "../src/components/Container/Container";
import Row from "../src/components/Row/Row";
import RowElement from "../src/components/RowElement/RowElement";
import Column from "./components/Column/Column";

function App() {
  return (
    <Container>
      <Row>
        <Column width="6">
          <Row>
            <RowElement>Aloha</RowElement>
            <RowElement>Ciao</RowElement>
            <RowElement>Hello</RowElement>
            <RowElement left={true}>Maybe</RowElement>
          </Row>
        </Column>
        <Column width="4">
          <Row>
            <RowElement>Aloha</RowElement>
            <RowElement>Ciao</RowElement>
            <RowElement>Hello</RowElement>
            <RowElement>Maybe</RowElement>
          </Row>
        </Column>
      </Row>
    </Container>
  );
}

export default App;
