<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<html>
<head>
	<title>글 상세보기 </title>
</head>
<body>

${user.b_title } 입니다.22

<table board = "1" width= "880">

<tr>
        <td width="77">
            <p align="center">글번호</p>
        </td>
        
        <td width="77">
            : ${boardVO.b_no }
        </td>
</tr>

<tr>
        <td width="327">
            <p align="center">제목</p>
        </td>
		<td width="327">
            ${boardVO.b_title}
        </td>
</tr>   

<tr>
         <td width="197">
            <p align="center">작성자</p>
        </td>
		<td width="327">
            ${boardVO.b_title}
        </td>
</tr>  

 <tr> 
        <td width="197">
            <p align="center">작성자</p>
        </td>

        <td width="155">
        ${boardVO.b_writer}
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
<form action = "modify" method="get">
	<input type="hidden" name = "b_no" value="${boardVO.b_no}" />
	<button type = "submit" >수정</button>
</form>

<form action = "delete" method="post">
	<input type="hidden" name = "b_no" value="${boardVO.b_no}" />
	<button type = "submit" >삭제</button>
</form>
</body>
</html>
