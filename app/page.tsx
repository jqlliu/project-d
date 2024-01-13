import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Home() {
  return (
  <div>
      <h1 align="center">Geo Chat</h1>
      <div>
          <nav className="nav justify-content-center">
            <a className="nav-link active" aria-current="page" href="#">Inbox</a>
            <a className="nav-link" href="#">Saved</a>
            <a className="nav-link" href="#">Drafts</a>
            <a className="nav-link" href="#">Sent</a>
            <a className="nav-link" href="#">Spam</a>
            <a className="nav-link" href="#">Deleted</a>
          </nav>
          <div>
            <table class="table">
              <thead>
                <tr class="table-success">
                  <td scope="col">From</td>
                  <th scope="col">Subject</th>
                  <th scope="col">Preview</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
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
                  <th colspan="2">hihihihihih</th>
                  <td>yooooo</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
  </div>
        )
}
