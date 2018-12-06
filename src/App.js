import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';



class Table extends Component {
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
                <td className='Event'>Event Name</td>
                <td className='Location'>Location</td>
              </tr>
              <tr>
                <td className='Artist'>Artist</td>
                <td className='Price'>Price</td>
              </tr>
              </table>
            </div>
          </td>
          <td className="buttoncell">
            <div> {/* Button Div */}
              <button> View Eveny </button>
            </div>
          </td>
        </tr>
        </table>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Spotify </h1>
        <center>
        <Table/>
        <Table/>
        </center>
      </div>

    );
  }
}

export default App;
