package com.app.cbi.repo;

import java.util.List;

import javax.persistence.Cacheable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.cbi.domain.User;

@Cacheable
public interface UserRepository extends JpaRepository<User, Long> {
	List<User> findByLastName(String lastName);
  	List<User> findByFirstName(String firstName);

}
