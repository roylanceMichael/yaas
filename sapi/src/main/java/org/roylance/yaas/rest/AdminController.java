// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.yaas.rest;

import org.roylance.common.service.IProtoSerializerService;

import org.roylance.yaas.utilities.ServiceLocator;
import org.roylance.yaas.services.IAdminService;

import com.google.protobuf.util.JsonFormat;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.container.AsyncResponse;
import javax.ws.rs.container.Suspended;
import javax.ws.rs.core.Context;

@Path("/admin")
public class AdminController {
    @Context
    private ServletContext context;
    @Context
    private HttpServletRequest request;
    @Context
    private HttpServletResponse response;

    private final IAdminService adminService;
    private final JsonFormat.Parser parser;
    private final JsonFormat.Printer printer;

    public AdminController() {
        this.parser = JsonFormat.parser();
        this.printer = JsonFormat.printer();
        this.adminService = ServiceLocator.INSTANCE.getAdminService();
    }

    @POST
    @Path("/change-password-for-user")
    public void change_password_for_user(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.adminService.change_password_for_user(requestActual);
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
    @Path("/get-all-users")
    public void get_all_users(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.adminService.get_all_users(requestActual);
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
    @Path("/is-user-admin")
    public void is_user_admin(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.adminService.is_user_admin(requestActual);
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
    @Path("/set-user-as-admin")
    public void set_user_as_admin(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.adminService.set_user_as_admin(requestActual);
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
    @Path("/remove-user-as-admin")
    public void remove_user_as_admin(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.adminService.remove_user_as_admin(requestActual);
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
    @Path("/delete-user")
    public void delete_user(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.adminService.delete_user(requestActual);
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