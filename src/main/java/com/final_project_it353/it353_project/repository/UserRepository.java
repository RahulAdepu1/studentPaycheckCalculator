package com.final_project_it353.it353_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.final_project_it353.it353_project.entity.User;

public interface UserRepository extends JpaRepository<User, Long>  {
	@Query("SELECT u FROM User u WHERE u.email = ?1")
	public User findByEmail(String email);
}

