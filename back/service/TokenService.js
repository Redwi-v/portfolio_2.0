const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token_model');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_ACCESS_SECRET, { expiresIn: '5d' });

        return {
            accessToken,
            refreshToken,
        };
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({ userId });

        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }

        const token = await tokenModel.create({ userId: userId, refreshToken });
        return token;
    }
}

module.exports = new TokenService();
