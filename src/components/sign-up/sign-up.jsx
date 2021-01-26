import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signUpStart } from "../../redux/user/user.actions";
import "./sign-up.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("las contraseñas no coinciden");
      return;
    }

    signUpStart(email, password, displayName);
  };

  return (
    <div className="sign-up">
      <h2 className="title">No tengo una cuenta</h2>
      <span>Regístrate con tu email</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Nombre"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          label="Contraseña"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirmar contraseña"
          required
        />

        <CustomButton type="submit">Registrarse</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
