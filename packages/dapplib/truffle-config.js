require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift rate still horse harvest breeze obscure ghost'; 
let testAccounts = [
"0x22117bd2c7ad00b183e7559404c0d31e6b98a1c141367f4e43b20c4523d5f73a",
"0x31e39bb06e6c950ce3b7247118cb19d3151de6863df36440990df16d357b3934",
"0x5c021da28dcd2840223c8b6e974246b3e1f0d47b8d137d4ca9202d9d81d64df4",
"0x43bc48af34e4091a197e3b54f310e3f7a87c03096e2c11810bc1c01239839479",
"0xe70d056be4d6653a7e7727c02721c3e82326f63533452932032b52845253148a",
"0x82300c0771c0e566a19bdfbc56a18c0e16eb93bb0345b8f9a2e82049f26c7bf6",
"0xbfee077e27d65bd76a157be4e6f7a544156692114ed57b40c9eb6290d87a58b2",
"0xe7933d9a89b20ad9515f595d7900ca2fb4b9b0fda2afaed43a093f0d8e6db7b5",
"0xec85ea9e74e5e907abae156165c06e07979cd1957a7266819a0c2c197373209e",
"0xd6e6c5887505e21bce77b11cd052580ab74c34f28462c3cb2053e5c5ed654e47"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


