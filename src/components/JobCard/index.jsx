import React, { memo } from 'react';
import {Media, Badge, Row, Col} from 'react-bootstrap';
import './style.scss';
import { Inbox } from 'react-bytesize-icons';

export const JobCard = memo( () => {
    return (
        <>
            <Media className="shadow-sm jobCard my-2 p-3 d-flex align-items-center">
                <div className="jobCardImg rounded shadow-sm bg-secondary">
                    <p>A</p>
                </div>

                <Media.Body>
                    <Row>
                        <Col sm={12} md={5} className="center-all">
                            <div>
                                <p className="title font-weight-bold">
                                    Mulesoft Integration Developer / Jr. Mulesoft Developer
                                </p>
                                <small className="mb-2 d-block">Company Name</small>
                            </div>
                        </Col>

                        <Col sm={12} md={3} className="center-all">
                            <div>
                                <p className="title font-weight-bold">
                                    Full-Time, Remote
                                </p>
                                <small>in Michigan</small>
                            </div>
                        </Col>

                        <Col sm={12} md={3} className="center-all">
                            <div className="d-none d-md-block mr-3">
                                <Badge pill variant="primary">
                                    Mulesoft
                                </Badge>
                            </div>
                        </Col>

                        <Col sm={12} md={1} className="center-all">
                            <div className="d-none d-md-block mr-3">
                                <Inbox width={25} />
                            </div>
                        </Col>

                    </Row>
                </Media.Body>
            </Media>
        </>
    )
});