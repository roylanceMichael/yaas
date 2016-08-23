using System.Threading.Tasks;
namespace Org.Roylance.Yaas.Api
{
	public interface IHttpExecute
	{
		Task<string> PostAsync(string url, string base64Message);
	}
}