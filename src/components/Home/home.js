import React from 'react';
import './home.css';
import logo from '../../logo.svg'

const Home = ({ company }) => (
  <main className="main">
    <div className="container">
      <hgroup className="title">
        <h1>
          <img className="logo-title" src={logo} alt={company.name}/>
        </h1>
        <h2 className = "subtitle">
          {company.summary}
        </h2>
      </hgroup>

      <div className="row">
        <div className="table-container">
          <table className="home_table home_table_manager">
            <caption className="home_table-title">
              Manager
            </caption>
            <thead>
              <tr>
                <td className="home_table-column home_table-column-left">CEO</td>
                <td className="home_table-column">{company.ceo}</td>
              </tr>
              <tr>
                <td className="home_table-column home_table-column-left">COO</td>
                <td className="home_table-column">{company.coo}</td>
              </tr>
              <tr>
                <td className="home_table-column home_table-column-left">CTO</td>
                <td className="home_table-column">{company.cto}</td>
              </tr>
              <tr>
                <td className="home_table-column home_table-column-left">CTO PROPULSION</td>
                <td className="home_table-column">{company.cto_propulsion}</td>
              </tr>
            </thead>

          </table>

          <table className="home_table home_table_location">
            <caption className="home_table-title">
              Location
            </caption>
            <thead>
              <tr>
                <td className="home_table-column home_table-column-left">State</td>
                <td className="home_table-column">{company.headquarters.state}</td>
              </tr>
              <tr>
                <td className="home_table-column home_table-column-left">City</td>
                <td className="home_table-column">{company.headquarters.city}</td>
              </tr>
              <tr>
                <td className="home_table-column home_table-column-left">Address</td>
                <td className="home_table-column">{company.headquarters.address}</td>
              </tr>
            </thead>

          </table>
        </div>

        <video id="video" autoPlay loop muted className="responsive-video">
          <source type="video/mp4" src="https://www.spacex.com/media/mission_reusability.mp4"/>
          <source type="video/webm" src="https://www.spacex.com/media/mission_reusability.webm"/>
        </video>
      </div>

    </div>

  </main>
);
export default Home;