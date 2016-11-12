package onlytest.controller;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import onlytest.dao.ITodoListDAO;
import onlytest.vo.TodoListPage;

@RequestMapping("/todolist")
@RestController
public class TodoListController {

	@Autowired
	private ITodoListDAO todoListDAO;

	@GetMapping("/reload")
	public TodoListPage reload() {
		return transfer();
	}

	@PutMapping("/addTodo")
	public TodoListPage addTodo(@RequestParam("text") String text) {
		todoListDAO.addTodo(text);
		return transfer();
	}

	@PostMapping("/completeTodo")
	public TodoListPage completeTodo(@RequestParam("id") String id) {
		if (NumberUtils.isDigits(id)) {
			todoListDAO.completeTodo(Integer.parseInt(id));
		} else {
			System.out.println("error");
		}
		return transfer();
	}

	@DeleteMapping("/cleanCompleted")
	public TodoListPage cleanCompleted() {
		todoListDAO.cleanCompleted();
		return transfer();
	}

	/**
	 * 將DB中資料轉換成頁面需要的格式
	 */
	private TodoListPage transfer() {
		List<Map<String, Object>> items = todoListDAO.selectUnCompleted();
		List<Map<String, Object>> completedItems = todoListDAO.selectCompleted();

		TodoListPage page = new TodoListPage();
		page.setItems(items);
		page.setCompletedItems(completedItems);
		return page;
	}

}
