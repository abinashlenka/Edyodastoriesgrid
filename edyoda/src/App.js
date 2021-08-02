import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://www.edyoda.com/stories">
    <div>
      <div className="Logo"> EDYODA </div>
      <p className="story-para">Stories</p>
    </div>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#s" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Explore Catagories
          </a>
        </li>
      </ul>
      <div className="bio">
        <p className="edyoda-bio">
        
          Edyoda is free learning and knowledge <br/>
          sharing platform for techies
        </p>
      </div>
      <div className="main-website-btn">
      <button className="go-to-main-website" >Go To Main Website</button>
      </div>
    </div>
  </div>
</nav>
    <div className='posts-section'>
      <h3 className="latest-post-section">Latest Posts</h3>
      <div className="filter-section">
        <img className="img-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=" alt="filter"/>
        <a className="filter-catagories">Filter by Category</a>
      </div>
      <div className="filter-container">
        <a   className="all">All</a>
        <a className="item">Artificial  Intelligence</a>
        <a className="item">Artificial  Intelligence</a>
        <a className="item">Cloud Computing</a>
        <a className="item">DevOps</a>
        <a className="item">Programming Languages</a>
    
       <div id="container-2">
      
         <a className="item-2">Mobile Application Development</a>
         <a className="item-2">Technology and Tools</a>
         <a className="item-2">Get a Job in a Tech Company</a>
         <a className="item-2">Others</a>
        </div>
      </div>
    </div>
  </div>

  )
}

export default App

