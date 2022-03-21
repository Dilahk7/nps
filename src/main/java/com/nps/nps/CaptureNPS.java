package com.nps.nps;

public class CaptureNPS {
	private int salary;
	private float percent;
	
	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public float getPercent() {
		return percent;
	}

	public void setPercent(int percent) {
		this.percent = percent;
	}

	
	public CaptureNPS(int salary, int percent) {
		this.salary = salary;
		this.percent = percent;
	}

}
