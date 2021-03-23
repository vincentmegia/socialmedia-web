import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { IPostPanelProps } from './postpanel-types';
import './PostPanel.css';


const PostPanel = ({serviceContext, user}: IPostPanelProps) => {
    const { message, postService } = serviceContext;

    useEffect(() => {    
        // postService.getByUserId("1");
    });

    return (
        <div id="postpanel" style={{ backgroundColor: 'blue' }}>
            <ul className="postpanelliststyle">
                <li className="postpanellistitem">
                    <Container>
                        <Row>
                            <Col sm={11}>Latest Tweeze</Col>
                            <Col sm={1}>
                                <i className="fas fa-splotch fa-2x"></i>
                            </Col>
                        </Row>
                    </Container>
                </li>
                <li>
                    <Card style={{ width: '100%', marginBottom: '10px' }}>
                        <Card.Body>
                            <Card.Title>
                                {/* {posts[0].title} */}
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Card Subtitle
                            </Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card's
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </li>
                <li>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>
                                rops.postPanelProps.posts[0].title
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Card Subtitle
                            </Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card's
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </li>
            </ul>
        </div>
    )
}

export default PostPanel
