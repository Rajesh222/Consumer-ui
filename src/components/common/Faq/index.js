import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  './index.scss';
import { Grid, Row } from 'react-bootstrap';
import {Accordion,AccordionItem,AccordionItemTitle,AccordionItemBody,} from 'react-accessible-accordion';

class Faq extends React.Component {
  render() {
    return(
      <Grid> 
        <Row><h3>Frequently Asked Questions</h3>
           <Accordion>
                <AccordionItem>
                    <AccordionItemTitle>
                        <span>GENERAL</span>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <strong>What are the advantages of purchasing a bus ticket with redBus?</strong>
                        <p> digital is India’s largest bus tickets company and therefore, you will find the largest option of bus seats on the site. Some of the advantages of dealing with us are: <br/> <br/>
                         -&nbsp;&nbsp;&nbsp; You can choose your seat<br/>
                         -&nbsp;&nbsp; &nbsp;You can book your bus tickets online, by phone, or in person<br/>
                         -&nbsp;&nbsp;&nbsp; You can choose from over 1500+ bus operators<br/>
                         -&nbsp;&nbsp;&nbsp; You can choose from buses based on boarding points, timing and bus type </p>
                         <strong>Do I need to register to use digital bihar?</strong>
                         <p>No, digital bihar does not require its customers to go through a registration process</p>
                         <strong>Does booking online cost me more?</strong>
                         <p>Not at all! The price of the bus ticket is the same as you would get from the bus operator too.The price of hotel voucher is the same or sometimes discounted depending on the season/time.</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <span>TICKET-RELATED</span>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <strong>Is it mandatory to take a printout of the ticket?</strong><br/><br/>
                        <p> It depends on the bus operator you have booked your ticket with. Even mTickets are available on redBus. For operators that support mTickets, the SMS that is sent to your mobile can be produced at the time of boarding and you will be allowed to travel. </p>
                        <p>For operators that do not support mTickets it is a must to take a printout of the e-ticket and produce it at the time of boarding. The e-ticket is sent to the e-mail ID provided at the time of boarding.</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <span>PAYMENT-RELATED</span>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <strong>Does the owner of the credit card with which the ticket is purchased need to be one of the passengers?</strong><br/><br/>
                        <p> Not at all! A passenger can use any card to pay for the ticket, not necessarily their own. However, please note that the passenger in whose name the ticket is booked should carry a proof of his identity (along with the ticket) at the time of boarding the bus.</p>
                        <strong>What payment options do I have?</strong><br/><br/>
                        <p> The different payment options are </p>
                        <ul>
                            <li>Credit card</li> 
                            <li>Debit card</li>
                            <li>Internet banking (Internet enabled online bank account)</li>
                            <li>Wallets </li>
                        </ul>
                     </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <span>CANCELLATION-RELATED</span>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                     <strong>Can I cancel my ticket online?</strong>
                     <p> Most of the tickets can be cancelled online. However, there are some tickets that can only be cancelled through our call center. <br/> <br/> </p>
                     <p>However please note that the cancellation fee and cancellation period may differ for specific bus services. Please contact any of our executives for cancellation details on any specific service.<br/></p> 
                     <strong> How can I cancel my bus ticket online?</strong>
                     <p>You need to click on the cancellation link provided on our home page. Enter your ticket number and the e-mail ID that was provided at the time of booking and click on cancel ticket.</p>
                     </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <span>REFUND-RELATED</span>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      <strong> I missed the bus. Do I get a refund?<br/></strong>
                      <p> digital bihar provides a 100% refund if the bus is missed due to either digtal bihar or its’ partner company's fault. However, if the bus is missed due to any other reason not directly related to redBus no refund is provided. <br/> <br/> </p>
                      <strong>How can I get a refund in case I cancel my ticket?</strong>
                      <p> The refund is provided as per with our cancellation policy. The refund can be credited to the source of payment (Example: debit card, credit card, net banking) or credited to redBus wallet. Wallet credit can be used for bus booking in future (within 6 months of cancellation).<br/> </p>
                     </AccordionItemBody>
                </AccordionItem>
           </Accordion>
        </Row>
      </Grid>
    );
   }
}

export default Faq;
Faq.contextTypes = {
  router: PropTypes.object
};
