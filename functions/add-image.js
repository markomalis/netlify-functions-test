exports.handler = (event, context, callback) => {
 console.log('HELLOW');
 callback(null, {
   statusCode: 200,
   body: "Hey Hoi"
 })
}