package onlytest.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import onlytest.vo.FormResultPage;
import onlytest.vo.User;
import onlytest.vo.ValidationStateBean;

public class FormResultPageGenerateTest {
	
	@Test
	public void generateWithError() {
		User user = new User("hello", "world", "admin", "hello@gmail.com");
		Assert.assertEquals("hello", user.getUserId());
		Assert.assertEquals("world", user.getPassword());
		Assert.assertEquals("admin", user.getRole());
		Assert.assertEquals("hello@gmail.com", user.getEmail());
		
		String errField = "userId";
		String errMessage = "may be null";
		
		BindingResult bindingResult = Mockito.mock(BindingResult.class);
		Mockito.when(bindingResult.hasErrors()).thenReturn(true);
		
		List<FieldError> allErrors = new ArrayList<FieldError>();
		FieldError fieldError = Mockito.mock(FieldError.class);
		Mockito.when(fieldError.getField()).thenReturn(errField);
		Mockito.when(fieldError.getDefaultMessage()).thenReturn(errMessage);
		allErrors.add(fieldError);
		Mockito.when(bindingResult.getFieldErrors()).thenReturn(allErrors);
		
		FormResultPageGenerate<User> formResultPageGenerate = new FormResultPageGenerate<User>(user, bindingResult) {
			@Override
			public void doService() {}
		};
		
		FormResultPage<User> formResultPage = formResultPageGenerate.generate();
		Assert.assertEquals("danger", formResultPage.getAlertStyle());
		Assert.assertEquals("validate fail", formResultPage.getAlertMessage());
		Assert.assertEquals(user, formResultPage.getBean());
		
		Map<String, ValidationStateBean> valBean = formResultPage.getValBean();
		ValidationStateBean validationStateBean = valBean.get(errField);
		Assert.assertEquals("error", validationStateBean.getValidationState());
		Assert.assertEquals(errMessage, validationStateBean.getHelpBlock());
		
	}

}
