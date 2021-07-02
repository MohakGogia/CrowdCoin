import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xF6BdBf03Ba19C426f9fDA419780818D3D3915a77'
);

export default instance;