// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
using System.Threading.Tasks;
using Google.Protobuf;

namespace Org.Roylance.Yaas
{
    public class AuthenticationService: IAuthenticationService
    {
        private readonly IHttpExecute httpExecute;
        public AuthenticationService(IHttpExecute httpExecute)
        {
            this.httpExecute = httpExecute;
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> exists(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/authentication/exists", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> login(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/authentication/login", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> authenticate(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/authentication/authenticate", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> register(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/authentication/register", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> change_password(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/authentication/change-password", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> save(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/authentication/save", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }
	}
}