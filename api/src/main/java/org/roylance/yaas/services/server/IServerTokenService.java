package org.roylance.yaas.services.server;

import org.roylance.yaas.models.YaasModels;

public interface IServerTokenService {
    YaasModels.UIAuthentication generateToken(final YaasModels.User user);
    YaasModels.UIAuthentication validateUser(final String token);
}
