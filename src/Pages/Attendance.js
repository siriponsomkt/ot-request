import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import * as GrIcons from "react-icons/gr";
import "../App.css";
import Webcam from "react-webcam";
import Map from "./Map";
const WebcamComponent = () => <Webcam />;

function Attendance() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <Container>
      <h1 className="attendance">บันทึกเวลาเข้า-ออกงาน</h1>
      {/* <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      {imgSrc && <img src={imgSrc} />} */}
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Map />
        </div>
      </Row>

      <Row>
        <Table striped bordered hover>
          <thead>
            <tr className="tr">
              <th>วันที่</th>
              <th>เวลา</th>
              <th>สถานะ</th>
              <th>ที่อยู่</th>
              <th>พิกัด</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tbody">
              <td>07/01/2565</td>
              <td>07:59</td>
              <td>Check In</td>
              <td>มทส. นครราชสีมา</td>
              <td>14.2222, 102.5552</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default Attendance;
