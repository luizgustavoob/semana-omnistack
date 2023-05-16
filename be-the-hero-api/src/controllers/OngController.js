const connection = require('../database/connection');
const generateUniqueID = require('../utils/generateUniqueID');

module.exports = {

  async insert(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = generateUniqueID();
    await connection('ongs').insert({
      id, name, email, whatsapp, city, uf
    });
    return response.json({ id });
  },

  async findAll(request, response) {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
  }
};