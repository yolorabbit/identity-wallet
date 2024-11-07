import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ethers } from 'ethers'
import { sign } from 'react-native-pure-jwt';
import { ethereumAddressToJwk } from '../utils/web3';

import { IDIDDocument } from '../types/type';

export const useEBSI = () => {
    const [address, setAddress] = useState<string>('');
    const [publicKey, setPublicKey] = useState<string>('');
    const [privateKey, setPrivateKey] = useState<string>('');
    
    useEffect(() => {
        const getMnemonic = async () => {
            const seedPhrase = await AsyncStorage.getItem("seedPhrase");
            if (seedPhrase) {
                const wallet = ethers.Wallet.fromPhrase(seedPhrase);
                setAddress(wallet.address);
                setPublicKey(wallet.publicKey);
                setPrivateKey(wallet.privateKey);
            }
        }
        
        getMnemonic();
    }, []);

    const createDiD = async (type: string, link: string) => {
        const did = `did:ethr:${publicKey}`;
        const didDocument : IDIDDocument =  {
            "@context": "https://www.w3.org/ns/did/v1",
            "id": did,
            "verificationMethod": [
              {
                "id": `${did}#key-1`,
                "type": "EcdsaSecp256k1VerificationKey2019",
                "controller": did,
                "publicKeyHex": publicKey,
              },
            ],
            "authentication": [`${did}#key-1`],
            "service": [
              {
                "id": `${did}#image`,
                "type": type,
                "serviceEndpoint": link
              }
            ]
        };
        
        // console.log('DID Document:', didDocument);

        return { did, didDocument };
    }

    const registerDidOnEBSI = async (didDocument: IDIDDocument) => {
        const jwt = await sign({ sub: didDocument.id, iat: Math.floor(Date.now() / 1000)}, privateKey, {alg: 'HS512'});

        console.log(jwt);
    }

    return { createDiD, registerDidOnEBSI }
}