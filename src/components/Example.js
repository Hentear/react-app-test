import React, {Component} from 'react'
import './Component.css';

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
                <button><a href={this.props.events.link} target='_blank'> View Event </a> </button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

class Example extends Component {
    constructor(){
    super()
    this.state = {serverData: {}}
  }

  componentDidMount() {
    setTimeout ( () => {
      this.setState({serverData: fakeConcertData});
    },1000)
  }

  render() {
    return (
      // Change back after
      <div className="Example"> 
        <h1>
          Concerts
        </h1>
        <center>
        {this.state.serverData.user &&
         this.state.serverData.user.eventList.map(events =>
          <ConcertDisplay events={events}/>)
       	}
        </center>
      </div>
    );
  }	
}

export default Example;