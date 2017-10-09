// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.services;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface IAdminRest {

    @POST("/rest/admin/change-password-for-user")
    Call<String> change_password_for_user(@Body String request);

    @POST("/rest/admin/get-all-users")
    Call<String> get_all_users(@Body String request);

    @POST("/rest/admin/is-user-admin")
    Call<String> is_user_admin(@Body String request);

    @POST("/rest/admin/set-user-as-admin")
    Call<String> set_user_as_admin(@Body String request);

    @POST("/rest/admin/remove-user-as-admin")
    Call<String> remove_user_as_admin(@Body String request);

    @POST("/rest/admin/delete-user")
    Call<String> delete_user(@Body String request);
}