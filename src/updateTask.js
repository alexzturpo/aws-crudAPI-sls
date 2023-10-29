const AWS = require('aws-sdk')
const updateTask = async (event)=>{
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const {id} = event.pathParameters
        console.log('Date body--id',id )
        console.log('event.body',event.body )
        const {done,title,description} = JSON.parse(event.body)
        console.log('Date body--',done,title,description)
        await dynamodb.update({
            TableName:'myTable',
            Key: {_id:id},
            UpdateExpression: 'set done = :done, title = :title, decription = :description',
            ExpressionAttributeValues:{
                ':done': done,
                ':title': title,
                ':description': description
            },
            ReturnValues : 'ALL_NEW'
        }).promise()
        return {
            status : 200,
            body : JSON.stringify({
                message : 'Task update satisfactoriamente...'
            })
        }
        
    } catch (error) {
        console.log('Error--', error)
    }

}
module.exports = {updateTask}