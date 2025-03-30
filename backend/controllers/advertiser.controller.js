const Anunciante = require('../schemas/Anunciante');
const {sequelize, Sequelize} = require('../schemas/index');

async function getAllAdvertisers(req, res) {
    try{
        const userModel = Anunciante(sequelize, Sequelize.DataTypes);
        const advertisers = await userModel.findAll();
        res.send(advertisers);
    }
    catch(error){
        res.status(500);
    }
}

async function createAdvertiser(req, res) {
    const { email, phone, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).send('Las contraseñas no coinciden');
    }
    try {
      const UserModel = Anunciante(sequelize, Sequelize.DataTypes);
      const newAdvertiser = await UserModel.create({ email,  phone, password });
      res.status(201).send('Usuario creado exitosamente');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

async function loginAdvertiser(req, res) {
    const { email, password } = req.body;
    try{
        const userModel = Anunciante(sequelize, Sequelize.DataTypes);
        const advertiser = await
        userModel.findOne({ where: {email}});
        if(!user){
            res.status(404).send('Usuario no encontrado');
        }
        if(user.password !== password){
            res.status(400).send('Contraseña incorrecta');
        }
        res.send('Usuario logueado exitosamente');
    }
    catch(error){
        res.status(500).send(error.message);
    }
};

async function updateAdvertiser(req, res) {
    const { email, password, newPassword, confirmNewPassword} = req.body;

    const userModel = Anunciante(sequelize, Sequelize.DataTypes);
    if(password !== userModel.password){
        res.status(400).send('Las contraseñas no coinciden');
    }
    try{
        const userModel = Anunciante(sequelize, Sequelize.DataTypes);
        const advertiser = await Anunciante.findOne({where :{email}});
        if(!advertiser){
            res.status(404).send('Usuario no encontrado');
        }

        if(newPassword && confirmNewPassword){
            if(newPassword !== confirmNewPassword){
                return res.status(400).send('Las contraseñas no coinciden');
            }
            await userModel.update({password}, {where:{email}});
            return res.send('Contraseña actualizada exitosamente');
        }
        res.send('Usuario actualizado exitosamente');
    }
    catch(error){
        res.status(500).send(error.message);
    }
}

async function deleteAdvertiser(req, res) {
    const { email } = req.body;
    try{
        const userModel = Anunciante(sequelize, Sequelize.DataTypes);
        const user = await Anunciante.findOne({where:{email}});
        if(!user){
            res.status(404).send('Usuario no encontrado');
        }
        await userModel.destroy({where:{email}});
        res.send('Usuario eliminado exitosamente');
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


module.exports = { getAllAdvertisers, createAdvertiser, updateAdvertiser, deleteAdvertiser, loginAdvertiser };