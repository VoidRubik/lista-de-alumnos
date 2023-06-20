name_of_the_student_array = [];
function sumbit()
{
var display_student_array = [];
for (var j = 1; j <= 4; j++)
{
var name_of_the_the_student = docuument.getElementById("name_of_the_student_"+j).value
console.log (name_of_the_the_student);
name_of_the_the_student_array.push(name_of_the_the_student);   
}
console.log(name_of_the_the_student_array);
 var lenght_of_name_of_students_array = name_of_the_students_array.lenght;
 console.log(lenght_of_name_of_students_array);
 for (var k = 0; k < lenght_of_name_of_students; k++)
 {
 display_student_array.push("<h4>NAME : " + name_of_student_array[k] + "</h4>");   }
 console.log(display_student_array);
 }

 console.log(display_student_array);
 document.getElementById("display_name_with_commas").innerHTML = display_student_array;
 var remove_commas = display_student_array.join("");
 console.log(remove_commas);
 document.getElementById("display_name_without_commas").innerHTML = remove_commas;


function sorting()
{
name_of_the_student_array.sort();
console.log(nombre_alumno_array);
document.getElementById("ver_nombre").innerHTML = nombre_alumno_array; 


document.getElementById("sumbit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}