package org.roylance.yaas.rest;

import org.jetbrains.annotations.NotNull;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface IRestAdminService {
    @POST("/rest/admin/all-users")
    Call<String> allUsers(@NotNull @Body String base64Request);

    @POST("/rest/admin/is-admin")
    Call<String> isAdmin(@NotNull @Body String base64Request);

    @POST("/rest/admin/set-admin")
    Call<String> setAdmin(@NotNull @Body String base64Request);

    @POST("/rest/admin/remove-admin")
    Call<String> removeAdmin(@NotNull @Body String base64Request);

    @POST("/rest/admin/delete-user")
    Call<String> deleteUser(@NotNull @Body String base64Request);

    @POST("/rest/admin/change-password")
    Call<String> changePassword(@NotNull @Body String base64Request);
}
