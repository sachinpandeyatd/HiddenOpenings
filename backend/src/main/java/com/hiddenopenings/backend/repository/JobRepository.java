package com.hiddenopenings.backend.repository;

import com.hiddenopenings.backend.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {

}
