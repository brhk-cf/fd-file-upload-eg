import shortid from "shortid";
import { createWriteStream, mkdir, createReadStream } from "fs";
import * as fs from "fs";

const unirest = require('unirest');


// Method #1
const createPrivateNoteWithAttachments = async function (attachment) {
  console.log("createPrivateNoteWithAttachments ")
  const headers = {
    Authorization: apiKey,
    'Content-Type': 'multipart/form-data',
  }

  const fields = {
    body: "Testing file upload...",
    private: true
  }

  return unirest('POST', `https://${domain}.freshdesk.com/api/v2/tickets/${ticketId}/notes`)
    .headers(headers)
    .field(fields)
    .attach('attachments[]', attachment) //fileStream: read stream
    .end(function (response) {
      console.log("Response Body ", response.body)
      console.log("Response Status : " + response.status)
      if (response.status == 201) {
        console.log("Location Header : " + response.headers['location'])
        return response
      }
      else {
        console.log("X-Request-Id :" + response.headers['x-request-id']);
        return response
      }
    });
}

// Method #2
const createPrivateNoteWithStoredFile = async function ({ stream, filename, mimetype }) {
  const file = await storeUpload({ stream, filename, mimetype });

  const _path = "../" + file.path

  try {
    const steam = createReadStream(_path)
    createPrivateNoteWithAttachments(steam)
  }
  catch (e) {
    console.log("Err at reading saved file")
    console.log(e)
  }
}

const storeUpload = async ({ stream, filename, mimetype }) => {
  const id = shortid.generate();
  const path = `images/${id}-${filename}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ id, path, filename, mimetype }))
      .on("error", reject)
  );
};

const processUpload = async upload => {
  console.log('processUpload ')
  const { createReadStream, filename, mimetype } = await upload;
  const stream = createReadStream();

  // Use these methods to updaload file to FD
  // const resp1 = await createPrivateNoteWithStoredFile({ stream, filename, mimetype });
  const resp2 = await createPrivateNoteWithAttachments(stream);

  return true
};

export default {
  Query: {
    hello: () => "Hello world"
  },
  Mutation: {
    uploadFile: async (_, { file }) => {
      mkdir("images", { recursive: true }, err => {
        if (err) throw err;
      });

      const upload = await processUpload(file);
      return upload;
    }
  }
};
