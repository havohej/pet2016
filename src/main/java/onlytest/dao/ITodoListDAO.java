package onlytest.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ITodoListDAO {

	@Select("select * from todolist")
	List<Map<String, Object>> selectByAnnotation(); // only test use annotation

	List<Map<String, Object>> selectUnCompleted();

	List<Map<String, Object>> selectCompleted();

	void addTodo(String text);

	void completeTodo(@Param("id") Integer id);

	void cleanCompleted();

}
