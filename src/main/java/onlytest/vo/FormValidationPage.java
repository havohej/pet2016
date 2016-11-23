package onlytest.vo;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.builder.ToStringBuilder;

public class FormValidationPage {

	private String alertStyle;
	private String alertMessage;

	private FormBean bean;
	private Map<String, ValidationStateBean> valBean = new HashMap<String, ValidationStateBean>();

	public String getAlertStyle() {
		return alertStyle;
	}

	public void setAlertStyle(String alertStyle) {
		this.alertStyle = alertStyle;
	}

	public String getAlertMessage() {
		return alertMessage;
	}

	public void setAlertMessage(String alertMessage) {
		this.alertMessage = alertMessage;
	}

	public FormBean getBean() {
		return bean;
	}

	public void setBean(FormBean bean) {
		this.bean = bean;
	}

	public Map<String, ValidationStateBean> getValBean() {
		return valBean;
	}

	public void setValBean(Map<String, ValidationStateBean> valBean) {
		this.valBean = valBean;
	}

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}

}
