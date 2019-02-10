import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import { Nav, NavItem, Tab, Col, Row } from 'react-bootstrap';

class Payment extends Component {
        
  render() {
    return (
        <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
         <Row>
            <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <NavItem>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </NavItem>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    Mine eye hath play'd the painter and hath stell'd, Thy beauty's form in table of my heart; My body is the frame wherein 'tis held, And perspective it is best painter's art. For through the painter must you see his skill, To find where your true image pictur'd lies, Which in my bosom's shop is hanging still, That hath his windows glazed with thine eyes. Now see what good turns eyes for eyes have done: Mine eyes have drawn thy shape, and thine for me
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    Mine eye hath play'd the painter and hath stell'd, Thy beauty's form in table of my heart; My body is the frame wherein 'tis held, And perspective it is best painter's art. For through the painter must you see his skill, To find where your true image pictur'd lies, Which in my bosom's shop is hanging still, That hath his windows glazed with thine eyes. Now see what good turns eyes for eyes have done: Mine eyes have drawn thy shape, and thine for me
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
     </Tab.Container>
     </div>
    );
  }
}
export default Payment;
Payment.contextTypes = {
  router: PropTypes.object
};