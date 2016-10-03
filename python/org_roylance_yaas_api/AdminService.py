import base64
import requests
import yaas_model_pb2


class AdminService(object):
    def __init__(self, base_url):
        self.base_url = base_url

	def change_password_for_user(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/admin/change-password-for-user', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response

	def get_all_users(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/admin/get-all-users', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response

	def is_user_admin(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/admin/is-user-admin', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response

	def set_user_as_admin(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/admin/set-user-as-admin', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response

	def remove_user_as_admin(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/admin/remove-user-as-admin', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response

	def delete_user(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/admin/delete-user', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response


