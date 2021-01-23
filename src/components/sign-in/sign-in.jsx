import React from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { googleSignInStart } from "../../redux/user/user.actions";

import "./sign-in.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h2>Ya tengo una cuenta</h2>
        <span>Ingrese con su email y contraseña</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            label="contraseña"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">INGRESAR</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              googleSignIn
            >
              INGRESAR CON GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
