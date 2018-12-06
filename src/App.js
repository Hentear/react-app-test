import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

let fakeConcertData = {
  results: 
    [
      {
        eventName: 'Shawn Mendes: The  Tour',
        location: 'TD Garden - Boston, MA',
        date: 'August 15, 2019',
        price: '$45-$650'
      },
      {
        eventName: 'Ariana Grande: Sweetener World Tour',
        location: 'TD Garden - Boston, MA',
        date: 'March 20, 2019',
        price: '$130-$240'
      }
    ]
}

let fakeServerData = {
  user: {
    name: 'Ryan',
    playlists: 
    [
      {
        name: 'My Favorites',
        picture: 'https://image.shutterstock.com/image-photo/banana-ripe-isolated-on-white-260nw-411305029.jpg',
        songs: 
        [
          {
            name: 'Beat It', 
            artist: 'Michael Jackson',
            image: 'https://images-na.ssl-images-amazon.com/images/I/615PxNDtwPL._UX385_.jpg',
            link: 'https://open.spotify.com/track/1OOtq8tRnDM8kG2gqUPjAj?si=0p3vZ5EwTXeYER6dseQD5g'
          }
          ,{
            name: 'Sandstorm', 
            artist: 'Darude',
            image: 'https://images-na.ssl-images-amazon.com/images/I/31KW5BNV9AL.jpg',
            link: 'https://open.spotify.com/track/3XWZ7PNB3ei50bTPzHhqA6?si=ENrZvnZ2S86ZpYOcx6S68g'
          }
        ]
      }
      ,{
        name: 'Favorites 2.0',
        songs:
        [
          {
            name: 'Take On Me',
            artist: 'a-ha',
            image: 'https://pbs.twimg.com/profile_images/378800000449803620/e12d8bea1efbc92efa629ded35d22719_400x400.jpeg',
            link: 'https://open.spotify.com/track/2WfaOiMkCvy7F5fcp2zZ8L?si=7QOIA7a8T0etCbPX5_IOUw'
          }
          ,{
            name: 'Careless Whisper',
            artist: 'George Michael',
            image: 'https://www.carillonstudios.com/image/cache/data/SingleStyles/carelesswhisperx200-350x350.jpg',
            link: 'https://open.spotify.com/track/4jDmJ51x1o9NZB5Nxxc7gY?si=PmMAbA9rSq-pp5clMdt-Yg'
          }
        ]
      }
    ]
  }
}

class Test extends Component {
  render () {
    return (
        <table className="ResultsTable">
          <tr>
            <td className='imagecell'>
              <div className="imgcontainer">
                <center>
                <img src="http://chittagongit.com//images/default-profile-icon/default-profile-icon-4.jpg">
                </img>
                </center>
              </div> 
            </td>
            <td className="textcell">
              <div> {/* Table Div */}
                <table className="texttable">
                <tr>
                  <td>Event Name</td>
                  <td>Location</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>Price</td>
                </tr>
                </table>
              </div>
            </td>
            <td className="buttoncell">
              <div> {/* Button Div */}
                <button><a href="https:google.com" target='_blank'> View Event </a> </button>
              </div>
            </td>
          </tr>
        </table>
      )
  }
}

class Table extends Component {
  render () {
    return (
      <div className="Results">
      <div>
        <h1> {this.props.playlist.name} </h1>
      </div>
        <table className="ResultsTable">
        <tr>
          <td className='imagecell'>
            <div className="imgcontainer">
              <center>
              <img src={this.props.playlist.picture}>
              </img>
              </center>
            </div> 
          </td>
          <td className="textcell">
            <div> {/* Table Div */}
              <table className="texttable">
              <tr>
                <td><strong>{this.props.playlist.name}</strong></td>
                {this.props.playlist.songs.map(song =>
                  <td> {song.name} </td>)}
              </tr>
              <tr>
                <td>Artist Names</td>
                {this.props.playlist.songs.map(song =>
                  <td> {song.artist} </td>)}
              </tr>
              </table>
            </div>
          </td>
          <td className="buttoncell">
            <div> {/* Button Div */}
              <button><a href="https:google.com" target='_blank'> View Event </a> </button>
            </div>
          </td>
        </tr>
        </table>
      </div>
    )
  }
}

class Table2 extends Component {
  render () {
    return (
      <div className="Results">
        <table className="ResultsTable">
        <tr>
          <td className='imagecell'>
            <div className="imgcontainer">
              <center>
              <img src="http://chittagongit.com//images/default-profile-icon/default-profile-icon-4.jpg">
              </img>
              </center>
            </div> 
          </td>
          <td className="textcell">
            <div> {/* Table Div */}
              <table className="texttable">
              <tr>
                <td>Event Name</td>
                <td>Location </td>
              </tr>
              <tr>
                <td>Venue</td>
                <td>Price</td>
              </tr>
              </table>
            </div>
          </td>
          <td className="buttoncell">
            <div> {/* Button Div */}
              <button><a href="https:google.com" target='_blank'> View Event </a> </button>
            </div>
          </td>
        </tr>
        </table>
      </div>
    )
  }
}

class App extends Component {

  constructor(){
    super()
    this.state = {serverData: {}}
  }

  componentDidMount() {
    setTimeout ( () => {
      this.setState({serverData: fakeServerData});
    },1000)
  }

  render() {
    // let songList = []
    // if (this.state.serverData.user) {
    //   this.state.serverData.user.playlists.songs.forEach(song =>
    //     songList.push(<Table2/>)
    //     )
    // }

    return (
      <div className="App">
        <h1>
        Hello {this.state.serverData.user && 
               this.state.serverData.user.name}
        </h1>
        <center>
        {this.state.serverData.user &&
         this.state.serverData.user.playlists.map(playlist => 
          <Table playlist={playlist}/>
          )
        }
        <Test/>
        {/*this.state.serverData.user &&
         this.state.serverData.user.playlists.map(playlist => 
          <h1> {playlist.name} </h1>
          )
        */}
        </center>
      </div>

    );
  }
}

export default App;
