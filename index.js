
var answers = [
`Hope that takes care of everything you needed today, but please don't hesitate to reach back out should you need anything else.  Wishing you a great rest of your day in the meantime!

-Thanks,
Ronan`,
  
`Hope that takes care of everything you needed today, but please don't hesitate to reach back out should you need anything else.  Wishing you a great rest of your evening in the meantime!

-Thanks,
Ronan`,

`Hope that helps guide you forward for now, but please don't hesitate to reach back out should you need further assistance.  Wishing you a great rest of your day in the meantime!

-Thanks,
Ronan`,

`Hope that helps guide you forward for now, but please don't hesitate to reach back out should you need further assistance.  Wishing you a great rest of your evening in the meantime!

-Thanks,
Ronan`,

`Hope that helps clarify things a bit further, but please don't hesitate to reach back out should you need further assistance.  Wishing you a great rest of your day in the meantime!

-Thanks,
Ronan`,

`Hope that helps clarify things a bit further, but please don't hesitate to reach back out should you need further assistance.  Wishing you a great rest of your evening in the meantime!

-Thanks,
Ronan`,

`Thanks for chatting in today to confirm the last 4 digits of the EIN for account ().  I'm glad we were able to take care of that today.  Please don't hesitate to reach out for anything else, and I wish you a great rest of your day in the meantime!

-Thanks,
Ronan`,

`Thanks for chatting in today to confirm the last 4 digits of the EIN for account ().  I'm glad we were able to take care of that today.  Please don't hesitate to reach out for anything else, and I wish you a great rest of your evening in the meantime!

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
  switch (e.target.value) {
  case "care day": 
  this.setState ({
    thingtobecopied: answers[0]
  })
  break;
  case "care night": 
  this.setState ({
  thingtobecopied: answers[1]
})
break;
case "guide day": 
this.setState ({
thingtobecopied: answers[2]
})
break;
case "guide night": 
this.setState ({
thingtobecopied: answers[3]
})
break;
case "clarify day": 
this.setState ({
thingtobecopied: answers[4]
})
break;
case "clarify night": 
this.setState ({
thingtobecopied: answers[5]
})
break;
case "last 4 day": 
this.setState ({
thingtobecopied: answers[6]
})
break;
case "last 4 night": 
this.setState ({
thingtobecopied: answers[7]
})
break;
}  
}

  render() {
    
    
      navigator.clipboard.writeText(this.state.thingtobecopied)
      navigator.clipboard.readText().then(
      clipText => document.querySelector("#changeme").innerText = clipText).then
      return (
        <div>
          <div id="container">
      <h3 id="changeme"></h3>
      <h3 id="keyword-label">Enter keywords here!</h3>
      <input id="input" type="text" onChange={this.handleType}></input>
      
</div>
</div>
    )
  }
}














ReactDOM.render(<App />, document.getElementById("app"))