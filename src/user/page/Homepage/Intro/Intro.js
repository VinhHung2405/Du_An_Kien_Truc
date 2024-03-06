import { Col, Row, } from 'antd'
import Card from 'antd/es/card/Card'
import Meta from 'antd/es/card/Meta'
import React from 'react'

export default function Intro() {

  return (

    <div >
      <div>
        <div className="flex justify-center w-full">
          <div className="text-center">
            <h1 style={{ fontSize: '32px' }}>Our team</h1>
            <div className="container">
              <Row justify="space-between">
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ height: 360, width: "100%" }}
                    cover={
                      <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        backgroundColor: "#F8F6F9"
                      }}>
                        <img className='' style={{ borderRadius: "50%", width: "50%", marginTop: "20px", marginBottom: "20px" }} alt="example" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />
                      </div>
                    }
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />

                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ height: 360, width: "100%" }}
                    cover={
                      <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        backgroundColor: "#F8F6F9"
                      }}>
                        <img className='' style={{ borderRadius: "50%", width: "50%", marginTop: "20px", marginBottom: "20px" }} alt="example" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />
                      </div>
                    }
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />

                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ height: 360, width: "100%" }}
                    cover={
                      <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        backgroundColor: "#F8F6F9"
                      }}>
                        <img className='' style={{ borderRadius: "50%", width: "50%", marginTop: "20px", marginBottom: "20px" }} alt="example" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />
                      </div>
                    }
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />

                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

