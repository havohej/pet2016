package onlytest.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import onlytest.vo.FormBean;
import onlytest.vo.FormValidationPage;
import onlytest.vo.ValidationStateBean;

@RequestMapping("/formvalidation")
@RestController
public class FormValidationController {
	
	private static final Logger log = LoggerFactory.getLogger(TodoListController.class);

	@PostMapping("/validate")
	public FormValidationPage validate(@Valid FormBean bean, BindingResult bindingResult) {

		FormValidationPage result = new FormValidationPage();
		result.setBean(bean);

		Map<String, ValidationStateBean> valBean = new HashMap<String, ValidationStateBean>();
		if (bindingResult.hasErrors()) {
			List<FieldError> allErrors = bindingResult.getFieldErrors();
			for (FieldError error : allErrors) {
				valBean.put(error.getField(), new ValidationStateBean("error", error.getDefaultMessage()));
			}
			result.setValBean(valBean);
		} else {
			String alertStyle = "success";
			String alertMessage = "validate success";
			result.setAlertStyle(alertStyle);
			result.setAlertMessage(alertMessage);
		}
		result.setBean(bean);
		result.setValBean(valBean);

		log.debug(String.valueOf(result));

		return result;
	}

}
