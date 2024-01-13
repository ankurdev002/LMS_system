import { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import { Formik } from "formik";
import { AiOutlineClose } from "react-icons/ai";
import { editEmployeeValidation } from "../../../Components/Validation/Validation";

const EditEmployeePopUp = () => {
  const { setDisplayEditEmployee } = useContext(DataContext);
  return (
    <div className="popup-emp-edit">
      <div className="popup-content">
        <div className="form">
          <button
            className="close-btn-edit"
            onClick={() => setDisplayEditEmployee(false)}
          >
            <AiOutlineClose />
          </button>
          <Formik
            validationSchema={editEmployeeValidation}
            initialValues={{
              mobileno: "",
              personalid: "",
            }}
            onSubmit={(values, { resetForm }) => {
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
              <form noValidate onSubmit={handleSubmit}>
                <div className="input-container">
                  <label htmlFor="mobileno">Mobile No</label>
                  <input
                    id="mobileno"
                    name="mobileno"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobileno}
                    placeholder="Enter Mobile Number"
                    className="form-control inp_text"
                  />
                  <p className="error">
                    {errors.mobileno && touched.mobileno && errors.mobileno}
                  </p>
                </div>

                <div className="input-container">
                  <label htmlFor="personalid">Personal Email ID</label>
                  <input
                    id="personalid"
                    name="personalid"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.personalid}
                    placeholder="Enter Personal Email ID"
                    className="form-control inp_text"
                  />
                  <p className="error">
                    {errors.personalid &&
                      touched.personalid &&
                      errors.personalid}
                  </p>
                </div>
                <div className="form-btn-cont">
                  <button type="submit">Send For Review</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default EditEmployeePopUp;
