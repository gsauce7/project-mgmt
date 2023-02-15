const mongoose = require('mongoose');

// Create a mongoose schema, which is not related to a graphql schema

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    },
});

module.exports = mongoose.model('Project', ProjectSchema);