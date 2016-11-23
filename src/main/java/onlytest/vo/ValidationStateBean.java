package onlytest.vo;

import org.apache.commons.lang3.builder.ToStringBuilder;

public class ValidationStateBean {

	private String validationState;
	private String helpBlock;

	public ValidationStateBean() {

	}

	public ValidationStateBean(String validationState, String helpBlock) {
		this.validationState = validationState;
		this.helpBlock = helpBlock;
	}

	public String getValidationState() {
		return validationState;
	}

	public void setValidationState(String validationState) {
		this.validationState = validationState;
	}

	public String getHelpBlock() {
		return helpBlock;
	}

	public void setHelpBlock(String helpBlock) {
		this.helpBlock = helpBlock;
	}

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}

}
