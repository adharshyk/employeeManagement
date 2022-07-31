package com.employee.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "empno")
	private Integer empNo;

	@Column(name = "ENAME")
	private String eName;

	@Column(name = "JOB")
	private String job;

	@Column(name = "HIREDATE")
	private Date hireDate;

	@Column(name = "MANAGERID")
	private Integer managerId;

	@Column(name = "SALARY")
	private Integer salary;

	@Column(name = "commission")
	private Integer commision;

	@Column(name = "DEPTNO")
	private Integer deptNo;

	public Employee(String eName, String job, Date hireDate, Integer managerId, Integer salary, Integer commision,
			Integer deptNo) {
		super();
		this.eName = eName;
		this.job = job;
		this.hireDate = hireDate;
		this.managerId = managerId;
		this.salary = salary;
		this.commision = commision;
		this.deptNo = deptNo;
	}

	public Employee() {
		super();
	}

	public Integer getEmpNo() {
		return empNo;
	}

	public void setEmpNo(Integer empNo) {
		this.empNo = empNo;
	}

	public String geteName() {
		return eName;
	}

	public void seteName(String eName) {
		this.eName = eName;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public Date getHireDate() {
		return hireDate;
	}

	public void setHireDate(Date hireDate) {
		this.hireDate = hireDate;
	}

	public Integer getManagerId() {
		return managerId;
	}

	public void setManagerId(Integer managerId) {
		this.managerId = managerId;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(Integer salary) {
		this.salary = salary;
	}

	public Integer getCommision() {
		return commision;
	}

	public void setCommision(Integer commision) {
		this.commision = commision;
	}

	public Integer getDeptNo() {
		return deptNo;
	}

	public void setDeptNo(Integer deptNo) {
		this.deptNo = deptNo;
	}

	@Override
	public String toString() {
		return "Employee [empNo=" + empNo + ", eName=" + eName + ", job=" + job + ", hireDate=" + hireDate
				+ ", managerId=" + managerId + ", salary=" + salary + ", commision=" + commision + ", deptNo=" + deptNo
				+ "]";
	}

}
