import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Gitss from './Gitss.css';

function Gits() {
    let [username, setusername] = useState("");
    let [data, setdata]= useState({});

    async function handler(e) {
        e.preventDefault();
        await axios.get(`https://api.github.com/users/${username}`)
            .then((res) => {
                setdata(res.data)
                console.log(res.data)
            })
    }

    return (
        <>
            <div className='heading-style'>
                <h1>GIT Profile Search App</h1>
            </div>

            <div className='div-style'>
                <Form.Group className="mb-3">
                    <Form.Label className='style'>Search User</Form.Label>
                    <Form.Control type="text" placeholder="Profile" value={username} onChange={(e) => setusername(e.target.value)} />
                </Form.Group>
            </div>
            <div className='div-style2'>
                <Button type="submit" className='btn-style' onClick={handler}>Search</Button>
            </div>

            <Card className='div-style3'>    
            <Card.Img variant="top" src={data.avatar_url}/>
                <Card.Body>
                    <Card.Title>Name: {data.name}</Card.Title>
                    <Card.Title>Bio: {data.bio}</Card.Title>
                    <Card.Title>Repos: {data.public_repos}</Card.Title>
                    <Card.Title>Company Name: {data.company}</Card.Title>
                    <Card.Title>Following: {data.following}</Card.Title>
                    <Card.Title>Registered Email: {data.email}</Card.Title>
                    <Card.Title>Location: {data.location}</Card.Title>
                    <Card.Text>
                        Humans have social media<br/>
                        Developers have GITHUB.
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )
}

export default Gits
