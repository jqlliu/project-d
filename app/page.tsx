import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


//NOTE TO CAR: Please add a send button and send interface, also make your tavs into seperate functions
export default function Home() {
  return (
  <div>
      <h1 className = "text-center">Geo Chat</h1>

      <div className="d-grid gap-2 col-4 mx-auto">
        <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            SEND MESSAGE
        </button>
      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledBy="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
          <li className="nav-item">
            <a className="nav-link" href="#">Saved</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Drafts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sent</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Spam</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Deleted</a>
          </li>
        </ul>
          <div>
            <table className="table table-hover">
              <thead className="table-success">
                <tr>
                  <th scope="col">From</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Preview</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <td scope="row">me</td>
                  <th>wait this actually worked???</th>
                  <td>no way</td>
                  <td>today</td>
                </tr>
                <tr>
                  <td scope="row">you</td>
                  <th>some other stuff</th>
                  <td>woah cool blah blah I also changed the colour wow</td>
                  <td>Jan 13</td>
                </tr>
                <tr>
                  <td scope="row">Bob Bobbington</td>
                  <th>hihihihihih</th>
                  <td> </td>
                  <td>yooooo</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td scope="row">a</td>
                  <th>b</th>
                  <td>c</td>
                  <td>d</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
  </div>
        )
}
