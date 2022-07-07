import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { postCreateUserThunk } from "../../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

const schema = Joi.object({
  firstName: Joi.string().max(255).required(),
  lastName: Joi.string().max(255).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).required(),
});

export default function AddUserForm(props) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => dispatch(postCreateUserThunk(d)))}>
      <Row className="p-4">
        <Col md={6}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors.firstName && "is-invalid"}`}
              id="userFirstName"
              placeholder="Your first name"
              {...register("firstName")}
            />
            <label htmlFor="userFirstName">First Name</label>
            <div id="userFirstNameFeedback" className="invalid-feedback">
              {errors.firstName && <span>{errors.firstName.message}</span>}
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors.lastName && "is-invalid"}`}
              id="userLastName"
              placeholder="Your last name"
              {...register("lastName")}
            />
            <label htmlFor="userLastName">Last Name</label>
            <div id="userLastNameFeedback" className="invalid-feedback">
              {errors.lastName && <span>{errors.lastName.message}</span>}
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${errors.email && "is-invalid"}`}
              id="userEmail"
              placeholder="Your email address"
              {...register("email")}
            />
            <label htmlFor="userEmail">Email address</label>
            <div id="userEmailFeedback" className="invalid-feedback">
              {errors.email && <span>{errors.email.message}</span>}
            </div>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className={`form-control ${errors.password && "is-invalid"}`}
              id="userPassword"
              placeholder="Password"
              {...register("password")}
            />
            <label htmlFor="userPassword">Password</label>
            <div id="userPasswordFeedback" className="invalid-feedback">
              {errors.password && <span>{errors.password.message}</span>}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="px-4 mb-4">
        <Col>
          <button className="btn btn-primary float-end" type="submit">
            {isLoading ? "loading..." : "Save Change"}
          </button>
        </Col>
      </Row>
    </form>
  );
}
