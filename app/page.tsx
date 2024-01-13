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
      <h1>Geo Messaging</h1>
      <div>
          <nav className="nav justify-content-center">
            <a className="nav-link active" aria-current="page" href="#">Inbox</a>
            <a className="nav-link" href="#">Saved</a>
            <a className="nav-link" href="#">Drafts</a>
            <a className="nav-link" href="#">Sent</a>
            <a className="nav-link" href="#">Spam</a>
            <a className="nav-link" href="#">Deleted</a>
          </nav>
      </div>
  </div>
        )
}
