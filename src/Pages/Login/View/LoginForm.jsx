import { Formik } from "formik";
import { Link } from "react-router-dom";
import { Schema } from "../../../Components/Validation/Validation";

const LoginForm = () => {
  return (
    <div className="login-form">
      <Formik
        validationSchema={Schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
          resetForm({ values: "" });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <div className="input-container">
                  <label htmlFor="email">Email id</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter email id"
                    className="form-control inp_text"
                    id="email"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error">
                    {errors.email && touched.email && errors.email}
                  </p>
                </div>
                <div className="input-container">
                  <label htmlFor="password">Password</label>
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    className="form-control"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error">
                    {errors.password && touched.password && errors.password}
                  </p>
                </div>
                <Link to="/">Forgot Password?</Link>
                {/* Click on submit button to submit the form */}
                <div className="login-form-btn">
                  <div className="outline-btn">
                    <button type="submit">
                      <Link to="/dashboard/home">Log in</Link>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
