<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
	<title>글 상세보기</title>
</head>
<body>

<form action = "modify" method="POST">
		<table board = "1" width= "880">
		
		<tr>
		        <td width="77">
		            <p align="center">글번호</p>
		        </td>
		        
		        <td width="77">
		        	<input type="hidden" name = "b_no" value="${boardVO.b_no}" />
		            : ${boardVO.b_no }
		        </td>
		</tr>
		
		<tr>
		        <td width="327">
		            <p align="center">제목</p>
		        </td>
				<td width="327">
					<input type="text" name ="b_title" value ="${boardVO.b_title}"></p>
		            
		        </td>
		</tr>   
		
		<tr>
		         <td width="197">
		            <p align="center">내용</p>
		        </td>
				<td width="327">
				  <textarea name="b_detail" rows ="10" cols="70" >${boardVO.b_detail}</textarea><br>
		        </td>
		</tr>  
		
		 <tr> 
		        <td width="197">
		            <p align="center">작성자</p>
		        </td>
		
		        <td width="155">
		        	<input type="text" name ="b_writer" value ="${boardVO.b_writer}"></p>
		        
		        </td>
		</tr>  
		 <tr> 
		        <td width="197">
		            <p align="center">작성일</p>
		        </td>
		
		        <td width="155">
		        ${boardVO.b_date}
		        </td>
		</tr>  
		
		 <tr> 
		        <td width="197">
		            <p align="center">조회수</p>
		        </td>
		
		        <td width="155">
		        ${boardVO.b_count}
		        </td>
		</tr>  
		           	        
		           	        
		           	        
		</table>

	<button type = "submit" >수정</button>
</form>


</body>
</html>