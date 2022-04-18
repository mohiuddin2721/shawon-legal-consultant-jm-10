import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <CardGroup className='container mt-5'>
            <Card className='m-4' border="warning">
                <Card.Footer className='border question'>
                    <Card.Title className='fs-6'>What's the Difference between authorization and authentication?</Card.Title>
                </Card.Footer>
                <Card.Body className='border'>
                    <Card.Text>
                    In simple terms, authentication is the process of verifying who a user is, while authorization is the process of verifying what they have access to.
                    <br />
                    <span className='fs-4 bold'>Authentication :</span>
                    <br />
                    Authentication is about validating our credentials like User Name/User ID and password to verify our identity. We use the OpenID Connect protocol for that. We can manage our authentication by clicking on our Account link in the upper right corner.
                    <br />
                    <span className='fs-4 bold'>Authorization :</span>
                    <br />
                    On the other hand, Authorization, occurs after our identity is successfully authenticated by cloudHQ. Then we can give permission to cloudHQ to access the resources such as files, emails. This is handled with the OAuth2 protocol. In simple terms, authorization gives our system the ability to access your data in the cloud. So you need to authorize access of Box and Google Drive as admin@. The authorizations are done under the Cloud Accounts tab.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='m-4' border="warning">
                <Card.Footer className='border question'>
                    <Card.Title className='fs-6'>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                </Card.Footer>
                <Card.Body className='border'>
                    <Card.Text>
                    Firebase is used for many purposes that can help our apps to develop, grow and make it a quality app. Moreover, Firebase is made with a developer in mind to solve all the issues they might face when making an app.
                    <br />
                    Authentication the firebase server authentication is the feature most apps requre to recngnige the identity of the user. This authentication solution provides backend services, easy-to-use firebase SDK's, and ready-made UI libraries to authenticate users to your app. Google Firebase is free for you to use up to 30 project's. It's also user friendly for beginners. There are many things alredy made here which makes it convenient to use. Here it is free hosting advantage.
                    <br />
                    <span className='fs-4 bold'>Others Option :</span>
                    <br />
                    Parse : Open Source Backend Platform;
                    <br />
                    Back4app : Parse Hosting Platform;
                    <br />
                    Kinvey : Mobile Backend as a Service (mBaaS) for the Enterprise;
                    <br />
                    Backendless : Mobile Backend and API Services Platform;
                    <br />
                    Also Kuzzle, Pubnub, Kumulos, Hoodie.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default Blog;