
var answers = [
`Hope that takes care of everything you needed today, but please don't hesitate to reach back out should you need anything else.  Wishing you a great rest of your day in the meantime!

-Thanks,
Ronan`,
  
`Hope that takes care of everything you needed today, but please don't hesitate to reach back out should you need anything else.  Wishing you a great rest of your evening in the meantime!

-Thanks,
Ronan`,


]




class App extends React.Component {
  constructor(props) {
    super(props);

this.state= {
  thingtobecopied: ""
}

this.handleType=this.handleType.bind(this)

  }


handleType(e) {
  if (e.target.value=="correct") {
  this.setState ({
    thingtobecopied: answers[0]
  })
}
else return this.setState ({
  thingtobecopied: answers[1]
})
}  

  render() {
    
    
      navigator.clipboard.writeText(this.state.thingtobecopied)
      navigator.clipboard.readText().then(
      clipText => document.querySelector("#changeme").innerText = clipText).then
      return (
        <div>
      <h1 id="changeme"></h1>
      <input id="input" type="text" onChange={this.handleType}></input>
      

</div>
    )
  }
}














ReactDOM.render(<App />, document.getElementById("app"))