package org.roylance.yaas.services.server;

import org.roylance.yaas.models.YaasModels;

import java.util.List;

public interface IUserDeviceService {
    void saveUserDevice(final YaasModels.UserDevice userDevice);
    List<YaasModels.UserDevice> getUserDevices(final YaasModels.User user);
}
