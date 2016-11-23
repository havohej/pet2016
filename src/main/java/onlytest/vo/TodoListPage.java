package onlytest.vo;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.builder.ToStringBuilder;

public class TodoListPage {
	List<Map<String, Object>> items;
	List<Map<String, Object>> completedItems;

	public List<Map<String, Object>> getItems() {
		return items;
	}

	public void setItems(List<Map<String, Object>> items) {
		this.items = items;
	}

	public List<Map<String, Object>> getCompletedItems() {
		return completedItems;
	}

	public void setCompletedItems(List<Map<String, Object>> completedItems) {
		this.completedItems = completedItems;
	}

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}

}
