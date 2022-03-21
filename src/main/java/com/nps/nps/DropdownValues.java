package com.nps.nps;

import java.util.ArrayList;
import java.util.List;

public class DropdownValues {
	
	private List<Integer> listvalues = new ArrayList<>(); 
	 
	    	    
	
	 public List<Integer> getListvalues() {
		 
//		 for(int num:listvalues)
//				 System.out.println(num);
		 	listvalues.clear();
		 	listvalues.add(10);
		    listvalues.add(20);
		    listvalues.add(30);

		 return listvalues;
		
	}
	
	
	 
}
