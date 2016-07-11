package org.roylance.yaas.rest;

import org.jetbrains.annotations.NotNull;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface IRestAuthenticationService {
    @POST("/rest/auth/save")
    Call<String> save(@NotNull @Body String base64Request);

    @POST("/rest/auth/login")
    Call<String> login(@NotNull @Body String base64User);

    @GET("/rest/auth/exists/{userName}")
    Call<String> exists(@NotNull @Path("userName") String userName);

    @POST("/rest/auth/register")
    Call<String> register(@NotNull @Body String base64User);

    @POST("/rest/auth/change-password")
    String changePassword(@NotNull @Body String base64ChangePassword);
}
