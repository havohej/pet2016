package onlytest.vo;

import org.apache.commons.lang3.builder.ToStringBuilder;

public class User {

	private String userId;
	private String password;
	private String role;
	private String email;

	public User() {

	}

	public User(String userId, String password, String role, String email) {
		this.userId = userId;
		this.password = password;
		this.role = role;
		this.email = email;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}

}
