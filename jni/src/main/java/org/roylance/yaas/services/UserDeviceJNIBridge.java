// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.yaas.services;

public class UserDeviceJNIBridge {
	private native byte[] saveJNI(byte[] request);
	private native byte[] allJNI(byte[] request);
	public byte[] save(byte[] request) {
		return saveJNI(request);
	}
	public byte[] all(byte[] request) {
		return allJNI(request);
	}
}
