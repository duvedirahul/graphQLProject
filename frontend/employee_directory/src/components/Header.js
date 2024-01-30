import brandlogo from "../brandlogo.svg";
import { PAGES } from "../enum";
function Header({ currentPage, changePage }) {
  const onMenuClick = (value) => {
    changePage(value);
  };
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <span className="navbar-brand">
            <img
              src={brandlogo}
              alt=""
              width="100"
              height="50"
              className="d-inline-block align-text-top"
            />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span
                  className={
                    currentPage === PAGES.EMPLOYEE_LIST
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={() => onMenuClick(PAGES.EMPLOYEE_LIST)}
                >
                  Show All Employees
                </span>
              </li>
              <li className="nav-item">
                <span
                  className={
                    currentPage === PAGES.ADD_EMPLOYEE
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={() => onMenuClick(PAGES.ADD_EMPLOYEE)}
                >
                  Insert Employee Record
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
