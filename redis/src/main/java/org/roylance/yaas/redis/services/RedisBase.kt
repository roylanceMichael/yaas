package org.roylance.yaas.redis.services

import redis.clients.jedis.Jedis

abstract class RedisBase(
        protected val host: String,
        protected val port: Int,
        protected val password: String) {
    protected fun buildJedisClient(): Jedis {
        val client = Jedis(this.host, this.port)

        if (this.password.length > 0) {
            client.auth(this.password)
        }

        return client
    }
}
