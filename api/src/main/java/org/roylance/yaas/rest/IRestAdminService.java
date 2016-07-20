package org.roylance.yaas.rest;

import org.jetbrains.annotations.NotNull;
import org.roylance.yaas.enums.UrlTokens;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface IRestAdminService {
    @POST(UrlTokens.FullAdminAllUsers)
    Call<String> allUsers(@NotNull @Body String base64Request);

    @POST(UrlTokens.FullAdminIsAdmin)
    Call<String> isAdmin(@NotNull @Body String base64Request);

    @POST(UrlTokens.FullAdminSetAdmin)
    Call<String> setAdmin(@NotNull @Body String base64Request);

    @POST(UrlTokens.FullAdminRemoveAdmin)
    Call<String> removeAdmin(@NotNull @Body String base64Request);

    @POST(UrlTokens.FullAdminDeleteUser)
    Call<String> deleteUser(@NotNull @Body String base64Request);

    @POST(UrlTokens.FullAdminChangePassword)
    Call<String> changePassword(@NotNull @Body String base64Request);
}
