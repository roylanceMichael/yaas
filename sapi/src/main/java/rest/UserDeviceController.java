// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package .rest;

import org.roylance.common.service.IProtoSerializerService;

import .utilities.ServiceLocator;
import .services.IUserDeviceService;

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
    private final IProtoSerializerService serializerService;

    public UserDeviceController() {
        this.serializerService = ServiceLocator.INSTANCE.getProtobufSerializerService();
        this.userDeviceService = ServiceLocator.INSTANCE.getUserDeviceService();
    }

    @POST
    @Path("/save")
    public void save(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            final org.roylance.yaas.YaasModel.UIYaasRequest requestActual =
                    this.serializerService.deserializeFromBase64(request, org.roylance.yaas.YaasModel.UIYaasRequest.getDefaultInstance());

            final org.roylance.yaas.YaasModel.UIYaasResponse response = this.userDeviceService.save(requestActual);
            final String deserializeResponse = this.serializerService.serializeToBase64(response);
            asyncResponse.resume(deserializeResponse);

        }).start();
    }

    @POST
    @Path("/all")
    public void all(@Suspended AsyncResponse asyncResponse, String request) throws Exception {
        new Thread(() -> {
            
            final org.roylance.yaas.YaasModel.UIYaasRequest requestActual =
                    this.serializerService.deserializeFromBase64(request, org.roylance.yaas.YaasModel.UIYaasRequest.getDefaultInstance());

            final org.roylance.yaas.YaasModel.UIYaasResponse response = this.userDeviceService.all(requestActual);
            final String deserializeResponse = this.serializerService.serializeToBase64(response);
            asyncResponse.resume(deserializeResponse);

        }).start();
    }
}