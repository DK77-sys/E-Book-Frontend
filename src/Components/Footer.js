import React from "react"

export default class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Copyright 2022",
    }
  }

  render() {
    return (
      <div>
        <footer>{this.state.name}</footer>
      </div>
    )
  }
}
