// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.yaas.services;

public class AdminJNIBridge {
	private native byte[] change_password_for_userJNI(byte[] request);
	private native byte[] get_all_usersJNI(byte[] request);
	private native byte[] is_user_adminJNI(byte[] request);
	private native byte[] set_user_as_adminJNI(byte[] request);
	private native byte[] remove_user_as_adminJNI(byte[] request);
	private native byte[] delete_userJNI(byte[] request);
	public byte[] change_password_for_user(byte[] request) {
		return change_password_for_userJNI(request);
	}
	public byte[] get_all_users(byte[] request) {
		return get_all_usersJNI(request);
	}
	public byte[] is_user_admin(byte[] request) {
		return is_user_adminJNI(request);
	}
	public byte[] set_user_as_admin(byte[] request) {
		return set_user_as_adminJNI(request);
	}
	public byte[] remove_user_as_admin(byte[] request) {
		return remove_user_as_adminJNI(request);
	}
	public byte[] delete_user(byte[] request) {
		return delete_userJNI(request);
	}
}
