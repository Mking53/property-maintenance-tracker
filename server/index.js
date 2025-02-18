const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient } = require('@aws-sdk/lib-dynamodb');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Initialize AWS SDK v3
const dynamoDbClient = new DynamoDBClient({ region: 'us-east-1' }); // Update with your region
const dynamoDb = DynamoDBDocumentClient.from(dynamoDbClient);

// Test endpoint
app.get('/', (req, res) => {
  res.send('Property Maintenance Tracker Backend');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});