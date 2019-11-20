const models = require('./models');

const setup = async () => {

  try {

    // const resultQuery = await models.lods.findAll({
    //   attributes: { exclude: ["createdAt", "updatedAt"] },
    //   include: [{
    //     model: models.versions,
    //     attributes: { exclude: ["updatedAt"] }
    //   }]
    // })

    // const result = resultQuery.map(lod => lod.get({ plain: true }));

    // console.log('result', result);

    // await models.sequelize
    //   .query('SELECT * FROM parts', { raw: true })
    //   .then(([records]) => (records))
    //   .then(console.log);

    const resultQuery = await models.parts.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      // condition against a jsonb field
      where: { customFields: { width: 90 } }
    });

    const result = resultQuery.map(lod => lod.get({ plain: true }));

    console.log('result', result);

  } catch (error) {

    console.error('error', error);

  }

};

setup();
