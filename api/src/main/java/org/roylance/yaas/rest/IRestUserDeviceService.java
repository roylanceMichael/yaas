package org.roylance.yaas.rest;

import org.jetbrains.annotations.NotNull;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface IRestUserDeviceService {
    @POST("/rest/user-device")
    Call<String> save(@NotNull @Body String requestModel);
}