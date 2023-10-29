const {v4} = require('uuid')
const AWS = require('aws-sdk')
// const JSON = require('json') 
module.exports.addTask = async(event)=>{ 
    try {
        const {title, description} = JSON.parse(event.body) 
        // console.log("body DATA",title,description)
        const createdAt = new Date().toISOString();
        const _id = v4()
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const newData = { _id,title,description,createdAt,done:false }
        // console.log("newData DATA",newData)
    
        const resAws =await dynamodb.put({
            TableName: 'myTable',
            Item: newData
        }).promise()
        // console.log("resAws",resAws)
        return {
            status : 200,
            // body : JSON.stringify(newData)
            body : newData
        }
        
    } catch (error) {
        console.log('Error--', error)
    }
}
// module.export = {addTask}