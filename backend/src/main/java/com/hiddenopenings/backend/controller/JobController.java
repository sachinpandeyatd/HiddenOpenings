package com.hiddenopenings.backend.controller;

import com.hiddenopenings.backend.model.Job;
import com.hiddenopenings.backend.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/v1")
public class JobController {

	@Autowired
	private JobRepository jobRepository;


	@GetMapping("/jobs")
	public Page<Job> getJobs(@RequestParam(required = false) String search, @RequestParam(defaultValue = "0") int page,
							 @RequestParam(defaultValue = "10") int size){

		Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());

		if (search != null && !search.trim().isEmpty()) {
			return jobRepository.findByTitleContainingIgnoreCase(search, pageable);
		} else {
			return jobRepository.findAll(pageable);
		}
	}
}
