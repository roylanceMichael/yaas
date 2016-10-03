import base64
import requests
import yaas_model_pb2


class AuthenticationService(object):
    def __init__(self, base_url):
        self.base_url = base_url

	def exists(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/authentication/exists', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response

	def login(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/authentication/login', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response

	def authenticate(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/authentication/authenticate', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response

	def register(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/authentication/register', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response

	def change_password(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/authentication/change-password', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response

	def save(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/authentication/save', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response


