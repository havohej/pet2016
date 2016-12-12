package onlytest.controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import onlytest.dao.IUserDAO;
import onlytest.utils.FormResultPageGenerate;
import onlytest.vo.FormResultPage;
import onlytest.vo.User;

@RequestMapping("/user")
@RestController
public class UserController {

	private static final Logger log = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private IUserDAO userDAO;

	@PutMapping("/addUser")
	public FormResultPage<User> addUser(@RequestBody @Valid User user, BindingResult bindingResult) {

		FormResultPageGenerate<User> generate = new FormResultPageGenerate<User>(user, bindingResult) {
			@Override
			public void doService() {
				userDAO.addUser(user);
			}
		};
		return generate.generate();
	}

	@GetMapping("/findUserList")
	public List<Map<String, Object>> findUserList() {
		return userDAO.findUserList();
	}

}
