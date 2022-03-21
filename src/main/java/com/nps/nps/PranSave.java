package com.nps.nps;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service 
public class PranSave {
	
	@Autowired
	private PranRepo pranrepo;

	public void saveentry(SubPran sub) {
		pranrepo.save(sub);
	}
}
