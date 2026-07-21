import React, { Component } from "react";

export default class FoodDelivery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "",
    };
  }
  handleAcceptClick = () => {
    this.setState({ status: "accept" });
  };
  handlePrepareClick = () => {
    this.setState({ status: "prepare" });
  };
  handleDispatchClick = () => {
    this.setState({ status: "dispatch" });
  };
  handleRejectClick = () => {
    this.setState({ status: "reject" });
  };

  render() {
    let msg = "";

    switch (this.state.status) {
      case "accept":
        msg = "Your order is Accepted✅";
        break;

      case "prepare":
        msg = "Your order is being prepared😋";
        break;

      case "dispatch":
        msg = "Your order is arriving soon🛟";
        break;

      case "reject":
        msg =
          "Sorry for the inconvinient, But unfortunately your order is cancelled.😓";
        break;

      default:
        msg="Buy 1 Get 1 Free...🍴"
        break;
    }

    return (
      <div className="food">
        <h1>Order Status - {msg || "Waiting for your order😋"}</h1>

        <div className="btns">
          <button variant="success" onClick={this.handleAcceptClick}>
            Accept
          </button>
          <button variant="primary" onClick={this.handlePrepareClick}>
            Prepare
          </button>
          <button variant="info" onClick={this.handleDispatchClick}>
            Dispatch
          </button>
          <button variant="danger" onClick={this.handleRejectClick}>
            Reject
          </button>
        </div>
      </div>
    );
  }
}
