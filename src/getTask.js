const AWS = require('aws-sdk')
const getTask = async(event)=>{
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const {id} = event.pathParameters
        const data = await dynamodb.get({
            TableName: 'myTable',
            Key: {_id:id}
        }).promise()
        // console.log('Date id--',{id,data} )
        const task = data.Item
        return {
            status : 200,
            body : task  
        }
    } catch (error) {
        // console.log('ERROR--', error)
    }
}
module.exports = {getTask}