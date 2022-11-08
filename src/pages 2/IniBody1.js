import React from "react";
import "./body1.css";
import { Card, Col, Row } from "antd";

import { Button } from "antd";
import { KeyOutlined } from "@ant-design/icons";

const IniBody1 = () => {
  return (
    <>
      <div className="body-1">
        <div className="bg-body1">
          <Row gutter={16}>
            <Col span={8}>
              <Card bordered={false}>
                <div className="titleNormal">INFO 1</div>
                <div className="scrollContainer" style={{ overflow: "hidden" }}>
                  <div className="scrollNormal">
                    <p className="textNormal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <div className="titleNormal">INFO 2</div>
                <div className="scrollContainer" style={{ overflow: "hidden" }}>
                  <div className="scrollNormal">
                    <p className="textNormal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <div className="boxNormal">
                  <div className="titleNormal" style={{ textAlign: "center" }}>
                    Join Now
                  </div >
                  <div style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      backgroundColor: "#FCB700",
                      borderRadius: "30pt",
                      height: "40px",
                      fontWeight: "bold",
                      width:"10rem",
                    }}
                    size="large"
                    href="./IniSignUp"
                    type="submit"
                    className="login-form-button1"
                    // onClick={onFinish}
                  >
                    <KeyOutlined rotate={180} />
                    Register
                  </Button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default IniBody1;
