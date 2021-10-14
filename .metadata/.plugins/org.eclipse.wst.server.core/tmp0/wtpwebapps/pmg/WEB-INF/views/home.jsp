<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>

<P>  The time on the server is ${serverTime}.</P>

<form action = "create" method="get">
<button type="submit">글쓰기</button>
</form>



  ${user.b_title }비냥22


<table board = "1" width= "880">

<tr>
        <td width="77">
            <p align="center">글번호</p>
            
        </td>

        <td width="327">
            <p align="center">제목</p>
        </td>

        <td width="197">
            <p align="center">작성자</p>
        </td>

        <td width="155">
            <p align="center">작성일</p>
        </td>

        <td width="90">
            <p align="center">조회수</p>
        </td>

        </tr>
           	
        <c:forEach items="${List3}" var ="userVO">
        
        	<tr>
        		<td>${userVO.id }</td>
        		
        		<td>${userVO.username }</a></td>
        		<td>${userVO.password }</a></td>
        		<td>${userVO.firstName }</a></td>
        		<td>${userVO.age }</a></td>
        		<td>${userVO.salary }</a></td>
        	

        	</tr>
        </c:forEach> 
        
        <c:forEach items="${List}" var ="boardVO">
        
        	<tr>
        		<td>${boardVO.b_no }</td>
        		
        		<td><a href='/pnn/read?b_no=${boardVO.b_no }'>${boardVO.b_title }</a></td>
        	
        		<td><fmt:formatDate pattern="yyyy-MM-dd HH:mm"
        			value="${boardVO.b_date }" /> </td>
        		
        		<td><span class = "badge bg-red">${boardVO.b_count }</span>
        	</tr>
        </c:forEach> 
        
</table>

</body>
</html>
