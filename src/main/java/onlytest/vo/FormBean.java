package onlytest.vo;

import javax.validation.constraints.Max;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

public class FormBean {

	@NotEmpty
	@Length(max=15)
	private String formText;

	@NotEmpty
	@Max(Integer.MAX_VALUE)
	private String formNumber;

	@NotEmpty
	@Email
	private String formEmail;

	public String getFormText() {
		return formText;
	}

	public void setFormText(String formText) {
		this.formText = formText;
	}

	public String getFormNumber() {
		return formNumber;
	}

	public void setFormNumber(String formNumber) {
		this.formNumber = formNumber;
	}

	public String getFormEmail() {
		return formEmail;
	}

	public void setFormEmail(String formEmail) {
		this.formEmail = formEmail;
	}

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}

}
