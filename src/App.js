import React, { Component } from 'react';
import './App.css';
import {key} from './apikey.js';
import {tmData} from './apidata.js';

let apiBase = 'https://app.ticketmaster.com/discovery/v2/events.json?'
let params = 'classificationName=music&stateCode=MA&size=2&apikey='
let apiurl = apiBase + params + String(key)


let fakeConcertData = {
  user: {
    name: 'Ryan',
    eventList: [
      {
        eventName: 'Shawn Mendes: The  Tour',
        location: 'TD Garden - Boston, MA',
        date: 'August 15, 2019',
        price: '$45-$650',
        image: 'https://media.ticketmaster.com/en-us/dam/a/477/c81f5790-e79c-4677-9f93-fbbeffb4b477_731891_EVENT_DETAIL_PAGE_16_9.jpg',
        link: 'https://www1.ticketmaster.com/shawn-mendes-the-tour/event/010054A8863925E5'
      },
      {
        eventName: 'Ariana Grande: Sweetener World Tour',
        location: 'TD Garden - Boston, MA',
        date: 'March 20, 2019',
        price: '$130-$240',
        image: 'https://media.ticketmaster.com/en-us/dam/a/8c2/1e84234c-695c-4f3f-931a-a3ade43038c2_879001_EVENT_DETAIL_PAGE_16_9.jpg',
        link: 'https://www1.ticketmaster.com/ariana-grande-sweetener-world-tour/event/0100555900E0A714'
      },
      {
        eventName: 'Backstreet Boys: DNA World Tour',
        location: 'TD Garden - Boston, MA',
        date: 'August 14, 2019',
        price: '$44-$189',
        image:'https://media.ticketmaster.com/en-us/dam/a/14b/5d967e1e-df58-4b6f-b872-223203a4e14b_890641_EVENT_DETAIL_PAGE_16_9.jpg',
        link: 'https://www1.ticketmaster.com/backstreet-boys-dna-world-tour/event/01005567C318587F'
      }
    ]
  }
}

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <center>
        <a className="logo">CS411 Home Page</a>
        </center>
      </div>
    </nav>
  )
}



class ConcertDisplay extends Component {
  render () {
    return (
      <div className='ConcertDisplay'>
        <table className="ResultsTable">
          <tr>
            <td className='imagecell'>
              <div className="imgcontainer">
                <center>
                <img className='eventimage' src={this.props.events.image}>
                </img>
                </center>
              </div> 
            </td>
            <td className="textcell">
              <div> {/* Table Div */}
                <table className="texttable">
                <tr>
                  <td>{this.props.events.eventName}</td>
                  <td>{this.props.events.location}</td>
                </tr>
                <tr>
                  <td>{this.props.events.date}</td>
                  <td>{this.props.events.price}</td>
                </tr>
                </table>
              </div>
            </td>
            <td className="buttoncell">
              <div> {/* Button Div */}
                <button><a href={this.props.events.link} target='_blank' rel="noopener noreferrer"> View Event </a> </button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

class TestDisplay extends Component {
  render () {
    let Data = this.props.event
    return (
        <div className='testerino'>
        <ul>
          <li> Name : {Data.name} </li>
          <li> <button><a href={Data.url} target='_blank' rel="noopener noreferrer"> View Event </a> </button> </li>
          <li> Date: {Data.dates.start.localDate} </li>
          <li> Price: ${Data.priceRanges[0].min} - ${Data.priceRanges[0].max} </li>
          <li> Location: {Data._embedded.venues[0].name} </li>
          <img src={Data.images[0].url}></img>
        </ul>
        </div>
      )
  }
}

class ParseDisplay extends Component {
  render () {
    let Data = this.props.event
    return (
      <div className='ConcertDisplay'>
        <table className="ResultsTable">
          <tr>
            <td className='imagecell'>
              <div className="imgcontainer">
                <center>
                <img className='eventimage' src={Data.images[0].url}>
                </img>
                </center>
              </div> 
            </td>
            <td className="textcell">
              <div> {/* Table Div */}
                <table className="texttable">
                <tr>
                  <td>{Data.name}</td>
                  <td>{Data._embedded.venues[0].name}</td>
                </tr>
                <tr>
                  <td>{Data.dates.start.localDate}</td>
                  <td>${Data.priceRanges[0].min} - ${Data.priceRanges[0].max}</td>
                </tr>
                </table>
              </div>
            </td>
            <td className="buttoncell">
              <div> {/* Button Div */}
                <button><a href={Data.url} target='_blank' rel="noopener noreferrer"> View Event </a> </button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    )
  }

}

class ParseData extends Component {
  constructor() {
    super()
    this.state = {otherData: {}}
  }

    componentDidMount() {
    setTimeout ( () => {
      this.setState({otherData: tmData});
    },1000)
  }

  render() {
    return (
      <div className="Parse">
      {this.state.otherData._embedded ?
        <div>
          <h1> Concerts </h1>
          {this.state.otherData._embedded.events.map(event =>
            <ParseDisplay event={event}/>)}
        </div> : <button onClick={() => window.location='http://localhost:8888/login'}
        style={{padding: '20px', 'fontSize': '50px', 'marginTop': '20px'}}> Sign in with Spotify </button>
      }
      </div>
    );
  }
}

class Example extends Component {
    constructor(){
    super()
    this.state = {serverData: {}, otherData: {}}
  }

  componentDidMount() {
    setTimeout ( () => {
      this.setState({serverData: fakeConcertData, otherData: tmData});
    },1000)
  }
  

  render() {
    return (
      // Change back after
      <div className="Example">
      {this.state.serverData.user ? 
        <div>
          <h1> Concerts </h1>
          <center>
          {this.state.serverData.user.eventList.map(events =>
            <ConcertDisplay events={events}/>)
          }
          </center>
        </div> : <button onClick={() => window.location='http://localhost:8888/login'}
        style={{padding: '20px', 'fontSize': '50px', 'marginTop': '20px'}}> Sign in with Spotify </button>
      }
      </div>
    );
  } 
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <center>
        {/*<Example/>*/}
        <ParseData/>
        </center>
      </div>
    );
  }
}

export default App;
