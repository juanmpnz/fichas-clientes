import React, { useState } from "react";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../redux/action-creators/users";

function NavContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.currentUser);
  const [validation, setValidation] = useState("");

  const logoutOk = {
    msg: "Cerraste tu sesión",
    key: Math.random(),
    type: "success",
  };

  const error = {
    msg: "Ocurrio un error",
    key: Math.random(),
    type: "danger",
  };
  const handleLogout = async () => {
    dispatch(logout()).then((rta) => {
      if (rta === "err") {
        setValidation(error);
      } else {
        setValidation(logoutOk);
        setTimeout(function () {
          setValidation("");
          history.push("/");
        }, 2000);
      }
    });
  };

  return (
    <Nav
      handleLogout={handleLogout}
      currentUser={currentUser}
      validation={validation}
    />
  );
}

export default NavContainer;
