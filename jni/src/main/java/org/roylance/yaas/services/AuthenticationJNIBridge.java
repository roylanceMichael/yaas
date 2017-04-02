// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.yaas.services;

public class AuthenticationJNIBridge {
	private native byte[] existsJNI(byte[] request);
	private native byte[] loginJNI(byte[] request);
	private native byte[] authenticateJNI(byte[] request);
	private native byte[] registerJNI(byte[] request);
	private native byte[] change_passwordJNI(byte[] request);
	private native byte[] saveJNI(byte[] request);
	public byte[] exists(byte[] request) {
		return existsJNI(request);
	}
	public byte[] login(byte[] request) {
		return loginJNI(request);
	}
	public byte[] authenticate(byte[] request) {
		return authenticateJNI(request);
	}
	public byte[] register(byte[] request) {
		return registerJNI(request);
	}
	public byte[] change_password(byte[] request) {
		return change_passwordJNI(request);
	}
	public byte[] save(byte[] request) {
		return saveJNI(request);
	}
}
