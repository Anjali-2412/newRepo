package com.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springboot.entity.EmployeeBean;



public interface EmployeeRepo extends JpaRepository<EmployeeBean, Integer> {

	
	
}
