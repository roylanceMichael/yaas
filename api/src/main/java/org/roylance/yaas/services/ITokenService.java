package org.roylance.yaas.services;

import org.roylance.yaas.models.YaasModels;

public interface ITokenService {
    YaasModels.UIAuthentication generateToken(final YaasModels.UserModel user);
    YaasModels.UIAuthentication validateUser(final String token);
}
