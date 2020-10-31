const crypto = require("crypto");
const atob = require("atob");
const { publicKey, privateKey } = require("crypto").generateKeyPairSync("rsa", {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});
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
    Buffer.from(encryptedData)
  );
  // console.log("decrypted data: ", decryptedData.toString());
  return decryptedData.toString();
};
var data = "Encryptede Message";
data = encrypt(data, publicKey);
console.log(data);
console.log(decrypt(data, privateKey));

function _base64ToArrayBuffer(base64) {
  var binary_string = atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}
