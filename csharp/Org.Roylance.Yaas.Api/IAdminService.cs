using System.Threading.Tasks;

namespace Org.Roylance.Yaas.Api
{
    public interface IAdminService
    {
		Task<Org.Roylance.Yaas.UIYaasResponse> change_password_for_user(Org.Roylance.Yaas.UIYaasRequest request);
		Task<Org.Roylance.Yaas.UIYaasResponse> get_all_users(Org.Roylance.Yaas.UIYaasRequest request);
		Task<Org.Roylance.Yaas.UIYaasResponse> is_user_admin(Org.Roylance.Yaas.UIYaasRequest request);
		Task<Org.Roylance.Yaas.UIYaasResponse> set_user_as_admin(Org.Roylance.Yaas.UIYaasRequest request);
		Task<Org.Roylance.Yaas.UIYaasResponse> remove_user_as_admin(Org.Roylance.Yaas.UIYaasRequest request);
		Task<Org.Roylance.Yaas.UIYaasResponse> delete_user(Org.Roylance.Yaas.UIYaasRequest request);
	}
}
