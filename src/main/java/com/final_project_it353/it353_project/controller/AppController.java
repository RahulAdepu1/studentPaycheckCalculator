package com.final_project_it353.it353_project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.final_project_it353.it353_project.entity.User;
import com.final_project_it353.it353_project.repository.UserRepository;

@Controller
public class AppController {


	@GetMapping("")
	public String viewHomePage() {
		return "index";
	}

	@GetMapping("/register")
	public String showRegistrationForm(Model model) {
		model.addAttribute("user", new User());

		return "signup_form";
	}


	@Autowired
	private UserRepository userRepo;


	@PostMapping("/process_register")
	public String processRegister(User user) {

	//how come userRepo can save data without any methods in it?
	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	String encodedPassword = passwordEncoder.encode(user.getPassword());
	user.setPassword(encodedPassword);


	userRepo.save(user);

	return "register_success";
	}

	@GetMapping("/users")
	public String listUsers(Model model) {
	List<User> listUsers = userRepo.findAll();//it is going to find all users
	model.addAttribute("listUsers", listUsers);

	return "users";
	}

}
