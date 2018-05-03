export default function(image) {
  return JSON.stringify({
    requests:[
      {
        image: {
          source: {
            imageUri: image
          }
        },
        features:[
          {
            type: 'FACE_DETECTION'
          },
          {
            type: 'LABEL_DETECTION'
          }
        ]
      }
    ]
  })
}