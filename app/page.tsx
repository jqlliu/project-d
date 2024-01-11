import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Home() {
  return (
  <div class="text-center">
  <nav class="nav justify-content-center">
    <a class="nav-link active" aria-current="page" href="#">Inbox</a>
    <a class="nav-link" href="#">Saved</a>
    <a class="nav-link" href="#">Drafts</a>
    <a class="nav-link" href="#">Sent</a>
    <a class="nav-link" href="#">Spam</a>
    <a class="nav-link" href="#">Deleted</a>
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </nav>
  </div>)
}
