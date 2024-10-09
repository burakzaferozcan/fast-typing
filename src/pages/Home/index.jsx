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
import wordList from "../../words.json";

export class Home extends Component {
  constructor(props) {
    super(props);

    let newWordsList = wordList.sort(() => Math.random() - 0.5);

    this.state = {
      changeWord: "",
      checkWord: "",
      words: newWordsList,
      trueCount: 0,
      falseCount: 0,
      truePercent: 0,
      timer: 60,
      interval: null,
    };
  }

  componentDidMount() {
    let { words } = this.state;

    this.setState({
      checkWord: words[0],
    });
  }

  handleWord = (event) => {
    let { words, checkWord, trueCount, falseCount } = this.state;
    let getValue = event.target.value;

    if (getValue !== " ") {
      if (getValue.slice(-1) !== " ") {
        this.setState({
          changeWord: getValue,
        });
      } else {
        this.setState(
          {
            changeWord: getValue.slice(0, -1),
          },
          () => {
            if (checkWord === getValue.slice(0, -1)) {
              words.shift();

              this.setState({
                changeWord: "",
                checkWord: words[0],
                words: words,
                trueCount: trueCount + 1,
                truePercent:
                  ((trueCount + 1) * 100) / (trueCount + 1 + falseCount),
              });
            } else {
              words.shift();

              this.setState({
                changeWord: "",
                checkWord: words[0],
                words: words,
                falseCount: falseCount + 1,
                truePercent: (trueCount * 100) / (trueCount + falseCount),
              });
            }
          }
        );
      }
    }
  };

  render() {
    let {
      words,
      changeWord,
      checkWord,
      trueCount,
      falseCount,
      truePercent,
      timer,
    } = this.state;

    return (
      <>
        <Container className={"mt-5"}>
          <Row>
            <Col md={12}>
              {timer >= 60 ? (
                <Card>
                  <Card.Header>mType</Card.Header>
                  <Card.Body>
                    <Card.Title>mType Hız Testi</Card.Title>
                    <Card.Text>
                      Zamandan kazanmak için parmaklarını test et :)
                      <br />
                      Doğru: {trueCount}
                      <br />
                      Yanlış: {falseCount}
                    </Card.Text>
                    <hr />
                    <Card body className={"border-dark"}>
                      {words.length > 0 &&
                        words.slice(0, 50).map((item, index) => (
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: 600,
                              whiteSpace: "nowrap",
                              display: "inline-block",
                            }}
                            className={`${
                              index === 0
                                ? checkWord.match(changeWord)
                                  ? "bg-secondary text-white"
                                  : "bg-danger text-white"
                                : "text-dark"
                            } p-1 mx-1 my-1 rounded`}
                          >
                            {item}
                          </span>
                        ))}
                    </Card>
                    <hr />
                    <Card body>
                      <InputGroup>
                        <FormControl
                          value={changeWord}
                          onChange={this.handleWord}
                          placeholder={"Kelimeyi Yazınız..."}
                        />
                        <InputGroup className={"mt-3"}>
                          <Button disabled={true} variant={"outline-secondary"}>
                            {timer}
                            sn.
                          </Button>
                          <Button variant={"outline-success ml-2"}>
                            Yenile
                          </Button>
                        </InputGroup>
                      </InputGroup>
                    </Card>
                    <hr />
                  </Card.Body>
                </Card>
              ) : (
                <Card>
                  <Card.Header>mType</Card.Header>
                  <Card.Body>
                    <Card.Title>mType Hız Testi Sonuçları</Card.Title>
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
      </>
    );
  }
}

export default Home;
