import React, { Component } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 60,
    };
  }

  render() {
    const { timer } = this.state;
    return (
      <Container className={"mt-5"}>
        <Row>
          <Col md={12}>
            {timer >= 60 ? (
              <Card>
                <Card.Header>Fast Typing</Card.Header>
                <Card.Body>
                  <Card.Title>Hız Testi</Card.Title>
                  <Card.Text>
                    Zamandan kazanmak için parmaklarını test et :)
                    <br />
                    Doğru: 0
                    <br />
                    Yanlış: 0
                  </Card.Text>
                  <hr />
                  <Card body className={"border-dark"}>
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        display: "inline-block",
                      }}
                      className={
                        "bg-secondary text-white p-1 mx-1 my-1 rounded"
                      }
                    >
                      asdsa
                    </span>
                  </Card>
                  <hr />
                  <Card body>
                    <InputGroup>
                      <FormControl placeholder={"Kelimeyi Yazınız..."} />
                      <InputGroup className={"mt-3"}>
                        <Button disabled={true} variant={"outline-secondary"}>
                          30 sn.
                        </Button>
                        <Button variant={"outline-success ml-2"}>Yenile</Button>
                      </InputGroup>
                    </InputGroup>
                  </Card>
                  <hr />
                </Card.Body>
              </Card>
            ) : (
              <Card>
                <Card.Header>Fast Typing</Card.Header>
                <Card.Body>
                  <Card.Title>Hız Testi Sonucu</Card.Title>
                  <Card.Text>
                    <Alert variant={"success"}>
                      <h4>Oyun bitti :)</h4>
                      <br />
                      <font style={{ fontSize: "50px" }}>60 DKS</font>
                      <br />
                      Doğruluk Yüzdesi: 80%
                      <br />
                      Doğru Kelime: 50
                      <br />
                      Yanlış Kelime: 10
                      <br />
                      <Button variant={"primary mt-2"}>Yeni Oyun</Button>
                    </Alert>
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
