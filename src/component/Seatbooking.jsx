import React, { useState } from "react";
import "./Seatbooking.css"
import { Grid, Button } from "@mui/material"
import Col from "react-bootstrap/Col";
import post from "../post.json"

class Seatbooking extends React.Component {
  constructor() {
    super();
    this.state = {
      seat: [
        "A1",
        "B1",
        "C1",
        "D1",
        "E1",
        "F1",
        "G1",
        "H1",
        "I  1",
        "J1",
        "K1",
        "L1",
        "M1",
        "N1",
        "O1",
        "P1",
        "Q1",

        "A2",
        "B2",
        "C2",
        "D2",
        "E2",
        "F2",
        "G2",
        "H2",
        "I  2",
        "J2",
        "K2",
        "L2",
        "M2",
        "N2",
        "O2",
        "P2",
        "Q2",
      ],
      seatAvailable: [
        "A1",
        "A2",
        "A3",
        "A4",

        "B1",
        "B2",
        "B3",
        "B4",

        "C1",
        "C2",
        "C3",
        "C4",

        "D1",
        "D2",
        "D3",
        "D4",

        "E1",
        "E2",
        "E3",
        "E4",

        "F1",
        "F2",
        "F3",
        "F4",

        "G1",
        "G2",
        "G3",
        "G4"
      ],
      seatReserved: [],
      seatSelected: post
    };
  }

  onClickData(seat) {
    if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res !== seat)
      });
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
      });
    }
  }
  checktrue(row) {
    if (this.state.seatSelected.indexOf(row) > -1) {
      return false;
    } else {
      return true;
    }
  }

  handleSubmited() {
    this.setState({
      seatSelected: this.state.seatSelected.concat(this.state.seatReserved)
    });
    this.setState({
      seatReserved: []
    });
  }

  render() {
    return (
      <div>
        <h1 className="seatbooking__title">Seat Reservation System</h1>
        <DrawGrid
          seat={this.state.seat}
          available={this.state.seatAvailable}
          reserved={this.state.seatReserved}
          selected={this.state.seatSelected}
          onClickData={this.onClickData.bind(this)}
          checktrue={this.checktrue.bind(this)}
          handleSubmited={this.handleSubmited.bind(this)}
        />
      </div>
    );
  }
}

class DrawGrid extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={10}>
          <h2 />
          <Col xs={17}>
            <table className="grid">
              <tbody>
                <tr>
                  {this.props.seat.map(row => (
                    <td
                      className={
                        this.props.selected.indexOf(row) > -1
                          ? "reserved"
                          : this.props.reserved.indexOf(row) > -1
                          ? "selected"
                          : "available"
                      }
                      key={row}
                      onClick={
                        this.props.checktrue(row)
                          ? e => this.onClickSeat(row)
                          : null
                      }
                    >
                      {row}{" "}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <Button
              type="button"
              className="confirm__seat"
              onClick={() => this.props.handleSubmited()}
            >
              Confirm Seat
            </Button>
          </Col>
        </Grid>
      </Grid>
    );
}

onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}

export default Seatbooking;