// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
using System.Threading.Tasks;

namespace Org.Roylance.Yaas
{
    public interface IAuthenticationService
    {
		Task<Org.Roylance.Yaas.UIYaasResponse> exists(Org.Roylance.Yaas.UIYaasRequest request);
		Task<Org.Roylance.Yaas.UIYaasResponse> login(Org.Roylance.Yaas.UIYaasRequest request);
		Task<Org.Roylance.Yaas.UIYaasResponse> authenticate(Org.Roylance.Yaas.UIYaasRequest request);
		Task<Org.Roylance.Yaas.UIYaasResponse> register(Org.Roylance.Yaas.UIYaasRequest request);
		Task<Org.Roylance.Yaas.UIYaasResponse> change_password(Org.Roylance.Yaas.UIYaasRequest request);
		Task<Org.Roylance.Yaas.UIYaasResponse> save(Org.Roylance.Yaas.UIYaasRequest request);
	}
}
