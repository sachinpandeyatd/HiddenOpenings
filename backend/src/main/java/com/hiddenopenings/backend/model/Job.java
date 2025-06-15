package com.hiddenopenings.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Job {
	private long id;
	private String title;
	private String company;
	private String location;
	private String type;
	private String postedDate;
	private String applyLink;
}
