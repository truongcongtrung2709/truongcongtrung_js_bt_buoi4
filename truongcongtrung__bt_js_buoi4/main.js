// Bài 1: Sắp xếp theo thứ tự 

document.getElementById('btnXep').onclick = function xepTheoThuTu() {
  //Đầu Vào
  num1 = document.getElementById('num1').value*1;
  num2 = document.getElementById('num2').value*1;
  num3 = document.getElementById('num3').value*1;
  //Xử lý
  var ketQua = "";
  if(num1 > num2 && num2 > num3 ){
    ketQua = num3 + "<" + num2 + "<" + num1;
  }else if(num1 >num2 && num3 > num2){
    ketQua = num2 + "<" + num3 + "<" + num1;
  }else if(num1 >num2 && num3 > num1){
    ketQua = num2 + "<" + num1 + "<" + num3;
  }else if(num2 > num1 && num1 > num3){
    ketQua = num3 + "<" + num1 + "<" + num2;
  }else if(num2 > num3 && num3 > num1){
    ketQua = num1 + "<" + num3 + "<" + num2;
  }else{
    ketQua = num1 + "<" + num2 + "<" + num3;
  }
  console.log(ketQua);
// Đầu ra:
alert(ketQua);
}

// Bài 2: Chương Trình chào hỏi
document.getElementById('btnChao').onclick = function guiLoiChao(){
  //Đầu vào
  let people = document.getElementById('people').value;

  //Xử lý
  let ketQua ="";
  if(people == 1){
    ketQua = " Xin Chào Người Lạ Ơi!";
  }
  if(people == 2){
    ketQua = " Xin Chào Bố!";
  }
  if(people == 3){
    ketQua = " Xin Chào Mẹ!";
  }
  if(people == 4){
    ketQua = " Xin Chào Anh Trai!";
  }
  if(people == 5){
    ketQua = " Xin Chào Em Gái!";
  }
  console.log(ketQua);
  // Đầu ra:
  alert(ketQua);
}

//Bài 3: Đếm số chẵn lẻ

document.getElementById("btnDem").onclick = function() {
  //Đầu vào:
  let so1 = +document.getElementById('so1').value;
  let so2 = +document.getElementById('so2').value;
  let so3 = +document.getElementById('so3').value;

  console.log(so1,so2,so3);

  //Xử lý: 
  let countChan = 0;
  let countLe =0;
  
  if(so1 %2 ===0){
    countChan++;
  }
  if(so2 %2 === 0){
    countChan++;
  }
  if(so3 %2 === 0){
    countChan++;
  }
  console.log("Chẵn: ",countChan);
  countLe = 3 - countChan;
  console.log("Lẻ: ",countLe);
  
  //Đầu ra: 
  alert("Chẳn: "+ countChan + "\n" + "lẻ: " + countLe);
}

//Bài 4: Đoán Hình Tam giác
document.getElementById('btnDoan').onclick = function doanTamGiac(){
  //Đầu vào:
  let a = +document.getElementById('canh1').value;
  let b = +document.getElementById('canh2').value;
  let c = +document.getElementById('canh3').value;

  // xử lý: 
  let ketQua = "";
  if(a === b && b === c)
  {
    ketQua = "Hình Tam Giác đều"
  }else if(a === b || a === c || b === c){
    ketQua = "Hình Tam Giác Cân"
  }else if(c*c === a*a +b*b || a*a === b*b + c*c || b*b === a*a + c*c){
    ketQua = "Hình Tam Giác Vuông"
  }else{
    ketQua = "Là 1 tam giác nào đó"
  }
  //Đầu ra
alert("Tam Giác là: " + ketQua);
}