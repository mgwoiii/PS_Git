package com.pmg.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpSession;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pmg.domain.ChkInsertVO;
import com.pmg.domain.Criteria;
import com.pmg.domain.ExpenVO;
import com.pmg.domain.IncomeVO;
import com.pmg.domain.PageMaker;
import com.pmg.domain.UserVO;
import com.pmg.service.ChkInsertService;
import com.pmg.service.ExpenService;
import com.pmg.service.IncomeService;
import com.pmg.service.UserService;


/**
 * Handles requests for the application home page.
 */

@CrossOrigin(origins = "*")
@RestController
public class HomeController {
	
		private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	    
		@Inject
		private UserService userService;
		
		@Inject
		private ChkInsertService chkService;
		
		
		@Inject
		private IncomeService incService;
		
		@Inject
		private ExpenService expService;
		
		
		/**
		 * Simply selects the home view to render by returning its name.
		 */
		
//		@GetMapping(value = "/")
//		public void home(Locale locale, Model model, HttpSession session, HttpServletRequest request) throws Exception {
//					
//			List<UserVO> users  = service2.listAll();
//			
//			String valeu = (String)session.getAttribute("username");
//			System.out.println("들오긴 한다");
//
//			return users;
//		}
		
		@PostMapping(value="/login")
		public UserVO loginUser( @RequestBody UserVO user, HttpSession session) throws Exception {
						
			UserVO userInfo = userService.loginUserRead(user);

			return userInfo;
		}

		@PostMapping(value="/loginChk")
	    public UserVO loginChk( @RequestBody UserVO GetUser) throws Exception{
			
			UserVO ReturnUser = userService.userIdRead(GetUser.getUserId());
			
	        return ReturnUser;

	    }
		

		@PostMapping(value="/userRegister")
	    public UserVO userRegister( @RequestBody UserVO user) throws Exception{
			/*
		    +----+---------+
			| id | grade   |
			+----+---------+
			|  1 | admin   |
			|  2 | normal  |
			|  3 | waiting |
			|  4 | reject  |
			+----+---------+
		 */
		user.setGrade_id(3);
		// 회원등급을 3으로 초기값을 부여해 관리자가 반려 또는 승인을 할 수 있도록 한다. 
		
        return null;

    }
		
		// 개인정보를 이용한 아이디 찾기
		@PostMapping(value="/userIdFind")
	    public List<UserVO> userIdFind( @RequestBody UserVO user) throws Exception{

			List<UserVO> getUserVO = userService.userIdFind(user);
			
//			int count = 0;
//			for(UserVO str : getUserVO){
//			    System.out.println(count + "번째 id는: " + str.getUserId());
//			    count++;
//			}
//			
		    return getUserVO;
    }	
		
		
		
		
		// 개인정보를 이용한 비밀번호 찾기
		@PostMapping(value="/userFindpw")
	    public UserVO userFindpw( @RequestBody UserVO user) throws Exception{

			UserVO getUserVO = userService.userPwFind(user);

		    return getUserVO;
    }	
		
		
		// 비밀번호 조회 id, 원하는 password 값 (update)
		@PostMapping(value="/userPwUpdate")
	    public void userPwUpdate( @RequestBody UserVO user) throws Exception{
			
			userService.userPwUpdate(user);
		   
    }			
		
		
		// 비밀번호 조회 id, 원하는 password 값 (select)
		@PostMapping(value="/userPwSearch")
	    public UserVO userPwSearch( @RequestBody UserVO user) throws Exception{

			UserVO getUserVO = userService.userPwSearch(user);

			return getUserVO;

    }			
		
		
		
		// 유저 정보 조회 (id로 검색)
		@PostMapping(value="/userInfoRead")
	    public UserVO userInfoRead( @RequestBody UserVO user) throws Exception{
			
			UserVO getUserVO = userService.userInfoRead(user.getId());
		  
			return getUserVO;

		   
    }			
		
		// user 정보 update
		@PostMapping(value="/userInfoUpdate")
	    public UserVO userInfoUpdate( @RequestBody UserVO user) throws Exception{
			
			UserVO getUserVO = userService.userInfoUpdate(user);
						
			return getUserVO;

		   
    }				
		
		// user 모든정보 조회 [페이징 처리]
		@RequestMapping(value = "/page/{page}", method = RequestMethod.GET)
		public List<UserVO> userIdListRead(@PathVariable("page") int page) throws Exception {

			Criteria cri = new Criteria();
			cri.setPage(page);
			
			List<UserVO> users = userService.userIdListReadTen(cri);

			return users;
		}
		
		
		@GetMapping(value="/pageMaker/page/{page}")
		 public PageMaker pageMaker(@PathVariable("page") int page) throws Exception{

			PageMaker pageMaker = new PageMaker();
			Criteria cri = new Criteria();
			
			cri.setPage(page);
			
			pageMaker.setCri(cri);
			pageMaker.setTotalCount(userService.userIdListCount());

			return pageMaker;

		   
    }				
		
		// 비밀번호 조회 id, 원하는 password 값 (update)
		@PostMapping(value="/userGradeInsert")
	    public void userGradeInsert( @RequestBody UserVO user) throws Exception{
			userService.userGradeInsert(user);
		}		
		
		
		
		/* ================================= Chkinsert ==========================*/
		
		// user 모든정보 조회 [페이징 처리]
//		@GetMapping(value="/pageMaker/page/{page}")
//		WeekList/chkDateStart/chkDateEnd/
		
		@GetMapping(value = "/WeekList/chkDateStart/{chkDateStart}/chkDateEnd/{chkDateEnd}")
		public List<ChkInsertVO> WeekList(
			//	@RequestParam("chkDateStart") String chkDateStart,@RequestParam("chkDateEnd") String chkDateEnd				
				@PathVariable String chkDateStart , @PathVariable String chkDateEnd
				) throws Exception {
				
				ChkInsertVO chkinsert	= new ChkInsertVO();
				
				chkinsert.setChkDateStart(chkDateStart);
				chkinsert.setChkDateEnd(chkDateEnd);

					return chkService.WeekList(chkinsert);

				}

		@GetMapping(value="/chkinDateOverlap_Day/ChkDate/{ChkDate}")
		 public List<ChkInsertVO> chkinDateOverlap_Day(@PathVariable String ChkDate) throws Exception{
			
			ChkInsertVO chkinsert= new ChkInsertVO();
			
			chkinsert.setChkDate(ChkDate);

			List<ChkInsertVO> ch = chkService.chkinDateOverlap_Day(chkinsert);
			
			return ch;
			

   }		

		@GetMapping(value="/chkinDateOverlap/ChkDate/{ChkDate}/btnId/{btnId}")
		 public boolean chkinDateOverlap(@PathVariable String ChkDate , @PathVariable int btnId) throws Exception{
			
			ChkInsertVO chkinsert= new ChkInsertVO();
			
			chkinsert.setChkDate(ChkDate);
			chkinsert.setClassName_id(btnId);
			
			ChkInsertVO ch = chkService.chkinDateOverlap(chkinsert);
			
			// 성공시 db 등록
			if(ch == null) {
				chkinsert.setCkeckName_id(1);
				chkService.chkinDateRegister(chkinsert);
				return true;
				
			// 실패시 db 삭제
			}else {
				chkService.chkinDateDelete(chkinsert);

				return false;
			}

  }		
		

		
		@GetMapping(value="/incomeDayRead/IncomeDate/{IncomeDate}")
		 public List<IncomeVO> incomeDayRead(@PathVariable String IncomeDate) throws Exception{
			
			IncomeVO income = new IncomeVO();
			
			income.setIncomeDate(IncomeDate);
			
			List<IncomeVO> inc = incService.incomeDayRead(income);
			
			return inc;

		}		
		
		
		
		
		@PostMapping(value="/incomeRegister")
		 public String incomeRegister( @RequestBody IncomeVO income) throws Exception{

			String str = null;
			incService.incomeRegister(income);
			
			
			if(income.getClassName_id() == 1) {
				str = "btnName101";
			}else if(income.getClassName_id() == 2) {
				str = "btnName102";
			}else if(income.getClassName_id() == 3) {
				str = "btnName201";
			}else if(income.getClassName_id() == 4) {
				str = "btnName202";
			}else if(income.getClassName_id() == 5) {
				str = "btnName203";
			}else if(income.getClassName_id() == 6) {
				str = "btnName204";
			}else if(income.getClassName_id() == 7) {
				str = "btnName301";
			}else if(income.getClassName_id() == 8) {
				str = "btnName302";
			}else if(income.getClassName_id() == 9) {
				str = "btnName303";
			}else if(income.getClassName_id() == 10) {
				str = "btnName304";
			}
			
			System.out.println(str);
			return str;
		}
		
		@PostMapping(value="/incomeDayUpdate")
		 public String incomeDayUpdate( @RequestBody IncomeVO income) throws Exception{

			String str = null;
			
			
			incService.incomeDayUpdate(income);
			
			
			if(income.getClassName_id() == 1) {
				str = "btnName101";
			}else if(income.getClassName_id() == 2) {
				str = "btnName102";
			}else if(income.getClassName_id() == 3) {
				str = "btnName201";
			}else if(income.getClassName_id() == 4) {
				str = "btnName202";
			}else if(income.getClassName_id() == 5) {
				str = "btnName203";
			}else if(income.getClassName_id() == 6) {
				str = "btnName204";
			}else if(income.getClassName_id() == 7) {
				str = "btnName301";
			}else if(income.getClassName_id() == 8) {
				str = "btnName302";
			}else if(income.getClassName_id() == 9) {
				str = "btnName303";
			}else if(income.getClassName_id() == 10) {
				str = "btnName304";
			}
			
			System.out.println(str);
			return str;
		}
		
		@PostMapping(value="/incomeDayDelete")
		 public String incomeDayDelete( @RequestBody IncomeVO income) throws Exception{

			String str = null;
			
			incService.incomeDayDelete(income);
			
			
			if(income.getClassName_id() == 1) {
				str = "btnName101";
			}else if(income.getClassName_id() == 2) {
				str = "btnName102";
			}else if(income.getClassName_id() == 3) {
				str = "btnName201";
			}else if(income.getClassName_id() == 4) {
				str = "btnName202";
			}else if(income.getClassName_id() == 5) {
				str = "btnName203";
			}else if(income.getClassName_id() == 6) {
				str = "btnName204";
			}else if(income.getClassName_id() == 7) {
				str = "btnName301";
			}else if(income.getClassName_id() == 8) {
				str = "btnName302";
			}else if(income.getClassName_id() == 9) {
				str = "btnName303";
			}else if(income.getClassName_id() == 10) {
				str = "btnName304";
			}
			
			System.out.println(str);
			return str;
		}
		
		
 
		@GetMapping(value="/incomeMonthRead/incomeDateStart/{incomeDateStart}/incomeDateEnd/{incomeDateEnd}")
		 public List<IncomeVO> incomeMonthRead
		 (@PathVariable String incomeDateStart , @PathVariable String incomeDateEnd) 
		  throws Exception{
			IncomeVO income = new IncomeVO();

			income.setIncomeDateStart(incomeDateStart);
			income.setIncomeDateEnd(incomeDateEnd);
			
			
			return incService.incomeMonthRead(income);
		}


		@GetMapping(value="/incomeMonthAndDaySumRead/{MonthDate}")
		 public List<IncomeVO> incomeMonthAndDaySumRead (@PathVariable String MonthDate) throws Exception{
			
			
			IncomeVO income = new IncomeVO();

			income.setIncomeDateStart(MonthDate);
			
			List<IncomeVO> inc = incService.incomeMonthAndDaySumRead(income);
//			
			return inc;
		}
		
		
		@GetMapping(value="/expenMonthAndDaySumRead/{Monthdate}")
		 public List<ExpenVO> expenMonthAndDaySumRead (@PathVariable String Monthdate) throws Exception{
			
			
			ExpenVO expen = new ExpenVO();

			expen.setExpenDateStart(Monthdate);
			
			List<ExpenVO> exp = expService.expenMonthAndDaySumRead(expen);
			
			return exp;
		}
		
		
		
		@GetMapping(value="/expenDateSearch/{dateSearch}")
		 public List<ExpenVO> expenDateSearch (@PathVariable String dateSearch) throws Exception{
			
			
			ExpenVO expen = new ExpenVO();

			expen.setExpenDate(dateSearch);
			
			List<ExpenVO> exp = expService.expenDateSearch(expen);
			
			return exp;
		}

		@GetMapping(value="/expenDayDelete/{id}")
		 public void expenDayDelete (@PathVariable int id) throws Exception{
			
			expService.expenDayDelete(id);
			
		}
		
		@PostMapping(value="/expenRegister")
		 public void expenRegister( @RequestBody ExpenVO expen) throws Exception{

			expService.expenRegister(expen);
			
		}
		
		
		
		
		
		@GetMapping(value="/expenMonthRead/expenDateStart/{expenDateStart}/expenDateEnd/{expenDateEnd}")
		 public List<ExpenVO> expenMonthRead
		 (@PathVariable String expenDateStart , @PathVariable String expenDateEnd) 
		  throws Exception{
			
			ExpenVO expen = new ExpenVO();

			expen.setExpenDateStart(expenDateStart);
			
			expen.setExpenDateEnd(expenDateEnd);
			
			List<ExpenVO> exp =  expService.expenMonthRead(expen);

			
			return exp;

		}

}		
		/*
		 * 	@Test
	public void incomeRegister() throws Exception{

		
		income.setClassName_id(1);
		income.setReserveType_id(1);
		income.setRoomPrice(1);
		income.setRoomType_id(1);
		income.setBbqPrice(1);
		income.setBbqType_id(1);
		income.setExtraPeoplePrice(1);
		income.setExtraPeopleType_id(1);
		income.setTotalPrice(1);
		income.setNote(null);
		income.setGuestName(null);
		income.setIncomeDate(null);
		

		
		service.incomeRegister(income);
		
	}*/
		 
		
//		@PostMapping(value="/insert")
//		public void insertUser(@RequestBody UserVO user) throws Exception {
//
//			service2.create(user);
//			
		
	    
//		@GetMapping(value = "/")
//		public List<UserVO> home(Locale locale, Model model, HttpSession session, HttpServletRequest request) throws Exception {
//					
//			List<UserVO> users  = service2.listAll();
//			
//			String valeu = (String)session.getAttribute("username");
//			System.out.println("들오긴 한다");
//
//			return users;
//		}
//		
//		@PostMapping(value="/login")
//		public UserVO loginUser( @RequestBody UserVO user2, HttpSession session) throws Exception {
//
//			//System.out.println(user2.getId() +" 이랑 " + user2.getPassword());
//			
//			UserVO user = service2.login(user2);
//			System.out.println(user);
//			if(user == null) {
//				System.out.println(user);
//				return null;
//			}else {
//				
//				session.setAttribute("username", user.getUsername());
//
//				return user;
//
//			}
//		}
//
//		@PostMapping(value="/insert")
//		public void insertUser(@RequestBody UserVO user) throws Exception {
//
//			service2.create(user);
//			
//		}
		
//		@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
//		public void deleteUser(@PathVariable("id") int id) throws Exception {
//			service2.delete(id);
//			
//		}
//		
//		@RequestMapping(value = "/select/{id}", method = RequestMethod.GET)
//		public UserVO selectUser(@PathVariable("id") int id, HttpSession session) throws Exception {
//			
//			UserVO user	= service2.read(id);
//			
//			System.out.println(session.getAttribute("username"));
//			
//			return user;
//			
//		}
//		
//
//		@RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
//		public void updateUser(@PathVariable int id, @RequestBody UserVO user) throws Exception {
//			
//			service2.update(user);
//						
//		}
//		
//		
//	    
//	    @RequestMapping(value="/create", method=RequestMethod.GET)
//	    public void createGET(BoardVO board, Model model) throws Exception{
//	        System.out.println("/create 입니다. GET방식");
//	        
//	    }
//	    
//	    @RequestMapping(value = "/create", method=RequestMethod.POST )
//	    public String createPOST(BoardVO board, Model model) throws Exception{
//	        System.out.println("/board/create POST방식 입니다.");
//	        System.out.println(board.toString());
//	        
//	        service.create(board);
//	        model.addAttribute("result", "성공");
//	        
//	        return "redirect:/";
//	    }
//	    
//	    @RequestMapping(value = "/read", method=RequestMethod.GET )
//	    public void read(@RequestParam("b_no")int b_no, Model model, 
//	    		HttpServletRequest request) throws Exception{
//	       
//			
//	    	model.addAttribute(service.read(b_no));
//
//	    }
	    
//	    @RequestMapping(value = "/delete", method=RequestMethod.POST )
//	    public String delete(@RequestParam("b_no")int b_no, Model model) throws Exception{
//	        
//	        service.delete(b_no);
//	        //model.addAttribute("result", "delete 성공");
//	        System.out.println("delete 성공");
//	        return "redirect:/";
//	    }
//	    
	    
//	    @RequestMapping(value = "/modify", method=RequestMethod.GET )
//	    public void modify(@RequestParam("b_no")int b_no, Model model) throws Exception{
//	       
//	    	model.addAttribute(service.read(b_no));
//
//	    }
//	
//	    @RequestMapping(value = "/modify", method=RequestMethod.POST )
//	    public String modifyPOST(BoardVO board, Model model) throws Exception{
//	       
//	    	System.out.println(board.getB_no());
//	    	
//	    	service.update(board);
//	    	
//	        model.addAttribute("result", "성공2222");
//	        
//	        return "redirect:/";
//	    }
//	    
//
//		public static <T> List<Map<String, Object>> convertListToMap(Collection<T> target) {
//			List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();
//			for (T element : target) {
//				Map<String,Object> resultMap = new HashMap<String,Object>();
//				Field[] fieldList = element.getClass().getDeclaredFields();
//				if (fieldList != null && fieldList.length > 0) {
//					try {
//						for (int i = 0; i < fieldList.length; i++) {
//							String curInsName = fieldList[i].getName();
//							Field field = element.getClass().getDeclaredField(curInsName);
//							field.setAccessible(true);
//							Object targetValue = field.get(element);
//							resultMap.put(curInsName, targetValue);
//						}
//						resultList.add(resultMap);
//						
//					} catch (Exception e) {
//						// TODO Auto-generated catch block
//						e.printStackTrace();
//					}
//				}
//			}
//			return resultList;
//		}

