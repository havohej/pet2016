package onlytest.utils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import onlytest.vo.FormResultPage;
import onlytest.vo.ValidationStateBean;

public abstract class FormResultPageGenerator<T> {

	private static final Logger log = LoggerFactory.getLogger(FormResultPageGenerator.class);

	T t;
	BindingResult bindingResult;

	public FormResultPageGenerator(T t, BindingResult bindingResult) {
		this.t = t;
		this.bindingResult = bindingResult;
	}

	public FormResultPage<T> generate() {
		log.debug(String.valueOf(t));

		FormResultPage<T> result = new FormResultPage<T>();
		result.setBean(t);

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

			doService();

			String alertStyle = "success";
			String alertMessage = "validate success";
			result.setAlertStyle(alertStyle);
			result.setAlertMessage(alertMessage);
		}
		result.setBean(t);
		result.setValBean(valBean);

		log.debug(String.valueOf(result));
		return result;
	}

	abstract public void doService();

}
