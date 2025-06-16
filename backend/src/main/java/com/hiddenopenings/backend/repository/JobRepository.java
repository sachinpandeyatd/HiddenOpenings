package com.hiddenopenings.backend.repository;

import com.hiddenopenings.backend.model.Job;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
	Page<Job> findByTitleContainingIgnoreCase(String keyword, Pageable pageable);
}
