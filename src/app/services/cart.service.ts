import { Injectable, EventEmitter, Input, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  news=[
    {
      id :1,
      Name :"Đắc nhân tâm",
      Price: 2000000,
      Discription: " là một cuốn sách nổi tiếng trong lĩnh vực phát triển bản thân và quản lý tình cảm, được viết bởi Dale Carnegie và được xuất bản lần đầu vào năm 1936. Cuốn sách này trở thành một trong những cuốn sách phát triển cá nhân được ưa chuộng và đọc nhiều nhất trên toàn thế giới",
      Status: 72,
      Image: "https://www.reader.com.vn/uploads/images/2019/10/30/19/dac-nhan-tam_600x865.png"
    },
    {
      id :2,
      Name :"Sống chậm",
      Price: 3000000,
      Discription: " là một cuốn sách và một triết lý sống tập trung vào việc tận hưởng cuộc sống một cách chậm rãi, tập trung vào hiện tại và giảm bớt áp lực và căng thẳng trong cuộc sống hàng ngày. Triết lý này thúc đẩy người đọc tập trung vào chất lượng của cuộc sống thay vì số lượng hoạt động hoặc thành tựu.",
      Status: 52,
      Image: "https://www.elle.vn/wp-content/uploads/2021/07/15/442832/1-sach-hay-song-cham.jpg"
    },
    {
      id :3,
      Name :"Mỗi Lần Vấp Ngã Là Trường Thành",
      Price: 2990000,
      Discription: "là một cuốn sách tự lực và phát triển bản thân, tác giả bởi Nguyễn Thành Nam. Cuốn sách này thường tập trung vào việc xem xét sự vấp ngã và khám phá cách chúng có thể là một phần quan trọng của quá trình trưởng thành và học hỏi trong cuộc sống.",
      Status: 50,
      Image: "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-moi-lan-vap-nga-la-mot-lan-truong-thanh.jpg"
    },
    {
      id :4,
      Name :"Muôn kiếp nhân sinh",
      Price: 2300000,
      Discription: "là một tiểu thuyết ngôn tình lãng mạn với sự xen lẫn của yếu tố thần thoại và kiếp trước kiếp này. Nó kể về một câu chuyện tình yêu kéo dài qua nhiều kiếp nhân sinh của hai nhân vật chính.",
      Status: 43,
      Image: "https://www.tuhocielts.vn/wp-content/uploads/2020/11/muon-kip-nhan-sinh.png"
    },
    {
      id :5,
      Name :"Chúa tể của những chiếc nhẫn",
      Price: 2400000,
      Discription: "là một tác phẩm vĩ đại của nhà văn người Anh J.R.R. Tolkien. Bộ tiểu thuyết này là một trong những tác phẩm vĩ đại nhất của thể loại thần thoại học và viễn tưởng.",
      Status: 21,
      Image: "https://dichthuatcongchung247.com/wp-content/uploads/2022/05/Chua-te-nhung-chiec-nhan-dich-thuat-cong-chung-247.jpg"
    },
    {
      id :6,
      Name :"Dế mèn phiêu lưu ký ",
      Price: 1990000,
      Discription: "là một con dế mèn bình thường được tạo ra bởi một người mộc. Nhưng với lòng mong muốn trở thành một đứa trẻ thật sự, Dế Mèn bắt đầu trải qua các cuộc phiêu lưu và thách thức để học được cách trở thành một đứa trẻ có đạo đức và trưởng thành.",
      Status: 39,
      Image: "https://giatricuocsong.org/wp-content/uploads/2021/08/de-men-phieu-luu-ky_ki.jpg"
    },
    {
      id :7,
      Name :"Những tấm lòng cao cả ",
      Price: 9990000,
      Discription: "Amina sống trong một ngôi làng nhỏ ở Pakistan và mong muốn đi học để học đọc và viết. Tuy nhiên, gia đình cô không đủ khả năng tài chính để đáp ứng mong muốn của cô. Cuộc sống của Amina bị thay đổi khi một người dâu lớn tuổi tên là Rukhsana mở một lớp học tại làng để giúp các em nhỏ học hành.",
      Status: 60,
      Image: "https://ischool.vn/wp-content/uploads/2022/12/nhung-cuon-sach-hay-cho-tre-10-tuoi-3.jpg"
    },
    {
      id :8,
      Name :"Bên em ngày tháng không tương tư",
      Price: 7350000,
      Discription: "Năm xảy ra trận động đất kinh hoàng ấy, Chu Chính Hiến hai mươi hai tuổi, với tư cách là người thừa kế của nhà họ Chu, anh không được tỏ ra yếu đuối, kể cả khi đánh mất cô gái mà anh yêu thương nhất, nhưng anh không biết rằng, thực ra cô vẫn còn sống, và vẫn rất yêu anh.",
      Status: 70,
      Image: "https://salt.tikicdn.com/cache/w1200/ts/product/9a/a6/9a/ce02d2a22382411e7a9dbcabdfa727fc.jpg"
    },
    {
      id :9,
      Name :"Khi nhìn lên trời xanh tớ sẽ rất nhớ cậu ",
      Price: 5300000,
      Discription: "là một cách thể hiện cảm xúc và tình cảm đối với người khác. Khi bạn nhìn lên trời xanh, bạn thường có cảm giác mở rộng và tự do, và việc kết hợp tình cảm nhớ người khác vào cảnh trời xanh có thể tạo ra một bức tranh tương tự ",
      Status: 70,
      Image: "https://bookbuy.vn/Res/Images/Product/dfgr_100523_1.jpg"
    },
    {
      id :10,
      Name :"Cho tôi xin một vé đi tuổi thơ",
      Price: 6000000,
      Discription: "là một tập hợp các truyện ngắn mang đậm tâm hồn của tuổi thơ và đã góp phần định hình và nuôi dưỡng thế hệ độc giả trẻ bằng những ký ức đáng quý về gia đình, bạn bè, và những khoảnh khắc ngọt ngào.",
      Status: 62,
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Wp_Fqu13FBMKbImpLbu2Q3Ui3V-8B6NPxg&usqp=CAU"
    },
    {
      id :11,
      Name :"Tôi thấy hoa vàng trên cỏ xanh" ,
      Price: 8000000,
      Discription: "Bối cảnh vào những năm 1970 ở một vùng quê Việt Nam nông thôn, thời kỳ chiến tranh đã kết thúc, và cuộc sống bình thường đang dần trở lại.",
      Status: 20,
      Image: "https://ischool.vn/wp-content/uploads/2022/12/nhung-cuon-sach-hay-cho-tre-12-tuoi-1.jpg"
    },
    {
      id :12,
      Name :"Tuổi trẻ đáng giá bao nhiêu",
      Price: 9500000,
      Discription: "Cuốn sách kể về câu chuyện đời thường của Deo, một người trẻ người Burundi (một quốc gia ở Đông Phi) sống trong những hoàn cảnh khó khăn và đầy thách thức.",
      Status: 54,
      Image: "https://isachhay.net/wp-content/uploads/2018/12/tuoi-tre-dang-gia-bao-nhieu-pdf-ebook.jpg"
    },
    {
      id :13,
      Name :"Ông già và biển cả ",
      Price: 9990000,
      Discription: "Tcuộc phiêu lưu của một ngư dân già yếu tên là Santiago, người sống ở làng nhỏ ở Cuba. Santiago đã trải qua 84 ngày không bắt được con cá nào, và mọi người trong làng đã bắt đầu tin rằng ông đã trở thành may rủi và không còn giỏi nữa.",
      Status: "Hết hàng",
      Image: "https://canho.com.vn/wp-content/uploads/2023/08/top-10-cuon-sach-hay-nhat-thoi-dai-5.png"
    },
    {
      id :14,
      Name :"Nếu chỉ còn một ngày để sống",
      Price: 6300000,
      Discription: "Mia bị cuốn vào một vụ tai nạn giao thông nghiêm trọng và bị thương nặng. Cô rơi vào tình trạng hôn mê và có thể thấy cô mình nằm trên giường bệnh, quyết định giữa việc sống và chấp nhận cái chết.",
      Status: 65,
      Image: "https://kinhtechungkhoan.vn/stores/news_dataimages/sinhnguyen/122018/12/16/1711_SONG1.jpg"
    },
    {
      id :15,
      Name :"Hạt giống tâm hồn",
      Price: 2200000,
      Discription: "là một tập hợp các câu chuyện ngắn, truyện ngắn, hoặc bài viết tinh thần được biên soạn bởi nhiều tác giả khác nhau. Các tác phẩm trong thường tập trung vào những giá trị, tình cảm, và trải nghiệm của con người trong cuộc sống hàng ngày",
      Status: 10,
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnvakZp4EO7l5-fhdR3B2xVBYUErcorHdCw&usqp=CAU"
    },
  ]

  cart:any=[]

  addCart(item:any){
    // console.log(item)
    this.cart.push(item)
    console.log(this.cart)
  }


  



}
