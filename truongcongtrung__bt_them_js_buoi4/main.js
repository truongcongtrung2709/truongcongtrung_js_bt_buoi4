// Bài 1: Nhập Ngày Tháng Năm

document.getElementById('ngayHomQua').onclick = function ngayHomQua(){
  // Đầu vào:
let ngay = +document.getElementById('ngay').value;
let thang = +document.getElementById('thang').value;
let nam = +document.getElementById('nam').value;

// Xử lý

  let ketQua = "";
  if(ngay <1 || ngay >31)
  {
    ketQua="Ngày không hợp lệ";
    alert(ketQua);
    return;
  }else if(thang <1 || thang >12){
    ketQua="Tháng Không hợp lệ";
    alert(ketQua);
    return;
  }
if(ngay === 1){
  switch(thang){
    case 4: 
    case 6: 
    case 9: 
    case 11:{
      ngay = 30;
      break;
    } 
    case 1:
    case 3: 
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:{
      ngay =31;
      break;
    }
    case 2:{
      ngay = 28;
      break;
    }
  }
  if(thang === 1){
    thang =12;
    nam--;
  }
  else{
    thang--;
  }
}
else{
  ngay--;
}
//Đầu ra
  ketQua = "Ngày hôm qua:" + ngay + "/" + thang + "/" + nam ;
  alert(ketQua);
}
document.getElementById('ngayMai').onclick = function ngayMai() {
  // Đầu vào:
  let ngay = +document.getElementById('ngay').value;
  let thang = +document.getElementById('thang').value;
  let nam = +document.getElementById('nam').value;
  let tg = 0;

  // Xử lý: 
  let ketQua ="";
  if(ngay <1 || ngay >31)
  {
    ketQua="Ngày không hợp lệ";
    alert(ketQua);
    return;
  }else if(thang <1 || thang >12){
    ketQua="Tháng Không hợp lệ";
    alert(ketQua);
    return;
  }
  switch(thang){
    case 4: 
    case 6: 
    case 9: 
    case 11:{
      tg = 30;
      break;
    } 
    case 1:
    case 3: 
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:{
      tg =31;
      break;
    }
    case 2:{
      tg = 28;
      break;
    }
  }
  ngay = (ngay%tg) +1;
  if(ngay==1)
  {
    thang = (thang%12)+1;
  }
  // Đầu ra
  ketQua = "Ngày Mai:" + ngay + "/" + thang + "/" + nam ;
  alert(ketQua);
}

// Bài 2: Tính ngày

document.getElementById('tinhNgay').onclick = function tinhNgay(){
  //Đầu vào
  let month = +document.getElementById('month').value;
  let year = +document.getElementById('year').value;
console.log(year, month);
  //Xử Lý:
  let ketQua ="";
  let kq = 0;
  switch(month)
    {
        case 4:
        case 6:
        case 9:
        case 11:
          kq = 30;
            break;
        case 2:
          if(year%4===0 && year%100!==0 || year%400===0)
          {
            kq = 29;
          }else{
            kq = 28;
          }
            break;
        default:
          kq = 31;
    }
    // Đầu ra:
    ketQua="Tháng " + month + " năm " + year + " có " + kq + " ngày " ;
    alert(ketQua);
}

// Bài 3: Đọc Số
document.getElementById('docSo').onclick = function docSo(){
//Đầu vào:
  let so = +document.getElementById('so').value;
  // xử lý:
  let tram = Math.floor(so/100);
  let chuc = Math.floor((so%100)/10);
  let donVi = Math.floor((so%100)%10);
  console.log(tram,chuc,donVi);

  let ketQua ="";

  switch(tram){
    case 1:{
      tram = "Một Trăm";
      break;
    }
    case 2:{
      tram = "Hai Trăm";
      break;
    }
    case 3:{
      tram = "Ba Trăm";
      break;
    }
    case 4:{
      tram = "Bốn Trăm";
      break;
    }
    case 5:{
      tram = "Năm Trăm";
      break;
    }
    case 6:{
      tram = "Sáu Trăm";
      break;
    }
    case 7:{
      tram = "Bảy Trăm";
      break;
    }
    case 8:{
      tram = "Tám Trăm";
      break;
    }
    case 9:{
      tram = "Chín Trăm";
      break;
    }
  }
  switch(chuc){
    case 1:{
      chuc = "Mười";
      break;
    }
    case 2:{
      chuc = "Hai mươi";
      break;
    }
    case 3:{
      chuc = "Ba mươi";
      break;
    }
    case 4:{
      chuc = "Bốn mươi";
      break;
    }
    case 5:{
      chuc = "Năm mươi";
      break;
    }
    case 6:{
      chuc = "Sáu mươi";
      break;
    }
    case 7:{
      chuc = "Bảy mươi";
      break;
    }
    case 8:{
      chuc = "Tám mươi";
      break;
    }
    case 9:{
      chuc = "Chín mươi";
      break;
    }
  }
  switch(donVi){
    case 1:{
      donVi = "Mốt";
      break;
    }
    case 2:{
      donVi = "Hai";
      break;
    }
    case 3:{
      donVi = "Ba";
      break;
    }
    case 4:{
      donVi = "Bốn";
      break;
    }
    case 5:{
      donVi = "Năm";
      break;
    }
    case 6:{
      donVi = "Sáu";
      break;
    }
    case 7:{
      donVi = "Bảy";
      break;
    }
    case 8:{
      donVi = "Tám";
      break;
    }
    case 9:{
      donVi = "Chín";
      break;
    }
  }
  ketQua= tram + " " + chuc + " " + donVi;
  alert(ketQua);
}
// Bài 4: Tìm sinh viên xa trường nhất