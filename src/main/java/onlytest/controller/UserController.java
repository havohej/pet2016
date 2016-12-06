package onlytest.controller;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import onlytest.vo.User;

@RequestMapping("/user")
@RestController
public class UserController {

	@PutMapping("/addUser")
	public void addTodo(@RequestBody User user) {
		System.out.println(user);
	}

}
