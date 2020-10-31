import crypto from "crypto";
const encrypt = (data, publicKey) => {
  const encryptedData = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    // We convert the data string to a buffer using `Buffer.from`
    Buffer.from(data)
  );
  console.log("encypted data: ", encryptedData.toString("base64"));
  return encryptedData.toString("base64");
};

const decrypt = (encryptedData, privateKey) => {
  const decryptedData = crypto.privateDecrypt(
    {
      key: privateKey,
      // In order to decrypt the data, we need to specify the
      // same hashing function and padding scheme that we used to
      // encrypt the data in the previous step
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    encryptedData
  );
  console.log("decrypted data: ", decryptedData.toString());
  return decryptedData.toString();
};

// The encrypted data is in the form of bytes, so we print it in base64 format
// so that it's displayed in a more readable form

export { encrypt, decrypt };
