import base64
import requests
import yaas_model_pb2


class UserDeviceService(object):
    def __init__(self, base_url):
        self.base_url = base_url

	def save(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/userdevice/save', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response

	def all(request):
		base64_request = base64.b64encode(request.SerializeToString())
		response_call = requests.post(self.base_url + '/rest/userdevice/all', data = base64_request)
		response = yaas_model_pb2.UIYaasResponse()
		response.ParseFromString(base64.b64decode(response_call.text))
		return response


