package onlytest.controller;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.math.NumberUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
	
	private static final Logger log = LoggerFactory.getLogger(TodoListController.class);

	@Autowired
	private ITodoListDAO todoListDAO;

	@GetMapping("/reload")
	public TodoListPage reload() {
		log.debug("reload page !!");
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
			log.warn("completeTodo id must be integer");
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
