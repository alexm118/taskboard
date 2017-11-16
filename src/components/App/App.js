import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <Grid fluid>
              <Row>
                  <AppBar title="Taskboard"/>
              </Row>
              <Row>
                  <Col xs={12} sm={4} smOffset={4}>
                    <h1>Application Being Built</h1>
                  </Col>
              </Row>
          </Grid>
        </MuiThemeProvider>
    );
  }
}

export default App;
