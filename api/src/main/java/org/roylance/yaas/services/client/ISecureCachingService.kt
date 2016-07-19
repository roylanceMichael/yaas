package org.roylance.yaas.services.client

interface ISecureCachingService {
    fun getValue(key: String): String?
    fun setValue(key: String, value: String?): Boolean
}