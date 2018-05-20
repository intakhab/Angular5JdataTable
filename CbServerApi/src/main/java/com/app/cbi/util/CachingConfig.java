/*package com.app.cbi.util;

import java.util.Arrays;

import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCache;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;


@Configuration
@ComponentScan(basePackages = "com.app.cbi")

public class CachingConfig {
	  
	  * Suitable for basic use cases, no persistence capabilities or eviction contracts. 
	  * @Bean
	   CacheManager cacheManager() {
       System.out.println("**************Loading***********");
	     SimpleCacheManager cacheManager = new SimpleCacheManager();
	     cacheManager.setCaches(Arrays.asList(
	    		 new ConcurrentMapCache("users")
	    		 ));

	     return cacheManager;
	     
	   }
	  //    //EhCache based CacheManager, most commonly used in Enterprise applications.

	  @Bean
	    public CacheManager cacheManager() {
	        return new EhCacheCacheManager(ehCacheCacheManager().getObject());
	    }
	 
	    @Bean
	    public EhCacheManagerFactoryBean ehCacheCacheManager() {
	        EhCacheManagerFactoryBean factory = new EhCacheManagerFactoryBean();
	        factory.setConfigLocation(new ClassPathResource("ehcache.xml"));
	        factory.setShared(true);
	        return factory;
	    }
	   
	   

}
*/