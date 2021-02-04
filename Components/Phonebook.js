import React,{useState} from 'react'
import web3 from '../Ethereum/web3';
import mail from '../Ethereum/mail';
import Layout from '../Components/Layout';
import {Form, Button, Input, Grid, List,Menu,Label,Header, Segment, Icon} from 'semantic-ui-react';
import ipfs from '../ipfs';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function Phonebook() {
    const [Name,setName] = useState([]);
    const [Address,setAddress] = useState([]);
    const [Book,setBook] = useState(false);
    const [Addresslist,setAddresslist] = useState([]);

    const myaddressBook = async(event) => {
        event.preventDefault();
        try{
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            const addressbook = await mail.methods.myaddressBook(accounts[0]).call();
            console.log(addressbook);
            setAddresslist(addressbook);
        } catch(error){

        }
    }

    const addtoBook = async (event) => {
        event.preventDefault();
        setBook(true);
        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            await mail.methods.addToAddressBook(Name, Address).send({
                from: accounts[0],
                gas: '1000000'
            })
        } catch (error) {
            
        }
        setBook(false);
    }

    return (
        
             <Grid.Column width={12}>
             <Form>
                    <label>Add to PhoneBook</label>
                    <Input 
                        placeholder="Name"
                        value = {Name}
                        onChange = {event => setName(event.target.value)}
                    />
                       
                    <Input 
                        placeholder="Address"
                        value = {Address}
                        onChange = {event => setAddress( event.target.value)}
                    />
                    <Button primary loading={Book} floated="right" onClick={addtoBook}>Add to PhoneBook</Button>
                    <br/>
                    <Button secondary floated="right"  onClick={myaddressBook}>My AddressBook</Button>
                    <br/>
                </Form>
                {Addresslist.map((add) => {
                return (
                    <>
                    <Header as='h4' attached='top' block>
                 {add.name}
                </Header>
                <Segment attached>{add.addressHash}
                <CopyToClipboard text={add.addressHash}>
                <Button icon compact floated="right">
                     <Icon size="large" fitted right name="copy outline"/>
                </Button>
                </CopyToClipboard>
                </Segment>
                </>
                    )                
                 })}

                
                </Grid.Column> 
       
    )
}
