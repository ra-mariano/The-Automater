
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

`I'm glad we were able to take care of that today.  Please don't hesitate to reach out for anything else, and I wish you a great rest of your day in the meantime!

-Thanks,
Ronan`,

`I'm glad we were able to take care of that today.  Please don't hesitate to reach out for anything else, and I wish you a great rest of your evening in the meantime!

-Thanks,
Ronan`,

`Thanks for chatting in today to look into the verification status for account ().  I'm glad we were able to take care of that today.  Please don't hesitate to reach out for anything else, and I wish you a great rest of your day in the meantime!

-Thanks,
Ronan`,

`Thanks for chatting in today to look into the verification status for account ().  I'm glad we were able to take care of that today.  Please don't hesitate to reach out for anything else, and I wish you a great rest of your evening in the meantime!

-Thanks,
Ronan`,

`As promised, I have already reached out to my specialized colleagues who will be able to help further, and rest assured, we will reach back out here through email as soon as we can with an update.  Wishing you a great rest of your day in the meantime!

-Thanks,
Ronan`,

`As promised, I have already reached out to my specialized colleagues who will be able to help further, and rest assured, we will reach back out here through email as soon as we can with an update.  Wishing you a great rest of your evening in the meantime!

-Thanks,
Ronan`,

`With that said, I will be submitting your use-case and request as feedback to our engineers to see if this is something they can work on for the future.  User feedback is something we take very seriously and has often played a major role in what features or services we work on next, so thank you for bringing this to our attention today.  Please don't hesitate to let us know if we can help in any other way, and I wish you a great rest of your day in the meantime!

-Thanks,
Ronan`,

`With that said, I will be submitting your use-case and request as feedback to our engineers to see if this is something they can work on for the future.  User feedback is something we take very seriously and has often played a major role in what features or services we work on next, so thank you for bringing this to our attention today.  Please don't hesitate to let us know if we can help in any other way, and I wish you a great rest of your evening in the meantime!

-Thanks,
Ronan`,

`It looks like you may have already stepped away, so I will just need to close the chat for now, but I will go ahead and follow up over email to continue assisting further.  Bye for now!`,


`It looks like you may have already stepped away, so I will just need to close the chat for now, but I will go ahead and follow up over email in case you need further assistance.  Bye for now!`,

`It looks like you may have already stepped away, so I will just need to close the chat for now, but feel free to chat back in when ready!`,

`User asking to confirm the last 4 digits of an EIN for their connect account`,

`User unsure what was needed to verify a connect account`
]




class App extends React.Component {
  constructor(props) {
    super(props);

this.state= {
  thingtobecopied: "",
  inputtext: ""
}

this.handleType=this.handleType.bind(this)
this.handleClear=this.handleClear.bind(this)
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
case "glad day": 
this.setState ({
thingtobecopied: answers[8]
})
break;
case "glad night": 
this.setState ({
thingtobecopied: answers[9]
})
break;
case "ver day": 
this.setState ({
thingtobecopied: answers[10]
})
break;
case "ver night": 
this.setState ({
thingtobecopied: answers[11]
})
break;
case "esc day": 
this.setState ({
thingtobecopied: answers[12]
})
break;
case "esc night": 
this.setState ({
thingtobecopied: answers[13]
})
break;
case "feed day": 
this.setState ({
thingtobecopied: answers[14]
})
break;
case "feed night": 
this.setState ({
thingtobecopied: answers[15]
})
break;
case "step 1": 
this.setState ({
thingtobecopied: answers[16]
})
break;
case "step 2": 
this.setState ({
thingtobecopied: answers[17]
})
break;
case "step 3": 
this.setState ({
thingtobecopied: answers[18]
})
break;
case "t last 4": 
this.setState ({
thingtobecopied: answers[19]
})
break;
case "t unsure": 
this.setState ({
thingtobecopied: answers[20]
})
break;
}  
}

handleClear() {
  this.setState ({
    thingtobecopied: "",
    inputtext: ""
  })
}

  render() {
    
    
      navigator.clipboard.writeText(this.state.thingtobecopied)
      navigator.clipboard.readText().then(
      clipText => document.querySelector("#changeme").innerText = clipText)
      
      return (
        <div>
          <div id="container">
      <div id="inputform">
      <h3 id="changeme"></h3>
      <h3 id="keyword-label">Enter keywords here!</h3>
      <input id="input" type="text" onChange={this.handleType}></input>
      <button id="clear" onClick={this.handleClear}>CLEAR</button>
      </div>
</div>
</div>
    )
  }
}














ReactDOM.render(<App />, document.getElementById("app"))