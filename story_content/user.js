function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fR6spXYzsk":
        Script1();
        break;
      case "5yaO4XviqjO":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var hoten = player.GetVar("hoten");
var lop = player.GetVar("lop");;
var truong = player.GetVar("truong");
var tongdiem = player.GetVar("tongdiem");
var ketqua = player.GetVar("ketqua");
var formData = new FormData();
formData.append("Họ tên", hoten);
formData.append("Lớp", lop);
formData.append("Trường", truong);
formData.append("Tổng điểm", tongdiem);
formData.append("Kết quả", ketqua);


var request = new XMLHttpRequest();
request.open("POST", 
"https://script.google.com/macros/s/AKfycbyeLLxHzJKv8ww7HjIUtMt7Cu1XuZQFq0irG4_u3wnIG_E7d-XICnvC3w7LsaZkf4VO/exec");
request.send(formData);

}

function Script2()
{
  var player = GetPlayer();
var hoten = player.GetVar("hoten");
var lop = player.GetVar("lop");;
var truong = player.GetVar("truong");
var tongdiem = player.GetVar("tongdiem");
var ketqua = player.GetVar("ketqua");
var formData = new FormData();
formData.append("Họ tên", hoten);
formData.append("Lớp", lop);
formData.append("Trường", truong);
formData.append("Tổng điểm", tongdiem);
formData.append("Kết quả", ketqua);


var request = new XMLHttpRequest();
request.open("POST", 
"https://script.google.com/macros/s/AKfycbyeLLxHzJKv8ww7HjIUtMt7Cu1XuZQFq0irG4_u3wnIG_E7d-XICnvC3w7LsaZkf4VO/exec");
request.send(formData);

}

