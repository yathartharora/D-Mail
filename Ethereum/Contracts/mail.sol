pragma solidity 0.4.25;
pragma experimental ABIEncoderV2;

contract Test{
    
    struct Text{
        address sender;
        string subject;
        string body;
    }
    
    struct Inbox{
        string subject;
        string body;
    }
    
    struct Book{
        string name;
        address addressHash;
    }
    mapping (address => Text[]) public text;
    mapping (address => Inbox[]) public inbox;
    mapping( address => Book[]) public book;
    
    function sendmessage(string s, string b, address receiver) public{
        text[receiver].push(Text(msg.sender,s,b));
        inbox[msg.sender].push(Inbox(s,b));
    }
    
    function displaymessages(address s) public view returns(Text[]){
        return text[s];
    }
    
    function sentMessages(address s) public view returns(Inbox[]){
        return inbox[s];
    }
    
    function addToAddressBook(string n, address s) public {
        book[msg.sender].push(Book(n,s));
    }
    
    function myaddressBook(address s) public view returns(Book[]) {
        return book[s];
    }
}