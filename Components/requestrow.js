import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';

class RequestRow extends Component{

    render(){
        const {Row, Cell} = Table;
        return (
            <Row>
                <Cell>{this.props.id + 1} </Cell>
                <Cell>{this.props.request.sender} </Cell>
                <Cell>{this.props.request.subject}</Cell>
                <Cell>{this.props.request.body}</Cell>
            </Row>
            
        );
    }
}

export default RequestRow;