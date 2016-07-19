package org.roylance.yaas.services.server;

import org.roylance.yaas.models.YaasModels;

import java.util.List;

public interface IAuthenticationService {
    boolean userNameExists(final String userName);
    YaasModels.UIAuthentication authenticateUser(final YaasModels.User user);
    YaasModels.UIAuthentication authenticateUser(final String token);
    YaasModels.UIAuthentication registerUser(final YaasModels.User user);
    YaasModels.UIAuthentication changePassword(final YaasModels.UIChangePassword changePassword);
    boolean saveInfo(final YaasModels.User user, final String token);

    // admin functions
    boolean changePasswordForUser(final YaasModels.User user);
    List<YaasModels.UIAuthentication> getAllUsers(final int limit, final int offset);
    boolean isUserAdmin(final YaasModels.User user);
    boolean setUserAsAdmin(final YaasModels.User user);
    boolean removeUserAsAdmin(final YaasModels.User user);
    boolean deleteUser(final YaasModels.User user);
}
