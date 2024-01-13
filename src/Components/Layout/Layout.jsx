/* eslint-disable react/prop-types */
import Date from "../Date/Date";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="layout-first-cont">
        <div>
          <Date />
        </div>
      </div>
      <div className="layout-main-container">{children}</div>
      <div className="layout-cont-4">
        <div className="quote">
          <h3>
            Unlocking Success Through <span>Effective Management</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Layout;
