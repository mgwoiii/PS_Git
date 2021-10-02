package com.pmg.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.pmg.domain.BoardVO;
import com.pmg.domain.UserVO;
import com.pmg.service.BoardService;
import com.pmg.service.UserService;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;

/**
 * Handles requests for the application home page.
 */

@CrossOrigin(origins = "*")
@RestController
public class HomeController {
	
		private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	    
		@Inject
	    private BoardService service;

		@Inject
		private UserService service2;
		/**
		 * Simply selects the home view to render by returning its name.
		 */
		
	    
	    
		@GetMapping(value = "/")
		public List<UserVO> home(Locale locale, Model model, HttpSession session, HttpServletRequest request) throws Exception {
					
			List<UserVO> users  = service2.listAll();
			
			String valeu = (String)session.getAttribute("username");
			System.out.println("들오긴 한다");

			return users;
		}
		
		@PostMapping(value="/login")
		public UserVO loginUser( @RequestBody UserVO user2, HttpSession session) throws Exception {

			//System.out.println(user2.getId() +" 이랑 " + user2.getPassword());
			
			UserVO user = service2.login(user2);
			System.out.println(user);
			if(user == null) {
				System.out.println(user);
				return null;
			}else {
				
				session.setAttribute("username", user.getUsername());

				return user;

			}
		}

		@PostMapping(value="/insert")
		public void insertUser(@RequestBody UserVO user) throws Exception {

			service2.create(user);
			
		}
		
		@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
		public void deleteUser(@PathVariable("id") int id) throws Exception {
			service2.delete(id);
			
		}
		
		@RequestMapping(value = "/select/{id}", method = RequestMethod.GET)
		public UserVO selectUser(@PathVariable("id") int id, HttpSession session) throws Exception {
			
			UserVO user	= service2.read(id);
			
			System.out.println(session.getAttribute("username"));
			
			return user;
			
		}
		

		@RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
		public void updateUser(@PathVariable int id, @RequestBody UserVO user) throws Exception {
			
			service2.update(user);
						
		}
		
		
	    
	    @RequestMapping(value="/create", method=RequestMethod.GET)
	    public void createGET(BoardVO board, Model model) throws Exception{
	        System.out.println("/create 입니다. GET방식");
	        
	    }
	    
	    @RequestMapping(value = "/create", method=RequestMethod.POST )
	    public String createPOST(BoardVO board, Model model) throws Exception{
	        System.out.println("/board/create POST방식 입니다.");
	        System.out.println(board.toString());
	        
	        service.create(board);
	        model.addAttribute("result", "성공");
	        
	        return "redirect:/";
	    }
	    
	    @RequestMapping(value = "/read", method=RequestMethod.GET )
	    public void read(@RequestParam("b_no")int b_no, Model model, 
	    		HttpServletRequest request) throws Exception{
	       
			
	    	model.addAttribute(service.read(b_no));

	    }
	    
//	    @RequestMapping(value = "/delete", method=RequestMethod.POST )
//	    public String delete(@RequestParam("b_no")int b_no, Model model) throws Exception{
//	        
//	        service.delete(b_no);
//	        //model.addAttribute("result", "delete 성공");
//	        System.out.println("delete 성공");
//	        return "redirect:/";
//	    }
//	    
	    
	    @RequestMapping(value = "/modify", method=RequestMethod.GET )
	    public void modify(@RequestParam("b_no")int b_no, Model model) throws Exception{
	       
	    	model.addAttribute(service.read(b_no));

	    }
	
	    @RequestMapping(value = "/modify", method=RequestMethod.POST )
	    public String modifyPOST(BoardVO board, Model model) throws Exception{
	       
	    	System.out.println(board.getB_no());
	    	
	    	service.update(board);
	    	
	        model.addAttribute("result", "성공2222");
	        
	        return "redirect:/";
	    }
	    

		public static <T> List<Map<String, Object>> convertListToMap(Collection<T> target) {
			List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();
			for (T element : target) {
				Map<String,Object> resultMap = new HashMap<String,Object>();
				Field[] fieldList = element.getClass().getDeclaredFields();
				if (fieldList != null && fieldList.length > 0) {
					try {
						for (int i = 0; i < fieldList.length; i++) {
							String curInsName = fieldList[i].getName();
							Field field = element.getClass().getDeclaredField(curInsName);
							field.setAccessible(true);
							Object targetValue = field.get(element);
							resultMap.put(curInsName, targetValue);
						}
						resultList.add(resultMap);
						
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			}
			return resultList;
		}
}