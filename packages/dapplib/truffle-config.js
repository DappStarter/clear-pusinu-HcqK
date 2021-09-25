require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strike deny soap column inside light army genuine'; 
let testAccounts = [
"0xb09b26ae14352a7018b9165e963530b613d9bb8e9f9b7fa2392a7a134e3e7000",
"0xda64e74542cf45a825de0b70e9177e30385f09b8e81164faf43317f63d4084d9",
"0x5bbb75ef93a5c8cab0b207aa6273ff146e1bc8b3fc848126455634b248c6bb29",
"0x06e2902314eff8a5acc71ec6355bb64908406c89bab65428a6e7e256fa4a2e22",
"0x31ff31547097a41ff02da1e03049b877b71a1f37cfc8f9c718950c147ab1a8bd",
"0x0174caf212034588b218f639b6d4640d9f2a2ef471427cfc8e3aedf80f91b201",
"0x9769cdb4bd7a953f8c1fd54edd8ebe69161512f5d59c90ad0fb80052c8b3b189",
"0x7edab490e32bbb94c3eee7d8faba5662b14a0f96388df636e07dfb389eded967",
"0xee47910e1361847b23b14f0df04e2fdac1a5c44b269fa9f4ece78dda3857c8f4",
"0x6bbba18e5735915072365d2cb887ceceb7d97014b4269ad5a52e257ee7bde345"
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


