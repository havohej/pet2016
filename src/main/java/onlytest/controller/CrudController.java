package onlytest.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import onlytest.dao.ITestDAO;

@RestController
public class CrudController {

	@Autowired
	private ITestDAO testDAO;

	@GetMapping("/select")
	public List<Map<String, Object>> select() {
		return testDAO.selectByXml();
	}

}
