const connection = require('../database/connection');

module.exports = {
  
  async insert(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;
    const [id] = await connection('incidents').insert({title, description, value, ong_id});
    return response.json({id});
  },

  async update(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;
    const { title, description, value } = request.body;
    
    const incident = await connection('incidents').where('id', id).select('ong_id').first();
    
    if (incident.ong_id !== ong_id) {
      return response.status(401).json({error: 'Operation not permitted.'});
    }
    
    const incidentUpdated = await connection('incidents').where('id', id).update({title, description, value});
    return response.json(incidentUpdated);
  },

  async findAll(request, response) {
    const { page = 1, size = 5 } = request.query;

    const [count] = await connection('incidents').count();
    console.log(count);

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(size)
      .offset((page - 1) * size)
      .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

    response.header('X-Total-Count', count['count(*)']);
    return response.json(incidents);
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;
    
    const incident = await connection('incidents').where('id', id).select('ong_id').first();
    
    if (incident.ong_id !== ong_id) {
      return response.status(401).json({error: 'Operation not permitted.'});
    }
    await connection('incidents').where('id', id).delete();
    return response.status(204).send();
  },

  async findById(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;
    
    const incident = await connection('incidents').where('id', id).select('*').first();
    
    if (incident.ong_id !== ong_id) {
      return response.status(401).json({error: 'Operation not permitted.'});
    }
    
    return response.json(incident);
  }
}