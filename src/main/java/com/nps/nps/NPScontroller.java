package com.nps.nps;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class NPScontroller {
	
	@Autowired
	private CalculateService calculateservice;
	private DropdownValues dropvals = new DropdownValues();
	@Autowired
	private PranSave pransave;

	
	@PostMapping("/calculate")
	float calculate(@RequestBody CaptureNPS cap)
	{
		return this.calculateservice.calculate(cap);
		
	}
	@GetMapping("/dropvalues")
	List<Integer> listval(){
		return dropvals.getListvalues();
	}
	
	@PostMapping("/submitamt")
	void subamt(@RequestBody SubPran sub)
	{
		pransave.saveentry(sub);
	}
}
