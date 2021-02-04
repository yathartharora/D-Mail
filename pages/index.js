import React, {Component} from 'react';
import web3 from '../Ethereum/web3';
import mail from '../Ethereum/mail';
import Layout from '../Components/Layout';
import {Form, Button, Input, Grid, List,Menu,Label} from 'semantic-ui-react';
import ipfs from '../ipfs';
import { Header, Segment } from 'semantic-ui-react';
import Phonebook from '../Components/Phonebook';

class Mail extends Component{


    constructor(){
        super();
        this.state = {
            show_write: false,
            show_inbox: false,
            show_sent: false,
            addressbook:false,
            show_body: '',
            loading: false,
            errorMessage: '',
            inbox_state:[],
            sent_state:[],
            send_to: '',
            subject: '',
            body: '',
            buffer: null,
            ipfsHash: '',
            load: false,
            active: true,
            curtime : new Date().toLocaleString()
        }
        this.captureFile = this.captureFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.generate = this.generate.bind(this);
        this.display = this.display.bind(this);
        this.outbox = this.outbox.bind(this);
        this.show_write = this.show_write.bind(this);
        this.popcontent = this.popcontent.bind(this);
        this.show_addressbook = this.show_addressbook.bind(this);
    }

    

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading: true, errorMessage:''});
        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            await mail.methods.sendmessage(this.state.subject,this.state.body,this.state.send_to).send({
                from: accounts[0],
                gas: '1000000'
            });
        } catch (error) {
            this.setState({errorMessage: error.errormessage});
        }
        this.setState({loading: false});

    }
    //IPFS Code
    generate(event) {
        event.preventDefault();
        this.setState({load: true});
        ipfs.files.add(this.state.buffer, (err, res) => {
            if(err){
                console.log(err)
                return
            }
            this.setState({ipfsHash: res[0].hash})
            console.log('ipfsHash: ', this.state.ipfsHash);
            alert(`Please copy the generated URL to the mail body, otherwise your file won't be sent`);
        })
        this.setState({active: false, load: false});
        
        
    }
    //IPFS CODE
    captureFile(event) {
        event.preventDefault();
        console.log('Capture File...')

        const file = event.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);

        reader.onloadend = () => {
            this.setState({buffer: Buffer(reader.result)})
            console.log('buffer ',this.state.buffer);
        }
    }

    show_write = () => {
         this.setState({show_write: true});
         this.setState({show_sent: false});
         this.setState({show_inbox: false});
         this.setState({addressbook:false});
    }

    show_addressbook= () => {
        this.setState({show_write: false});
        this.setState({show_sent: false});
        this.setState({show_inbox: false});
        this.setState({addressbook:true});
   }
    //Inbox - display the messages that I have received from others
    display = async (event) => {
        event.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            const messages = await mail.methods.displaymessages(accounts[0]).call();
            console.log(messages);
            this.setState({inbox_state: messages});
            this.setState({show_write: false});
            this.setState({show_sent: false});
            this.setState({show_inbox: true});
            this.setState({addressbook:false});
           
        } catch (error) {
            
        }
    }
   //sent
    outbox = async (event) => {
        event.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            const messages = await mail.methods.sentMessages(accounts[0]).call();
            console.log(messages);
            this.setState({sent_state: messages});
            this.setState({show_write: false});
            this.setState({show_sent: true});
            this.setState({show_inbox: false});
            this.setState({addressbook:false});
        } catch (error) {
            
        }
    }

    popcontent = () => {
        console.log("pop envoked");
    }
    render(){
        return(
            <Layout>
               
                <Grid columns={1}>
                <Grid.Row centered> <Menu inverted size={"massive"} widths={16}>
                <Menu.Item
                name='home'
                /></Menu></Grid.Row>

                <Grid.Row >

                {/*sidebar  improvement - will shift to vertical menu */}
                
               
                <Grid.Column width={4} floated="left">
                <Segment stacked>    
                <Button color='teal' fluid size='large' style={{ margin :"0px 0px 10px 0px" }} onClick={this.display}>Inbox</Button>
                <Button color='teal' fluid size='large' style={{ margin :"0px 0px 10px 0px" }} onClick={this.show_write}>New Mail</Button>
                <Button color='teal' fluid size='large' style={{ margin :"0px 0px 10px 0px" }} onClick={this.outbox}>Sent</Button>
                <Button color='teal' fluid size='large' style={{ margin :"0px 0px 10px 0px" }} onClick={this.show_addressbook}>Address Book</Button>
                
                </Segment>
                </Grid.Column>
             {/*Address Book Column */}
             {this.state.addressbook && <Phonebook/>}
             
                {/*Write mail section */}
               { 
               this.state.show_write && 
               
               <Grid.Column centered width={12}>
                
                <Form >
                    <Segment stacked>
                    

                    <Form.Input fluid
                     label="Receiver Address:"
                     icon='user' 
                     iconPosition='left' 
                     placeholder = "Enter receipient address"
                     value = {this.state.send_to}
                     onChange = {event => this.setState({send_to: event.target.value})}
                      />
                   
                   
                    
                    <Form.Input fluid
                     label="Subject"
                     placeholder = "Enter the Subject"
                     value = {this.state.subject}
                     onChange = {event => this.setState({subject: event.target.value})} />

                     <Form.TextArea 
                     label="Message :"
                     placeholder = "Type your message"
                     value = {this.state.body}
                     onChange = {event => this.setState({body: event.target.value})}/>
  
                    
                    <label>Upload File</label>
                    <br/>
                    <Input 
                        type='file'
                        onChange = {this.captureFile}
                    />
                    <br/><br/>
                    <Button centered  loading={this.state.loading} onClick={this.onSubmit}>Send</Button> 
                    </Segment>  
                </Form>
               
                <Button primary onClick={this.generate}>Generate</Button>
                File URL: https://ipfs.io/{this.state.ipfsHash}
          
                </Grid.Column>
                }

                {/*Inbox display*/}


                { 
                this.state.show_inbox && 
                <>
                <Grid.Column width={6} floated="left">
                <Segment stacked>
                <List divided relaxed>
                {this.state.inbox_state.map((msg) => {
                    return ( 
                        <List.Item onClick={this.popcontent()}>
                        <List.Icon name='github' size='large' verticalAlign='middle' />
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
                <h1>Messges here</h1>
                </List>
                </Segment>   
                </Grid.Column>
                </>}


            { this.state.show_sent 
            && 
            <>
            <Grid.Column width={6} floated="left">
            <Segment stacked>
            <List divided relaxed>
            {this.state.sent_state.map((msg) => {
                return (
                    <List.Item>
                    <List.Icon name='github' size='large' verticalAlign='middle' />
                    <List.Content>
                    <List.Header as='a'>{msg.subject}</List.Header>
                    <List.Description as='a'>{msg.body}</List.Description>
                    </List.Content>
                    </List.Item>)                
                 })}
            </List>
            </Segment>   
            </Grid.Column>
             <Grid.Column width={6} floated="left">
             <Segment stacked>
             <List divided relaxed>
             <h1>Messges here</h1>
             </List>
             </Segment>   
             </Grid.Column></>
            }
            

            </Grid.Row>
            </Grid>
                
            </Layout>
        )
    }
}



export default Mail;