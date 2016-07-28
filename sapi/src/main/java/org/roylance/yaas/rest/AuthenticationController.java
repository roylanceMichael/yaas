package org.roylance.yaas.rest;

import org.roylance.common.service.IProtoSerializerService;

import org.roylance.yaas.utilities.ServiceLocator;
import org.roylance.yaas.services.IAuthenticationService;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.container.AsyncResponse;
import javax.ws.rs.container.Suspended;
import javax.ws.rs.core.Context;

@Path("/authentication")
public class AuthenticationController {
    @Context
    private ServletContext context;
    @Context
    private HttpServletRequest request;
    @Context
    private HttpServletResponse response;

    private final IAuthenticationService authenticationService;
    private final IProtoSerializerService serializerService;

    public AuthenticationController() {
        this.serializerService = ServiceLocator.INSTANCE.getProtobufSerializerService();
        this.authenticationService = ServiceLocator.INSTANCE.getAuthenticationService();
    }

    @POST
    @Path("/exists")
    public void exists(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            final org.roylance.yaas.YaasModel.UIRequest requestActual =
                    this.serializerService.deserializeFromBase64(request, org.roylance.yaas.YaasModel.UIRequest.getDefaultInstance());

            final org.roylance.yaas.YaasModel.UIResponse response = this.authenticationService.exists(requestActual);
            final String deserializeResponse = this.serializerService.serializeToBase64(response);
            asyncResponse.resume(deserializeResponse);

        }).start();
    }

    @POST
    @Path("/login")
    public void login(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            final org.roylance.yaas.YaasModel.UIRequest requestActual =
                    this.serializerService.deserializeFromBase64(request, org.roylance.yaas.YaasModel.UIRequest.getDefaultInstance());

            final org.roylance.yaas.YaasModel.UIResponse response = this.authenticationService.login(requestActual);
            final String deserializeResponse = this.serializerService.serializeToBase64(response);
            asyncResponse.resume(deserializeResponse);

        }).start();
    }

    @POST
    @Path("/authenticate")
    public void authenticate(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            final org.roylance.yaas.YaasModel.UIRequest requestActual =
                    this.serializerService.deserializeFromBase64(request, org.roylance.yaas.YaasModel.UIRequest.getDefaultInstance());

            final org.roylance.yaas.YaasModel.UIResponse response = this.authenticationService.authenticate(requestActual);
            final String deserializeResponse = this.serializerService.serializeToBase64(response);
            asyncResponse.resume(deserializeResponse);

        }).start();
    }

    @POST
    @Path("/register")
    public void register(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            final org.roylance.yaas.YaasModel.UIRequest requestActual =
                    this.serializerService.deserializeFromBase64(request, org.roylance.yaas.YaasModel.UIRequest.getDefaultInstance());

            final org.roylance.yaas.YaasModel.UIResponse response = this.authenticationService.register(requestActual);
            final String deserializeResponse = this.serializerService.serializeToBase64(response);
            asyncResponse.resume(deserializeResponse);

        }).start();
    }

    @POST
    @Path("/change-password")
    public void change_password(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            final org.roylance.yaas.YaasModel.UIRequest requestActual =
                    this.serializerService.deserializeFromBase64(request, org.roylance.yaas.YaasModel.UIRequest.getDefaultInstance());

            final org.roylance.yaas.YaasModel.UIResponse response = this.authenticationService.change_password(requestActual);
            final String deserializeResponse = this.serializerService.serializeToBase64(response);
            asyncResponse.resume(deserializeResponse);

        }).start();
    }

    @POST
    @Path("/save")
    public void save(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            final org.roylance.yaas.YaasModel.UIRequest requestActual =
                    this.serializerService.deserializeFromBase64(request, org.roylance.yaas.YaasModel.UIRequest.getDefaultInstance());

            final org.roylance.yaas.YaasModel.UIResponse response = this.authenticationService.save(requestActual);
            final String deserializeResponse = this.serializerService.serializeToBase64(response);
            asyncResponse.resume(deserializeResponse);

        }).start();
    }
}