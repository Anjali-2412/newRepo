package com.example.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.entity.Student;
import com.example.springboot.repository.StudentRepository;

@RestController
@RequestMapping("/studentData")
@CrossOrigin("*")
public class HomeController {
	@Autowired
	private StudentRepository SR;
	
	@GetMapping("/")
	public String index() {
		return "welcome to spring boot";
	}
	
	
	//create student rest api
	@PostMapping("/saveStudent")
	public Student saveData(@RequestBody Student student) {
		SR.save(student);
		return student;
	}
	
	/*
	 * @GetMapping("/getStudent/{id}") 
	 * public ResponseEntity<Student> getData(@PathVariable int id) { 
	 * Optional<Student> getdata = SR.findById(id);
	 * return getdata; }
	 */
	
	//get all student list
	@GetMapping("/getAllStudent")
	public List<Student> getAll(){
		List<Student> studentList = SR.findAll();
		return studentList;
	}
	
	//delete employee Rest API
	@DeleteMapping("/deleteStudent/{id}")
	public String deleteStudent(@PathVariable int id) {
		Student stud = SR.findById(id).get();
		if(stud!=null)
		 SR.delete(stud);
		return "delete sucessfully.";
	}
	@PutMapping("/updateData")
	public Student updateData(@RequestBody Student st) {
		SR.save(st);
		return st;
	}
	
	
	//get student by id rest api
	@GetMapping("/getData/{id}")
	public Student getStudentData( @PathVariable int id)
	{
		Optional<Student> stud = SR.findById(id);
		Student stud1 = stud.get();
		return stud1;
		
	}
}
