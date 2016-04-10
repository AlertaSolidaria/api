import queryModifier from 'get-query-modifier';

export default class Model {

  constructor(SchemaModel) {
    this.SchemaModel = SchemaModel;
  }

  create(input) {
    const newSchemaModel = new this.SchemaModel(input);
    return newSchemaModel.saveAsync();
  }

  update(id, updatedModel) {
    if (!id) throw new Error('Missing id parametter');
    return this.SchemaModel.findByIdAndUpdate(id, updatedModel, { new: true })
      .execAsync();
  }

  find(query) {
    const modifier = queryModifier(query);
    return modifier(this.SchemaModel.find(query).lean())
      .execAsync();
  }

  findOne(query, populate) {
    return this.SchemaModel.findOne(query)
      .populate(populate || '')
      .execAsync();
  }

  findById(id, populate) {
    if (!id) throw new Error('Missing id parametter');
    return this.SchemaModel
      .findById(id)
      .populate(populate || '')
      .execAsync();
  }

  remove(id) {
    if (!id) throw new Error('Missing id parametter');
    return this.SchemaModel.findByIdAndRemove(id)
      .execAsync();
  }
}
