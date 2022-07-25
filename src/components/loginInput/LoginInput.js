import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {useNavigate } from 'react-router-dom'
import { useDispatch} from "react-redux";
import { login } from "../../network/features/userSlice";

//checking signin validation
const SignupSchema = Yup.object().shape({
  username: Yup.string()
  .min(3, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
    password: Yup.string()
    .min(3, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
  });
  
  function LoginInput() {
    const navigate  = useNavigate();
    const dispatch = useDispatch()
    const handleLogin = (values) => {
      //dafult username and password is deneme
        if(values.username === 'deneme' && values.password === 'deneme'){
          dispatch(login(values.username))
          navigate("/todos",{ replace: true }); 
        }
    }
  
  return (
    <div
      className='modal fade'
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <Formik
        initialValues={{
          username : "",
          password : ""
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => handleLogin(values)}
        className="needs-validation"
      >
        {({ errors, touched}) => (
          <Form>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Giriş Yap
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <label className="form-label">
                    Username
                  </label>
                  <Field name="username" className="form-control" />
                  {errors.username && touched.username ? (
                    <div className="text-danger">{errors.username}</div>
                  ) : null}
                  <div className="mb-3">
                  <label className="form-label">
                    Şifre
                  </label>
                  <Field name="password" className="form-control" type='password'/>
                  {errors.password && touched.password ? (
                    <div className="text-danger">{errors.password}</div>
                  ) : null}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Kapat
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Giriş Yap
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginInput;
