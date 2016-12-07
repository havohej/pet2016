package onlytest.dao;

import org.apache.ibatis.annotations.Mapper;

import onlytest.vo.User;

@Mapper
public interface IUserDAO {

	void addUser(User user);
}
