import React,{useState} from 'react'
import web3 from '../Ethereum/web3';
import mail from '../Ethereum/mail';
import Layout from '../Components/Layout';
import {Form, Button, Input, Grid, List,Menu,Label,Header, Segment, Icon} from 'semantic-ui-react';
import ipfs from '../ipfs';



export default function Sent() {
    const [Sent,setSent] = useState([]);
    const [Messagebody,setMessagebody] = useState('');
 
   const outbox = async (event) => {
        
        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            const messages = await mail.methods.sentMessages(accounts[0]).call();
            console.log(messages);
            setSent(messages);
            
        } catch (error) {
            
        }
    }
    outbox();
    return (
        <>
         <Grid.Column width={6} floated="left">
            <Segment stacked>
            <List divided relaxed>
            {Sent.map((msg) => {
                return (
                    <List.Item  onClick={() => {
                        setMessagebody(msg.body)
                    }}>
                    <List.Icon name='envelope' size='large' verticalAlign='middle' />
                    <List.Content>
                    <List.Header as='a'>{msg.subject}</List.Header>
                    </List.Content>
                    </List.Item>)                
                 })}
            </List>
            </Segment>   
            </Grid.Column>
             <Grid.Column width={6} floated="left">
             <Segment stacked>
             <List divided relaxed>
            
             <List.Content><h3>{Messagebody}</h3></List.Content>
             </List>
             </Segment>   
             </Grid.Column>
       </>
    )
}
