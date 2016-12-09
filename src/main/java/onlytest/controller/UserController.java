package onlytest.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import onlytest.dao.IUserDAO;
import onlytest.vo.CrudResultPage;
import onlytest.vo.User;
import onlytest.vo.ValidationStateBean;

@RequestMapping("/user")
@RestController
public class UserController {
	
	private static final Logger log = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private IUserDAO userDAO;

	@PutMapping("/addUser")
	public CrudResultPage<User> addUser(@RequestBody @Valid User user, BindingResult bindingResult) {
		
		log.debug(String.valueOf(user));
		
		CrudResultPage<User> result = new CrudResultPage<User>();
		result.setBean(user);

		Map<String, ValidationStateBean> valBean = new HashMap<String, ValidationStateBean>();
		if (bindingResult.hasErrors()) {
			List<FieldError> allErrors = bindingResult.getFieldErrors();
			for (FieldError error : allErrors) {
				valBean.put(error.getField(), new ValidationStateBean("error", error.getDefaultMessage()));
			}
			result.setValBean(valBean);
			
			String alertStyle = "danger";
			String alertMessage = "validate fail";
			result.setAlertStyle(alertStyle);
			result.setAlertMessage(alertMessage);
			
		} else {
			
			// do some thing
			userDAO.addUser(user);
			
			String alertStyle = "success";
			String alertMessage = "validate success";
			result.setAlertStyle(alertStyle);
			result.setAlertMessage(alertMessage);
		}
		result.setBean(user);
		result.setValBean(valBean);

		log.debug(String.valueOf(result));

		return result;
	}
	
	@GetMapping("/findUserList")
	public List<Map<String, Object>> findUserList() {
		return userDAO.findUserList();
	}

}
