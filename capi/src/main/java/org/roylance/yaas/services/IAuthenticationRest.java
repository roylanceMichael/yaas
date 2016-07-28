package org.roylance.yaas.services;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface IAuthenticationRest {

    @POST("/rest/authentication/exists")
    Call<String> exists(@Body String request);

    @POST("/rest/authentication/login")
    Call<String> login(@Body String request);

    @POST("/rest/authentication/authenticate")
    Call<String> authenticate(@Body String request);

    @POST("/rest/authentication/register")
    Call<String> register(@Body String request);

    @POST("/rest/authentication/change-password")
    Call<String> change_password(@Body String request);

    @POST("/rest/authentication/save")
    Call<String> save(@Body String request);
}