package org.roylance.yaas.services;

import org.roylance.yaas.models.YaasModels;

import java.util.List;

public interface IAuthenticationService {
    boolean userNameExists(final String userName);
    YaasModels.UIAuthentication authenticateUser(final YaasModels.UserModel user);
    YaasModels.UIAuthentication authenticateUser(final String token);
    YaasModels.UIAuthentication registerUser(final YaasModels.UserModel user);
    YaasModels.UIAuthentication changePassword(final YaasModels.UIChangePassword changePassword);
    boolean saveInfo(final YaasModels.UserModel user, final String token);

    // admin functions
    boolean changePasswordForUser(final YaasModels.UserModel user);
    List<YaasModels.UIAuthentication> getAllUsers(final int limit, final int offset);
    boolean isUserAdmin(final YaasModels.UserModel user);
    boolean setUserAsAdmin(final YaasModels.UserModel user);
    boolean removeUserAsAdmin(final YaasModels.UserModel user);
    boolean deleteUser(final YaasModels.UserModel user);
}
