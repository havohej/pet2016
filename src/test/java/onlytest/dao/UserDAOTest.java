package onlytest.dao;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import onlytest.Pet2016Application;
import onlytest.vo.User;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Pet2016Application.class)
@Transactional
public class UserDAOTest extends AbstractTransactionalJUnit4SpringContextTests {

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
