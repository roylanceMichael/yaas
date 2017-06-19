// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.yaas.rest;

import org.roylance.common.service.IProtoSerializerService;

import org.roylance.yaas.utilities.ServiceLocator;
import org.roylance.yaas.services.IAuthenticationService;

import com.google.protobuf.util.JsonFormat;
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
    private final JsonFormat.Parser parser;
    private final JsonFormat.Printer printer;

    public AuthenticationController() {
        this.parser = JsonFormat.parser();
        this.printer = JsonFormat.printer();
        this.authenticationService = ServiceLocator.INSTANCE.getAuthenticationService();
    }

    @POST
    @Path("/exists")
    public void exists(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.authenticationService.exists(requestActual);
                final String serializedResponse = this.printer.print(response);
                asyncResponse.resume(serializedResponse);
            }
            catch(Exception e) {
                e.printStackTrace();
                asyncResponse.resume("");
            }

        }).start();
    }

    @POST
    @Path("/login")
    public void login(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.authenticationService.login(requestActual);
                final String serializedResponse = this.printer.print(response);
                asyncResponse.resume(serializedResponse);
            }
            catch(Exception e) {
                e.printStackTrace();
                asyncResponse.resume("");
            }

        }).start();
    }

    @POST
    @Path("/authenticate")
    public void authenticate(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.authenticationService.authenticate(requestActual);
                final String serializedResponse = this.printer.print(response);
                asyncResponse.resume(serializedResponse);
            }
            catch(Exception e) {
                e.printStackTrace();
                asyncResponse.resume("");
            }

        }).start();
    }

    @POST
    @Path("/register")
    public void register(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.authenticationService.register(requestActual);
                final String serializedResponse = this.printer.print(response);
                asyncResponse.resume(serializedResponse);
            }
            catch(Exception e) {
                e.printStackTrace();
                asyncResponse.resume("");
            }

        }).start();
    }

    @POST
    @Path("/change-password")
    public void change_password(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.authenticationService.change_password(requestActual);
                final String serializedResponse = this.printer.print(response);
                asyncResponse.resume(serializedResponse);
            }
            catch(Exception e) {
                e.printStackTrace();
                asyncResponse.resume("");
            }

        }).start();
    }

    @POST
    @Path("/save")
    public void save(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.authenticationService.save(requestActual);
                final String serializedResponse = this.printer.print(response);
                asyncResponse.resume(serializedResponse);
            }
            catch(Exception e) {
                e.printStackTrace();
                asyncResponse.resume("");
            }

        }).start();
    }
}