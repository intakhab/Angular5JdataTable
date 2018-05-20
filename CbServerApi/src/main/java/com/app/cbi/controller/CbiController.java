package com.app.cbi.controller;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CacheStoreMode;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.cbi.datatable.DataTableRequest;
import com.app.cbi.datatable.DataTableResults;
import com.app.cbi.datatable.PaginationCriteria;
import com.app.cbi.domain.User;
import com.app.cbi.repo.UserRepository;
import com.app.cbi.util.AppUtil;
import com.google.gson.Gson;

@RestController
@CrossOrigin
public class CbiController {

	@Autowired
	UserRepository repository;
	@Autowired
	private javax.cache.CacheManager cacheManager;

	@PersistenceContext
	private EntityManager entityManager;
	
	@RequestMapping("/hi")
    public @ResponseBody String hiThere(){
        return "hello world!";
    }
	//////////////////////////////////
	@CacheEvict(allEntries = true)
    public void clearCache(){
		System.out.println("clear all caches");
	}
   
	@PostMapping(value = "/api/user/create")
	public User postUser(@RequestBody User user) {
		// UserDTO user = new UserDTO();
		repository.save(user);
		return user;
	}

	@PutMapping(value = "/api/user/update")
	public User updateUser(@RequestBody User user) {
		repository.save(user);
		return user;
	}
	
	@GetMapping(value = "/api/user/details", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<User> getDetails() {
		List<User> list = new ArrayList<>();
		Iterable<User> users = repository.findAll();
		users.forEach(list::add);
		return list;
	}
   
	@GetMapping(value = "/api/user/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public User   getUserById(@PathVariable String id) {
		 Long u=Long.valueOf(id);
	     
		return repository.getOne(u);
    	
    }
	@DeleteMapping(value = "/api/user/delete/{id}")
	public void deleteUserById(@PathVariable String id)		 {
		Long u=Long.valueOf(id);
		repository.deleteById(u);
	}

	
	@PostMapping(path="/api/validate/{username}/{password}")
	public String validate(@PathVariable String username,@PathVariable String password) {
		if("test".equals(username) && "test".equals(password)) {
			return "Intakhab Alam Siddiqui";
		}
		return "invalid user";
	}
	
	///////////////////////////////////////////////////////////////////////////
	
	@GetMapping(value = "/api/users/paginated")
	@ResponseBody
	public String listUsersPaginated(HttpServletRequest request, 
			HttpServletResponse response, Model model) {
               	
		DataTableRequest<User> dataTableInRQ = new DataTableRequest<User>(request);
		PaginationCriteria pagination = dataTableInRQ.getPaginationRequest();
		
		String baseQuery = "SELECT USER_ID,FIRST_NAME, LAST_NAME,AGE,PHONE,SALARY,(SELECT COUNT(1) FROM USER_INFO) AS TOTAL_RECORDS FROM USER_INFO";
		String paginatedQuery = AppUtil.buildPaginatedQuery(baseQuery, pagination);
		Query userQuery = entityManager.
				createNativeQuery(paginatedQuery, User.class);
		userQuery.setHint("javax.persistence.cache.storeMode", CacheStoreMode.REFRESH);

		/////////////////////////////////////////////////
		List<User> userList=userQuery.getResultList();
		
		DataTableResults<User> dataTableResult = new DataTableResults<User>();
		dataTableResult.setDraw(dataTableInRQ.getDraw());
		dataTableResult.setListOfDataObjects(userList);
		if (!AppUtil.isObjectEmpty(userList)) {
			dataTableResult.setRecordsTotal(userList.get(0).getTotalRecords()
					.toString());
			if (dataTableInRQ.getPaginationRequest().isFilterByEmpty()) {
				dataTableResult.setRecordsFiltered(userList.get(0).getTotalRecords()
						.toString());
			} else {
				dataTableResult.setRecordsFiltered(Integer.toString(userList.size()));
			}
		}
		
		return new Gson().toJson(dataTableResult);
	}
	
}
