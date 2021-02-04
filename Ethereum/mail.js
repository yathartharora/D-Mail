import web3 from './web3';
import Mail from './build/Test.json';

const instance = new web3.eth.Contract(JSON.parse(Mail.interface),'0xaaDaaB9e1C8AaE9D8dC84f6522BEfD777d29Ad6B');


export default instance;