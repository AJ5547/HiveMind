// import Hero from "./img/Product/pablo-merchan-montes.webp";
import './../App.css';

const Header = () => {
    return (
        <>
    <nav className="navbar navbar-expand-lg bg-body-brown hero-image backgroundOverlay">
  <div className="container-fluid">
    <h1 className="text-white text-uppercase mr-5" href="empty">Hivemind</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item px-3">
          <a className="nav-link text-white active" aria-current="page" href="empty">Home</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link text-white" href="empty">About</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link text-white" href="empty">Tesimonial</a>
        </li>
        <li className="nav-item px-3 dropdown text-white">
          <a className="nav-link dropdown-toggle text-white" href="empty" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu text-white bg-body-brown">
            <li><a className="dropdown-item text-white" href="empty">Tea</a></li>
            <li><a className="dropdown-item text-white" href="empty">Coffee</a></li>
            <li><a className="dropdown-item text-white" href="empty">Food</a></li>
          </ul>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link text-white" href="empty">Contact</a>
        </li>
      
      </ul>
      <form className="d-flex " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div style={{height: 10000 + 'px'}} className="container-fluid p-0 mb-5 hero-image backgroundOverlay h-100">
        
                <div className="carousel-item active d-flex flex-column align-items-center justify-content-center pt-10">
                    <h1 className='text-white'> HiveMind</h1>
                    <br />
                    <h2 className='text-white'> Local Cafe and Bakery</h2>
                    <br />
                    <h2 className='text-white'> Serving Since *2020*</h2>
                </div>
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   
</div>
        </>
    )
}
export default Header;