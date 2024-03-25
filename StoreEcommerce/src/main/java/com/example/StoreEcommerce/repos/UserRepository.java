package com.example.StoreEcommerce.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.StoreEcommerce.entities.User;


public interface UserRepository extends JpaRepository<User, Integer> {

 User findByUserName(String userName);

 Optional<User> findByUserId(Long userId);

//jpaRepository altında findAll methodu select * from table a eşdeğer
	
	
}
