package org.roylance.yaas.rest;

import org.jetbrains.annotations.NotNull;
import org.roylance.yaas.enums.UrlTokens;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface IRestUserDeviceService {
    @POST(UrlTokens.FullUserDeviceSave)
    Call<String> save(@NotNull @Body String requestModel);

    @POST(UrlTokens.FullUserDeviceAll)
    Call<String> all(@NotNull @Body String requestModel);
}
