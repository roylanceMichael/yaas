package org.roylance.yaas.rest;

import org.jetbrains.annotations.NotNull;
import org.roylance.yaas.enums.UrlTokens;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface IRestAuthenticationService {
    @POST(UrlTokens.FullAuthSave)
    Call<String> save(@NotNull @Body String base64Request);

    @POST(UrlTokens.FullAuthLogin)
    Call<String> login(@NotNull @Body String base64User);

    @POST(UrlTokens.FullAuthAuthenticate)
    Call<String> authenticate(@NotNull @Body String base64Request);

    @GET(UrlTokens.FullAuthExists)
    Call<String> exists(@NotNull @Path("userName") String userName);

    @POST(UrlTokens.FullAuthRegister)
    Call<String> register(@NotNull @Body String base64User);

    @POST(UrlTokens.FullAuthChangePassword)
    Call<String> changePassword(@NotNull @Body String base64ChangePassword);
}
