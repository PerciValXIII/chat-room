const crypto = require("crypto");
const atob = require("atob");
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
  // console.log("encypted data: ", encryptedData.toString("base64"));
  return encryptedData.toString("base64");
};

const decrypt = (encryptedData, privateKey) => {
  encryptedData = _base64ToArrayBuffer(encryptedData);
  const decryptedData = crypto.privateDecrypt(
    {
      key: privateKey,
      // In order to decrypt the data, we need to specify the
      // same hashing function and padding scheme that we used to
      // encrypt the data in the previous step
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    Buffer.from(encryptedData, "base64")
  );
  // console.log("decrypted data: ", decryptedData.toString());
  return decryptedData.toString();
};

function _base64ToArrayBuffer(base64) {
  var binary_string = atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}
exports.encrypt = encrypt;
exports.decrypt = decrypt;

// The encrypted data is in the form of bytes, so we print it in base64 format
// so that it's displayed in a more readable form
