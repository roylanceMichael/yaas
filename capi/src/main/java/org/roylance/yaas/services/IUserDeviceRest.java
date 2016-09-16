// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.yaas.services;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface IUserDeviceRest {

    @POST("/rest/userdevice/save")
    Call<String> save(@Body String request);

    @POST("/rest/userdevice/all")
    Call<String> all(@Body String request);
}