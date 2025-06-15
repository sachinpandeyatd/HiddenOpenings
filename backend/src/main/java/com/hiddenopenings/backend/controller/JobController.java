package com.hiddenopenings.backend.controller;

import com.hiddenopenings.backend.model.Job;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/v1")
public class JobController {

	@GetMapping("/jobs")
	public List<Job> getAllJobs(){
		return Arrays.asList(
				new Job(1L, "Senior Backend Engineer", "TechCorp", "Remote (USA)", "Full-time", "1 day ago", "#"),
				new Job(2L, "Cloud DevOps Engineer", "InfraCloud", "Austin, TX", "Full-time", "3 days ago", "#"),
				new Job(3L, "Junior React Developer", "WebWidgets Co.", "Remote", "Contract", "1 week ago", "#"),
				new Job(4L, "Data Scientist", "Analytics AI", "New York, NY", "Full-time", "2 weeks ago", "#")
		);
	}
}
