package com.app.cbi.cache;

import org.ehcache.event.CacheEvent;
import org.ehcache.event.CacheEventListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.app.cbi.domain.User;

public class CacheEventLogger implements CacheEventListener<String, User> {

    private static final Logger logger = LoggerFactory.getLogger(CacheEventLogger.class);

    @Override
    public void onEvent(CacheEvent<? extends String, ? extends User> cacheEvent) {
        logger.debug("Event: " + cacheEvent.getType() + " Key: " + cacheEvent.getKey() + " old value: " + cacheEvent.getOldValue() + " new value: " + cacheEvent.getNewValue());
    }
}