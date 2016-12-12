package onlytest.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import onlytest.vo.User;

@Mapper
public interface IUserDAO {

	void addUser(User user);

	List<Map<String, Object>> findUserList();
	
}
