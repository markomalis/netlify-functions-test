import S3 from 'aws-sdk/clients/s3'

import { config } from '../lib/functions'

const s3 = new S3({ 
  endpoint: 'https://s3.eu-central-1.amazonaws.com', 
  signatureVersion: 'v4',
  region: 'eu-central-1'
})

export function handler(event, context, callback) {
  if(event.httpMethod !== 'POST') {
    return
  }

  const image = JSON.parse(event.body)

  const signedUrl = s3.getSignedUrl('putObject', {
    Bucket: 'pick-up-10',
    Key:  image.name,
    ContentType: image.type
  })

  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8080',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
    body: JSON.stringify({ signedUrl })
  })
}

function handleUpload(err, data) {
  if(err) {
    console.log('Error', err)
  }
  else {
    console.log('Data', data)
  }
}

function getUrlHandler(err, url) {
  if(err) {
    console.log('Error', err)
  }
  else {
    console.log('URL', url)
  }
}