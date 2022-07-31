package com.employee.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "department")
public class Department {

	@Id
	@Column(name = "DEPTNO")
	private Integer deptNo;

	@Column(name = "DNAME")
	private String dName;

	@Column(name = "LOC")
	private String location;

	public Department() {
		super();
	}

	public Department(Integer deptNo, String dName, String location) {
		super();
		this.deptNo = deptNo;
		this.dName = dName;
		this.location = location;
	}

	public Integer getDeptNo() {
		return deptNo;
	}

	public void setDeptNo(Integer deptNo) {
		this.deptNo = deptNo;
	}

	public String getdName() {
		return dName;
	}

	public void setdName(String dName) {
		this.dName = dName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "Department [deptNo=" + deptNo + ", dName=" + dName + ", location=" + location + "]";
	}

}
