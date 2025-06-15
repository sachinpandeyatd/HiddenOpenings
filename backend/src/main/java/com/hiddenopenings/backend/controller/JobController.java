package com.hiddenopenings.backend.controller;

import com.hiddenopenings.backend.model.Job;
import com.hiddenopenings.backend.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/v1")
public class JobController {

	@Autowired
	private JobRepository jobRepository;


	@GetMapping("/jobs")
	public List<Job> getAllJobs(){
		return jobRepository.findAll();
	}
}
