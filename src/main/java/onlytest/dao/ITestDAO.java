package onlytest.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ITestDAO {

	@Select("select * from test")
	List<Map<String, Object>> selectByAnnotation();

	List<Map<String, Object>> selectByXml();

}
