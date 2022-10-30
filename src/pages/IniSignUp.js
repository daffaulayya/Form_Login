import {Form, Button, Checkbox, DatePicker, Input, Select, Card} from "antd";
import React from 'react';
import './signup.css'


const IniSignUp = () => {
    return (
      <Card>
        <div className="register">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg" class="register__logo"/>
          <div className="register__container">
          </div>
        </div>
        <div className="SignUp">
        <header className="signup">
        <h1>Sign Up</h1>
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
              { min: 6 },
            //   {
            //     validator: (_, value) =>
            //       value && value.includes("A")
            //         ? Promise.resolve()
            //         : Promise.reject("Password does not match criteria."),
            //   },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered does not match."
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item name="gender" label="Gender" requiredMark="optional">
            <Select placeholder="Select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please provide your date of birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Chose date of birth"
            />
          </Form.Item>

          <Form.Item
            name="agreement"
            wrapperCol={{ span: 24 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To proceed, you need to agree with our terms and conditions"
                      ),
              },
            ]}
          >
            <Checkbox>
              {" "}
              Agree to our <a href="#">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Register
            </Button>
            <p className="forgot-password text-right">
                Already registered <a href="/IniLogin">sign in?</a>
            </p>
          </Form.Item>
        </Form>
      </header>
    </div>
      </Card>

    )
}

export default IniSignUp 