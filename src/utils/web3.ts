import base64url from 'base64url'

async function ethereumAddressToJwk(publicKey: string) {
    // Get the uncompressed public key as a hex string (remove the '0x04' prefix)
    const publicKeyHex = publicKey.slice(4);

    // Split the public key hex string into x and y coordinates
    const xHex = publicKeyHex.slice(0, 64);
    const yHex = publicKeyHex.slice(64);

    // Convert x and y to bytes, then to Base64URL
    const xBase64Url = base64url(Buffer.from(xHex, 'hex'));
    const yBase64Url = base64url(Buffer.from(yHex, 'hex'));

    // Create the JWK
    const jwk = {
        kty: "EC",
        crv: "secp256k1",
        x: xBase64Url,
        y: yBase64Url
    };

    return jwk;
}

export {
    ethereumAddressToJwk
}