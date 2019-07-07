import React from "react"

const buttonStyles = {
  fontSize: "1em",
  textAlign: "center",
  color: "#fff",
  padding: "8px 12px",
  backgroundColor: "#6772E5",
  borderRadius: "4px",
  border:"0",
  letterSpacing: "1.5px",
}

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_BQNOFTGGALolEEi2XQt6Jhrm00K0zfA9Cb", {
      betas: ["checkout_beta_4"],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_FOSiAINetgCrrx", quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        DONATE
      </button>
    )
  }
}

export default Checkout