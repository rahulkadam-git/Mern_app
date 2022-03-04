import React, { useState, useEffect } from "react";
import {
  registerAction,
  clearResponse,
  clearError,
} from "../../redux/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterForm from "../../component/common/RegisterForm";

export default function Register() {
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const { error, response } = useSelector((state) => state.auth);

  useEffect(() => {
    if (response !== "") {
      console.log(response);
      history.push("/");
      toast.success(response, {
        position: "top-center",
      });
    }
  }, [response, history]);
  useEffect(() => {
    dispatch(clearError());
    dispatch(clearResponse());
  }, [dispatch]);
  useEffect(() => {
    if (error !== "") {
      console.log("first");
      toast.error(error, {
        position: "top-center",
      });
    }
  }, [error]);

  //on form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      surname,
      userType,
      password,
    };

    dispatch(registerAction(newUser));
  };

  let registerData = {
    handleSubmit,
    setUserType,
    setName,
    setPassword,
    setSurname,
  };

  return (
    <div>
      <div id="login" className="App">
        <div className="container">
          <div className="row login-box">
            <RegisterForm registerData={registerData} />
          </div>
        </div>
      </div>
    </div>
  );
}
