const UserModel = require('../models/user_model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./MailService');
const tokenService = require('./TokenService');
const UserDto = require('../dtos/user_dto');

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({ email });

        if (candidate) {
            throw new Error(`Пользователь с почтовым адресом ${email} уже существует`);
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const user = await UserModel.create({ email, password: hashPassword, activationLink });
        await mailService.sendActivationMail(email, activationLink);

        const userDto = new UserDto(user); // _id , email, isActivated
        const { refreshToken, accessToken } = tokenService.generateTokens({ ...userDto });

        await tokenService.saveToken(userDto.id, refreshToken);

        return {
            refreshToken,
            accessToken,
            user: userDto,
        };
    }
}

module.exports = new UserService();
