import React, { Component, Fragment } from "react";

import Loading from "./Loading";

import { useState } from "react";

class Main extends Component {
  state = {
    isSaleStarted: true,
    loading: false,
    usdcDeposit: 0,
    inrcRedeem: 0,
    airdropAmount: 0,
  };

  airdrop = async () => {
    this.setState({
      loading: true,
    });
    try {
      if (this.state.airdropAmount > 0 && this.state.airdropAmount <= 10000) {
        // console.log("Redeem is called");
        // console.log(this.state.inrcRedeem);
        await this.props.airdropUSDC(this.state.airdropAmount, () => {
          this.setState({
            loading: false,
          });
        });
      } else {
        window.alert("Please enter the correct airdrop amount less than 10000");
      }
    } catch (error) {
      this.setState({
        loading: false,
      });
    }

    this.setState({
      loading: false,
    });
  };

  handleAirdropcValueChange = (event) => {
    this.state.airdropAmount = event.target.value;

    console.log("value is:", this.state.airdropAmount);
  };

  connectWallet = () => {
    this.props.connectToWallet(this.state.inrcRedeem);
  };

  render() {
    return (
      <div>
        <div className="">
          <h2 className="whiteText AboretoText">USDC Faucet</h2>
          <br></br>
          {this.props.account != "NA" ? (
            <div className="centerAlign">
              <button className="greenColorButton">CONNECTED</button>
            </div>
          ) : (
            <div className="centerAlign">
              <button onClick={this.connectWallet}>CONNECT</button>
            </div>
          )}
          <br></br>
          <h3 className="whiteText AboretoText">
            Account : {this.props.account}
          </h3>
          <br></br> <br></br>
        </div>

        <div>
          <div className="firstDiv">
            <div className="card">
              <div className="container">
                <input
                  placeholder="Enter amount of USDC..."
                  type="text"
                  id="usdcDeposit"
                  name="usdcDeposit"
                  onChange={this.handleAirdropcValueChange}
                  className="robotoText"
                ></input>
                <div className="secondaryCard">
                  <div className="container">
                    <h4 className="AboretoText ">
                      Get USDC airdrop from faucet{" "}
                    </h4>
                  </div>
                </div>
                <p className="robotoTextOrange">IMPORTANT</p>
                <p className="robotoText">Connect your wallet</p>
                <p className="robotoText">Enter amount less than 10000 USDC</p>
                <br></br>
                {this.state.loading ? (
                  <Loading>
                    <p className="mt-2">
                      Please wait while the transaction is executing
                    </p>
                  </Loading>
                ) : (
                  <button onClick={this.airdrop}> AIRDROP</button>
                )}{" "}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mintArea">
          <div className="mintTextBlock">
            
            <p>Always old, sometimes new.</p>
            <p> Never sad, sometimes blue.</p>
            <p>Never empty, sometimes full. </p>
            <p>Never pushes, always pulls. </p>
            <br></br>
            <p>
              Something coming, anyone haven't thought in their wildest dreamz{" "}
            </p>
            <br></br>
          </div>
          <div className="mintButtonBlock">
            {this.state.loading ? (
              <Loading>
                <p className="mt-2">
                  Please wait while the transaction is executing
                </p>
              </Loading>
            ) : (
              
              <form className="mb-2" onSubmit={this.handleSubmit}>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    ref={(input) => {
                      this.input = input;
                    }}
                    className="form-control form-control-lg"
                    placeholder="Quantity.."
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">Max 10</div>
                  </div>
                </div>

                {this.state.loading ? (
                  <Loading>
                    <p className="mt-2">
                      Please wait while the transaction is executing
                    </p>
                  </Loading>
                ) : (
                  <Fragment>
                    <button
                      type="submit"
                      className="greyClass btn-block responsiveTextSize btn-lg"
                      id="buttonContent"
                      disabled={this.state.loading}
                    >
                      Mint your Owlz!
                    </button>
                    <br></br>
                    <p>
                      <b>
                        <i>First free then 0.0069 eth/each.</i>
                      </b>
                    </p>
                    <a
                      href="https://etherscan.io/address/0x4b2CaCCE7b585B2914D2a30750fFA6E8Fb91E6ee"
                      className=" "
                    >
                      <p>
                        <b>
                          <u className="greyLink"> Verified smart contracts</u>
                        </b>
                      </p>
                    </a>

                   
                  </Fragment>
                )}
              </form>
            )}
          </div>
        </div> */}
      </div>
    );
  }
}

export default Main;
