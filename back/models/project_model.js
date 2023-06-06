const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
    title: { type: String, unique: true, require: true },
    text: { type: String, required: true },
    tags: { type: [String], require: true },

    siteLink: { type: String },
    demoLink: { type: String },
    gitHubLink: { type: String },

    createdDate: { type: String, require: true },
    images: { type: [String], require: false },
    previewImage: { type: String, require: true },
});

module.exports = model('Project', ProjectSchema);
