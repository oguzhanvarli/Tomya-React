import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getAllTodos } from "../../network/features/todoSlices";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

//checking validation
const SignupSchema = Yup.object().shape({
  userId: Yup.number()
    .min(1, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  title: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  completed: Yup.boolean(),
});

function AddTodoModal() {
  const dispatch = useDispatch();

  const handleTodo = (todo) => {
    try {
      //adding redux state
      dispatch(addTodo(todo));
    } catch (error) {
      console.log("adding todo Error");
    }
  };
  return (
    <div
      className="modal fade"
      id="addTodoModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <Formik
        initialValues={{
          userId: "",
          title: "",
          completed: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => handleTodo(values)}
        className="needs-validation"
      >
        {({ errors, touched, values }) => (
          <Form>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Todo Ekle
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
                    UserId
                  </label>
                  <Field name="userId" className="form-control" type='number' />
                  {errors.userId && touched.userId ? (
                    <div className="text-danger">{errors.userId}</div>
                  ) : null}
                  <div className="mb-3">
                  <label className="form-label">
                    Todo
                  </label>
                  <Field name="title" className="form-control" />
                  {errors.title && touched.title ? (
                    <div className="text-danger">{errors.title}</div>
                  ) : null}
                  </div>
                  <div className="form-check">
                    <Field
                      type='checkbox'
                      className="form-check-input"
                      name='completed'
                      id="exampleCheck1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheck1"
                    >
                      {values.completed ? 'Tamamlandı' : 'Tamamlanmadı'}
                    </label>
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
                    Ekle
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

export default AddTodoModal;
