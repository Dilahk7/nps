package com.nps.nps;

import org.springframework.stereotype.Service;


@Service 
public class CalculateService {
	
	public float calculate(CaptureNPS cap) {
		int salary = cap.getSalary();
		float percent = cap.getPercent();
		
		float result = (percent*salary)/100;
		System.out.println(result);
		return result;
		}

}