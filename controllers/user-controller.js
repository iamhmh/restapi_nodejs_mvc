const usersData = {}

exports.getAll = (req, res, next) => {
    models.user.findAll().then(users => {
        res.json(users)
    }).catch(next);
};

exports.get = async (req, res, next) => {
    const id = req.params.userId;
    const user = await models.user.findByPk(id)
        .catch(next);
    if(user) {
        res.json(user);
    } else {
        res.status(404).send(`L'utilisateur avec l'id ${id} n'existe pas`);
    }
};

exports.create = (req, res, next) => {
    models.user.create(req.body).then(u => res.json(u))
        .catch(next);
};

exports.update = (req, res, next) => {
    const newUser = req.body;
    const id = req.params.userId;
    models.user.findByPk(id).then(async (user) =>{
        if(user){
            await models.user.update(newUser, {where: {id: id}})
            res.status(200).send()
        } else {
            res.status(404).send();
        }
    }).catch(next);
};

exports.deleteUser = (req, res, next) => {
    const id = req.params.userId;
    models.user.destroy({where:{id}}).then(res.status(200).send()).catch(next);
};