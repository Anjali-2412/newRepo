package com.example.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.entity.EmployeeBean;
import com.example.springboot.repository.EmployeeRepo;


@RestController
@RequestMapping("/empData")
public class EmployeeController {
	@Autowired
	private EmployeeRepo ER;

	@GetMapping("/")
	public String index() {
		return "welcome to backend : Spring Boot";
	}

	@PostMapping("/saveEmp")
	public EmployeeBean saveEmp(@RequestBody EmployeeBean Emp) {
		ER.save(Emp);
		return Emp;

	}

}
