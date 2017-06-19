// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.yaas.rest;

import org.roylance.common.service.IProtoSerializerService;

import org.roylance.yaas.utilities.ServiceLocator;
import org.roylance.yaas.services.IUserDeviceService;

import com.google.protobuf.util.JsonFormat;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.container.AsyncResponse;
import javax.ws.rs.container.Suspended;
import javax.ws.rs.core.Context;

@Path("/userdevice")
public class UserDeviceController {
    @Context
    private ServletContext context;
    @Context
    private HttpServletRequest request;
    @Context
    private HttpServletResponse response;

    private final IUserDeviceService userDeviceService;
    private final JsonFormat.Parser parser;
    private final JsonFormat.Printer printer;

    public UserDeviceController() {
        this.parser = JsonFormat.parser();
        this.printer = JsonFormat.printer();
        this.userDeviceService = ServiceLocator.INSTANCE.getUserDeviceService();
    }

    @POST
    @Path("/save")
    public void save(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.userDeviceService.save(requestActual);
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
    @Path("/all")
    public void all(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            try {
                final org.roylance.yaas.YaasModel.UIYaasRequest.Builder requestTemp = org.roylance.yaas.YaasModel.UIYaasRequest.newBuilder();
                this.parser.merge(request, requestTemp);
                final org.roylance.yaas.YaasModel.UIYaasRequest requestActual = requestTemp.build();

                final org.roylance.yaas.YaasModel.UIYaasResponse response = this.userDeviceService.all(requestActual);
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