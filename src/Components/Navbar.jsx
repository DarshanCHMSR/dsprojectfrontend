import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
    const [apiData, setApiData] = useState([]);

  const searchData = (e) => {
    const searchterm = e.target.value;

    const wikiURL = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchterm}&prop=info&inprop=url&format=json&origin=*`;

    fetch(wikiURL)
      .then((res) => res.json())
      .then((data) => {
        setApiData(Object.values(data.query.pages).map((x) => x.title));
      });
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{padding:"0px"
    }}>
  <div className="container-fluid" style={{backgroundColor: "info"}}>
    <Link className="navbar-brand" to="#" >DS Project</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/history">History</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/FlowDiagram">FlowDiagram</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/Carts">cards</Link>
        </li> 
      </ul>
      <form className="d-flex" role="search">
      <input
      type="text"
      name=""
      id=""
      placeholder="Enter search term"
      onInput={searchData}
    />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div
        style={{
          width: "250px",
          position: "relative",
          left: "1200px",

        }}
      > 
        <ul class="list-group">
          {apiData.map((item) => (
            <li class="list-group-item">{item}</li>
          ))}
        </ul>
      </div>
      
    </>
  );
};

export default Navbar;
