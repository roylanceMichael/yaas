package org.roylance.yaas.services;

import org.roylance.yaas.models.YaasModels;

public interface ITokenService {
    YaasModels.UIAuthentication generateToken(final YaasModels.User user);
    YaasModels.UIAuthentication validateUser(final String token);
}
