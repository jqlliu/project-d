import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Children, useState } from 'react';

//Example of hook or smthing

function TopBarItem({ children }: React.PropsWithChildren) {
  return (<li className="nav-item">
    <a className="nav-link" href="#" >{children}</a>
  </li>)
}

function Col({ children }: React.PropsWithChildren) {
  return (<th scope="col">{children}</th>)
}
function Msg(content: { from: string, subject: string, message: string, date: string }) {
  return (<tr>
    <td scope="row">{content.from}</td>
    <th>{content.subject}</th>
    <td>{content.message}</td>
    <td>{content.date}</td>
  </tr>)
}
//NOTE TO CAR: Please add a send button and send interface, also make your tavs into seperate functions
//Sending missiles to iraq
export default function Home() {
  return (
    <div>
      <h1 className="text-center">Geo Chat</h1>

      <div className="d-grid gap-2 col-4 mx-auto">
        <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          SEND MESSAGE
        </button>
      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledBy="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              hi
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inbox</a>
          </li>
          {//Please do this in the future
            //Clean! Code! Yay!
            //
          }
          <TopBarItem>Saved</TopBarItem>
          <TopBarItem>Draft</TopBarItem>
          <TopBarItem>Sent</TopBarItem>
          <TopBarItem>Spam</TopBarItem>
          <TopBarItem>Deleted</TopBarItem>
        </ul>
        <div>
          <table className="table table-hover">
            <thead className="table-success">
              <tr>
                <Col>From</Col>
                <Col>Subject</Col>
                <Col>Preview</Col>
                <Col>Date</Col>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {/* <tr>
                  <td scope="row">me</td>
                  <th>wait this actually worked???</th>
                  <td>no way</td>
                  <td>today</td>
                </tr> */}
              <Msg {...{ from: "BLEHH", subject: "GAHHHH", message: "BARRRHH", date: "NAYYY" }}></Msg>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
