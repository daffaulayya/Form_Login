import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import "./login.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { KeyOutlined } from "@ant-design/icons";
import styled from "styled-components";

const IniLogin = () => {
  let history = useHistory();

  const [form, setForm] = useState({
    companyID: "",
    userID: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const onFinish = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);

    if (
      form.userID === "admin" &&
      form.password === "admin" &&
      form.companyID === "admin"
    ) {
      history.push("/Dashboard1");
    } else {
      setModalShow(true);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleErrorOk = () => {
    setModalShow(false);
  };

  return (
    <Form
      onFinishFailed={onFinishFailed}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
      <div className="logoKopra">
        <img src="/images/logo-kopra.png" style={{ width: "50%" }} />
      </div>
      <Form.Item
        className="FormCompany"
        name="companyID"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          style={{
            outlineStyle: "none",
            borderColor: "#a3c3e7",
            borderRadius: "10px",
            width: "300px",
            height: "50px",
          }}
          placeholder="CompanyID"
          onChange={handleInputChange}
          name="companyID"
        />
      </Form.Item>
      <Form.Item
        name="userID"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          style={{ borderRadius: "10px", width: "300px", height: "50px" }}
          placeholder="UserID"
          onChange={handleInputChange}
          name="userID"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          style={{ borderRadius: "10px", width: "300px", height: "50px" }}
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          name="password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          style={{
            backgroundColor: "#FCB700",
            borderRadius: "30pt",
            height: "40px",
            fontWeight: "bold",
          }}
          size="large"
          href=""
          type="submit"
          className="login-form-button"
          onClick={onFinish}
        >
          <KeyOutlined rotate={180} />
          login
        </Button>
      </Form.Item>
      <p className="LogDaftar">
        Don't have an account? <a href="./IniSignUp"> Sign Up.</a>
      </p>
    </Form>
  );
};

export default IniLogin;

const Inputz = styled.input`
  height: 35pt;
  padding: 5pt 8pt;
  outline-style: none;
  border-color: #a3c3e7;
  min-width: 200pt;
  width: 100%;
  border-radius: 8pt;
  //
`;

// import { Button, Checkbox, Form, Input, Modal } from "antd";
// import React, { useState } from "react";
// import "./login.css"

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   useHistory,
// } from "react-router-dom";
// import {
//   LockOutlined,
//   UserOutlined,
//   BankOutlined,
//   KeyOutlined,
// } from "@ant-design/icons";
// import styled from "styled-components";

// const IniLogin = () => {
//   let history = useHistory();

//   const [form, setForm] = useState({
//     companyID: "",
//     userID: "",
//     password: "",
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [modalShow, setModalShow] = useState(false);

//   const onFinish = () => {

//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 100);

//     if (form.userID === "admin" && form.password === "admin" && form.companyID === "admin") {
//       history.push("/Dashboard1");

//     } else {
//       setModalShow(true);
//     }
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   const handleInputChange = (e) => {
//     setForm({...form, [e.target.name]: e.target.value,
//     });
//   };

//   const handleErrorOk = () => {
//     setModalShow(false);
//   };

//   return (
//     <Form

//       onFinishFailed={onFinishFailed}
//       name="normal_login"
//       className="login-form"
//       initialValues={{
//         remember: true,
//       }}
//     >
//       <Form.Item
//         className="FormCompany"
//         name="companyID"
//         rules={[
//           {
//             required: true,
//             message: "Please input your Username!",
//           },
//         ]}
//       >
//         <Input
//           prefix={<BankOutlined className="site-form-item-icon" />}
//           style={{
//             outlineStyle: "none",
//             borderColor: "#a3c3e7",
//             borderRadius: "10px",
//             width: "300px",
//             height: "50px",
//           }}
//           placeholder="CompanyID"
//           onChange={handleInputChange}
//           name="companyID"
//         />
//       </Form.Item>
//       <Form.Item
//         name="userID"
//         rules={[
//           {
//             required: true,
//             message: "Please input your Username!",
//           },
//         ]}
//       >
//         <Input
//           prefix={<UserOutlined className="site-form-item-icon" />}
//           style={{ borderRadius: "10px", width: "300px", height: "50px" }}
//           placeholder="UserID"
//           onChange={handleInputChange}
//           name="userID"
//         />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: "Please input your Password!",
//           },
//         ]}
//       >
//         <Input
//           prefix={<LockOutlined className="site-form-item-icon" />}
//           style={{ borderRadius: "10px", width: "300px", height: "50px" }}
//           type="password"
//           placeholder="Password"
//           onChange={handleInputChange}
//           name="password"
//         />
//       </Form.Item>

//       <Form.Item>

//           <Button
//             style={{ backgroundColor: "#FCB700", borderRadius: "20px", height: "40px", fontWeight: "bold", }}
//             size="large"

//             type="submit"
//             className="login-form-button"
//             onClick={onFinish}
//           >
//             <KeyOutlined rotate={180} spin />
//             Log in
//           </Button>

//          <a href=""> or register now!</a>
//       </Form.Item>
//     </Form>
//   );
// };

// export default IniLogin;

// const Inputz = styled.input`
//   height: 35pt;
//   padding: 5pt 8pt;
//   outline-style: none;
//   border-color: #a3c3e7;
//   min-width: 200pt;
//   width: 100%;
//   border-radius: 8pt;
// `;
