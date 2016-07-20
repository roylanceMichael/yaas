package org.roylance.yaas.services

interface ICallback<in T> {
    fun callback(value: T)
}