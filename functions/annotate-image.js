import { headers } from '../lib/functions'
import fetch from 'node-fetch'
import visionRequest from '../lib/vision-request';

const API_KEY = 'AIzaSyDi5-7CWLWUlZ2XvrH8K3QaCybobZ9hD2U'
const API_URL = 'https://vision.googleapis.com/v1/images:annotate'
const VISION_URL = `${API_URL}?key=${API_KEY}`

exports.handler = ({ body }, context, callback) => {
  const { image } = JSON.parse(body)

  fetch(VISION_URL, {
    method: 'POST',
    body: visionRequest(image)
  })
    .then(res => res.json())
    .then(body => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(body),
        headers
      })
    }); 
}