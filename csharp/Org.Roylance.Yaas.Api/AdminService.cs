// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
using System.Threading.Tasks;
using Google.Protobuf;

namespace Org.Roylance.Yaas.Api
{
    public class AdminService: IAdminService
    {
        private readonly IHttpExecute httpExecute;
        public AdminService(IHttpExecute httpExecute)
        {
            this.httpExecute = httpExecute;
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> change_password_for_user(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/admin/change-password-for-user", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> get_all_users(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/admin/get-all-users", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> is_user_admin(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/admin/is-user-admin", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> set_user_as_admin(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/admin/set-user-as-admin", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> remove_user_as_admin(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/admin/remove-user-as-admin", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }

        public async Task<Org.Roylance.Yaas.UIYaasResponse> delete_user(Org.Roylance.Yaas.UIYaasRequest request)
        {
            var base64request = System.Convert.ToBase64String(request.ToByteArray());
            var responseCall = await this.httpExecute.PostAsync("/rest/admin/delete-user", base64request);
            var bytes = System.Convert.FromBase64String(responseCall);
            return Org.Roylance.Yaas.UIYaasResponse.Parser.ParseFrom(bytes);
        }
	}
}