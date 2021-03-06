const mongooseSlugs = require('mongoose-document-slugs')
const Schema = require('mongoose').Schema

const organizationSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  phones: { type: [String] },
  emails: { type: [String] }
})

organizationSchema.plugin(mongooseSlugs)

module.exports = organizationSchema
