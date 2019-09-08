<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>Hii you have made it..</h1>
<br><br>
User : <%= session.getId() %> 
<form action="logout">
 <input type="submit" name="b1" value="LOGOUT">
</form>
</body>
</html>