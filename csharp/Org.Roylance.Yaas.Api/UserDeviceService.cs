// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
using System.Threading.Tasks;
using Google.Protobuf;

namespace Org.Roylance.Yaas.Api
{
    public class UserDeviceService: IUserDeviceService
    {
        private readonly IHttpExecute httpExecute;
        public UserDeviceService(IHttpExecute httpExecute)
        {
            this.httpExecute = httpExecute;
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> save(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/userdevice/save", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> all(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/userdevice/all", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }
	}
}