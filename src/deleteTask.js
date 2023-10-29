const AWS = require('aws-sdk')
const deleteTask = async (event)=>{
    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const {id} = event.pathParameters
    await dynamodb.delete({
        TableName:'myTable',
        Key: {_id:id},
    }).promise()
    // console.log('Date id--',{id,res} )
    return {
        status : 200,
        body : JSON.stringify({
            message : 'Task delete satisfactoriamente...'
        })
    }

}
module.exports = {deleteTask}