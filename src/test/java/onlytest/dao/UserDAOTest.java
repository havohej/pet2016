package onlytest.dao;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import onlytest.vo.User;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class UserDAOTest {

	@Autowired
	private IUserDAO userDAO;

	@Test
	@Transactional
	@Rollback(true)
	public void addUserTest() {
		List<Map<String, Object>> list = userDAO.findUserList();
		int userCount = list.size();

		User user = new User("userId", "password", "role", "email");
		userDAO.addUser(user);

		Assert.assertEquals(userCount + 1, userDAO.findUserList().size());
	}
}
