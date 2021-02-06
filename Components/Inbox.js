import React,{useState} from 'react'
import web3 from '../Ethereum/web3';
import mail from '../Ethereum/mail';
import Layout from '../Components/Layout';
import {Form, Button, Input, Grid, List,Menu,Label,Header, Segment, Icon} from 'semantic-ui-react';
import ipfs from '../ipfs';



export default function Inbox() {
    const [Inbox,setInbox] = useState([]);
    const [Messagebody,setMessagebody] = useState('');
  const  display = async (event) => {
        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            const messages = await mail.methods.displaymessages(accounts[0]).call();
           
            await setInbox(messages);
            console.log(Inbox);
        } catch (error) {
            
        }
    }
    display();

    return (
        <>
        <Grid.Column width={6} floated="left">
        <Segment stacked>
        <List divided relaxed>
        
        { Inbox.map((msg,id) => {
            return ( 
                <List.Item  onClick={() => {
                    setMessagebody(msg.body)
                }}>
                <List.Icon name='envelope' size='large' verticalAlign='middle' />
                <List.Content>
                <List.Header as='a'>{msg.sender}</List.Header>
                <List.Description as='a'>{msg.subject}</List.Description>
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
