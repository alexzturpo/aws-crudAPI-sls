const AWS = require('aws-sdk')
const listTask = async(event)=>{
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const data = await dynamodb.scan({
            TableName:'myTable'
        }).promise()
        console.log("data",data)
        const tasks = data.Items
        return {
            status : 200,
            body : tasks
        }
        
    } catch (error) {
        console.log('ERROR--',error)
    }
}

module.exports = { listTask }